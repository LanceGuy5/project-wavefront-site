import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  useFBX,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { Canvas, invalidate, useFrame, useThree } from "@react-three/fiber";
import {
  FC,
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

export interface ViewerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  modelXOffset?: number;
  modelYOffset?: number;
  defaultRotationX?: number;
  defaultRotationY?: number;
  defaultZoom?: number;
  minZoomDistance?: number;
  maxZoomDistance?: number;
  enableMouseParallax?: boolean;
  enableManualRotation?: boolean;
  enableHoverRotation?: boolean;
  enableManualZoom?: boolean;
  ambientIntensity?: number;
  keyLightIntensity?: number;
  fillLightIntensity?: number;
  rimLightIntensity?: number;
  environmentPreset?:
    | "city"
    | "sunset"
    | "night"
    | "dawn"
    | "studio"
    | "apartment"
    | "forest"
    | "park"
    | "none";
  autoFrame?: boolean;
  placeholderSrc?: string;
  showScreenshotButton?: boolean;
  fadeIn?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  onModelLoaded?: () => void;
}

const isTouch =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);
const deg2rad = (d: number) => (d * Math.PI) / 180;
const DECIDE = 8; // px before we decide horizontal vs vertical
const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = deg2rad(6);
const HOVER_EASE = 0.15;

const Loader: FC<{ placeholderSrc?: string }> = ({ placeholderSrc }) => {
  const { progress, active } = useProgress();
  if (!active && placeholderSrc) return null;
  return (
    <Html center>
      {placeholderSrc ? (
        <img
          src={placeholderSrc}
          width={128}
          height={128}
          style={{ filter: "blur(8px)", borderRadius: 8 }}
        />
      ) : (
        `${Math.round(progress)} %`
      )}
    </Html>
  );
};

const DesktopControls: FC<{
  pivot: THREE.Vector3;
  min: number;
  max: number;
  zoomEnabled: boolean;
  enableRotate: boolean;
}> = ({ pivot, min, max, zoomEnabled, enableRotate }) => {
  const ref = useRef<any>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.target.copy(pivot);
      ref.current.update();
    }
  });
  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={enableRotate}
      enableZoom={zoomEnabled}
      minDistance={min}
      maxDistance={max}
      minPolarAngle={0}
      maxPolarAngle={2 * Math.PI}
      dampingFactor={0.05}
      rotateSpeed={1}
      target={pivot}
    />
  );
};

interface ModelInnerProps {
  url: string;
  xOff: number;
  yOff: number;
  pivot: THREE.Vector3;
  initYaw: number;
  initPitch: number;
  minZoom: number;
  maxZoom: number;
  enableMouseParallax: boolean;
  enableManualRotation: boolean;
  enableHoverRotation: boolean;
  enableManualZoom: boolean;
  autoFrame: boolean;
  fadeIn: boolean;
  autoRotate: boolean;
  autoRotateSpeed: number;
  onLoaded?: () => void;
}

const ModelInner: FC<ModelInnerProps> = ({
  url,
  xOff,
  yOff,
  pivot,
  initYaw,
  initPitch,
  minZoom,
  maxZoom,
  enableMouseParallax,
  enableManualRotation,
  enableHoverRotation,
  enableManualZoom,
  autoFrame,
  fadeIn,
  autoRotate,
  autoRotateSpeed,
  onLoaded,
}) => {
  const outer = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);
  const { camera, gl } = useThree();
  const [objModel, setObjModel] = useState<THREE.Object3D | null>(null);

  const vel = useRef({ x: 0, y: 0, z: 0 });
  const tPar = useRef({ x: 0, y: 0 });
  const cPar = useRef({ x: 0, y: 0 });
  const tHov = useRef({ x: 0, y: 0 });
  const cHov = useRef({ x: 0, y: 0 });

  const ext = useMemo(() => url.split(".").pop()!.toLowerCase(), [url]);

  // Manual fetch for .obj files
  useEffect(() => {
    if (ext === "obj") {
      fetch(url)
        .then((response) => {
          if (!response.ok)
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
          return response.text();
        })
        .then((text) => {
          const loader = new OBJLoader();
          const object = loader.parse(text);
          setObjModel(object);
        })
        .catch((error) => {
          console.error("Error loading OBJ file:", {
            message: error.message,
            stack: error.stack,
            url,
          });
          setObjModel(null);
        });
    }
  }, [url, ext]);

  const content = useMemo<THREE.Object3D | null>(() => {
    if (ext === "glb" || ext === "gltf") return useGLTF(url).scene.clone();
    if (ext === "fbx") return useFBX(url).clone();
    if (ext === "obj") return objModel ? objModel.clone() : null;
    console.error("Unsupported format:", ext);
    return null;
  }, [url, ext, objModel]);

  const pivotW = useRef(new THREE.Vector3());
  useLayoutEffect(() => {
    if (!content || !outer.current || !inner.current) return;
    const g = inner.current;
    g.updateWorldMatrix(true, true);

    const box = new THREE.Box3().setFromObject(g);
    const center = new THREE.Vector3();
    box.getCenter(center);
    const size = box.getSize(new THREE.Vector3());
    // Log vertex data for first mesh (if available)
    g.traverse((o: any) => {
      if (o.isMesh && o.geometry) {
        const positions = o.geometry.attributes.position.array;
      }
    });

    const maxDim = Math.max(size.x, size.y, size.z);
    const s = 1 / (maxDim * 2); // Scale based on max dimension
    g.position.set(-center.x, -center.y, -center.z); // Center model at origin
    g.scale.setScalar(s);

    g.traverse((o: any) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (fadeIn) {
          o.material.transparent = true;
          o.material.opacity = 0;
        }
      }
    });

    // Set pivot to world origin (model is centered)
    /*

        Y
        |
        |
        |______X
       /
      /
     Z

    */
    pivotW.current.set(0, 0.5 * center.y, 0);
    pivot.copy(pivotW.current);
    outer.current.position.copy(pivotW.current); // Place outer at origin
    outer.current.rotation.set(0, 0, 0); // Reset rotation (OrbitControls handles it)

    if ((camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      const persp = camera as THREE.PerspectiveCamera;
      const fitR = maxDim * s * 1.2; // Adjust distance for model size
      const d = fitR / Math.sin((persp.fov * Math.PI) / 180 / 2);
      persp.position.set(0, 0, d); // Camera at z=d, looking at origin
      persp.lookAt(pivotW.current); // Target pivot (origin)
      persp.near = d / 1000;
      persp.far = d * 1000;
      persp.updateProjectionMatrix();
    }

    if (fadeIn) {
      let t = 0;
      const id = setInterval(() => {
        t += 0.05;
        const v = Math.min(t, 1);
        g.traverse((o: any) => {
          if (o.isMesh) o.material.opacity = v;
        });
        invalidate();
        if (v === 1) {
          clearInterval(id);
          onLoaded?.();
        }
      }, 16);
      return () => clearInterval(id);
    } else onLoaded?.();
  }, [content, camera, pivot, fadeIn, onLoaded]);

  useEffect(() => {
    if (!enableManualRotation || isTouch) return;
    const el = gl.domElement;
    let drag = false;
    let lx = 0,
      ly = 0,
      lastAngle = 0;
    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      lastAngle = Math.atan2(0, 0); // Initialize angle
      console.log("Mouse down:", { clientX: e.clientX, clientY: e.clientY });
      window.addEventListener("pointerup", up);
    };
    const move = (e: PointerEvent) => {
      if (!drag || !outer.current) return;
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      const angle = Math.atan2(dy, dx);
      const da = angle - lastAngle;
      lx = e.clientX;
      ly = e.clientY;
      lastAngle = angle;
      outer.current.rotation.y += dx * ROTATE_SPEED;
      outer.current.rotation.x += dy * ROTATE_SPEED;
      const zRot = da * ROTATE_SPEED * 2; // Increased sensitivity for Z rotation
      outer.current.rotation.z += zRot;
      vel.current = { x: dy * ROTATE_SPEED, y: dx * ROTATE_SPEED, z: zRot };
      console.log("Mouse move:", {
        dx,
        dy,
        zRot,
        rotationZ: outer.current.rotation.z,
      });
      invalidate();
    };
    const up = () => {
      drag = false;
      console.log("Mouse up");
    };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [gl, enableManualRotation]);

  useEffect(() => {
    if (!isTouch) return;
    const el = gl.domElement;
    const pts = new Map<number, { x: number; y: number }>();
    type Mode = "idle" | "decide" | "rotate" | "twist";
    let mode: Mode = "idle";
    let sx = 0,
      sy = 0,
      lx = 0,
      ly = 0,
      startDist = 0,
      startZ = 0,
      startAngle = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== "touch") return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) {
        mode = "decide";
        sx = lx = e.clientX;
        sy = ly = e.clientY;
        console.log("Touch down:", { clientX: e.clientX, clientY: e.clientY });
      } else if (pts.size === 2 && enableManualZoom) {
        mode = "twist";
        const [p1, p2] = [...pts.values()];
        startDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        startAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
        startZ = camera.position.z;
        console.log("Two-finger touch start:", { startDist, startAngle });
        e.preventDefault();
      }
      invalidate();
    };

    const move = (e: PointerEvent) => {
      const p = pts.get(e.pointerId);
      if (!p || !outer.current) return;
      p.x = e.clientX;
      p.y = e.clientY;

      if (mode === "decide") {
        const dx = e.clientX - sx;
        const dy = e.clientY - sy;
        if (Math.abs(dx) > DECIDE || Math.abs(dy) > DECIDE) {
          if (enableManualRotation && Math.abs(dx) > Math.abs(dy)) {
            mode = "rotate";
            el.setPointerCapture(e.pointerId);
          } else {
            mode = "idle";
            pts.clear();
          }
        }
      }

      if (mode === "rotate") {
        e.preventDefault();
        const dx = e.clientX - lx;
        const dy = e.clientY - ly;
        const angle = Math.atan2(dy, dx);
        const da = angle - startAngle;
        lx = e.clientX;
        ly = e.clientY;
        startAngle = angle;
        outer.current.rotation.y += dx * ROTATE_SPEED;
        outer.current.rotation.x += dy * ROTATE_SPEED;
        const zRot = da * ROTATE_SPEED * 2; // Increased sensitivity for Z rotation
        outer.current.rotation.z += zRot;
        vel.current = { x: dy * ROTATE_SPEED, y: dx * ROTATE_SPEED, z: zRot };
        console.log("Touch rotate:", {
          dx,
          dy,
          zRot,
          rotationZ: outer.current.rotation.z,
        });
        invalidate();
      } else if (mode === "twist" && pts.size === 2) {
        e.preventDefault();
        const [p1, p2] = [...pts.values()];
        const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
        const da = angle - startAngle;
        outer.current.rotation.z += da;
        const ratio = startDist / d;
        camera.position.z = THREE.MathUtils.clamp(
          startZ * ratio,
          minZoom,
          maxZoom,
        );
        startAngle = angle;
        vel.current = { x: 0, y: 0, z: da };
        console.log("Touch twist:", {
          da,
          rotationZ: outer.current.rotation.z,
        });
        invalidate();
      }
    };

    const up = (e: PointerEvent) => {
      pts.delete(e.pointerId);
      if (mode === "rotate" && pts.size === 0) mode = "idle";
      if (mode === "twist" && pts.size < 2) mode = "idle";
      console.log("Touch up");
    };

    el.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointercancel", up, { passive: true });
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [gl, enableManualRotation, enableManualZoom, minZoom, maxZoom]);

  useEffect(() => {
    if (!isTouch) return;
    const mm = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !outer.current) return; // Prevent null reference
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      if (enableMouseParallax)
        tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
      if (enableHoverRotation)
        tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
      invalidate();
    };
    window.addEventListener("pointermove", mm);
    return () => window.removeEventListener("pointermove", mm);
  }, [enableMouseParallax, enableHoverRotation]);

  useFrame((_, dt) => {
    if (!outer.current) return;
    let need = false;
    cPar.current.x += (tPar.current.x - cPar.current.x) * PARALLAX_EASE;
    cPar.current.y += (tPar.current.y - cPar.current.y) * PARALLAX_EASE;
    const phx = cHov.current.x,
      phy = cHov.current.y;
    cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
    cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;

    const ndc = pivotW.current.clone().project(camera);
    ndc.x += xOff + cPar.current.x;
    ndc.y += yOff + cPar.current.y;
    outer.current.position.copy(ndc.unproject(camera));

    outer.current.rotation.x += cHov.current.x - phx;
    outer.current.rotation.y += cHov.current.y - phy;

    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
      need = true;
    }

    outer.current.rotation.x += vel.current.x;
    outer.current.rotation.y += vel.current.y;
    outer.current.rotation.z += vel.current.z;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;
    vel.current.z *= INERTIA;
    if (
      Math.abs(vel.current.x) > 1e-4 ||
      Math.abs(vel.current.y) > 1e-4 ||
      Math.abs(vel.current.z) > 1e-4
    ) {
      need = true;
      console.log("Frame update:", {
        rotationX: outer.current.rotation.x,
        rotationY: outer.current.rotation.y,
        rotationZ: outer.current.rotation.z,
        vel: vel.current,
      });
    }

    if (
      Math.abs(cPar.current.x - tPar.current.x) > 1e-4 ||
      Math.abs(cPar.current.y - tPar.current.y) > 1e-4 ||
      Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
      Math.abs(cHov.current.y - tHov.current.y) > 1e-4
    )
      need = true;

    if (need) invalidate();
  });

  if (!content) return null;
  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
};

const ModelViewer: FC<ViewerProps> = ({
  url,
  width = 400,
  height = 400,
  modelXOffset = 0,
  modelYOffset = 0,
  defaultRotationX = -50,
  defaultRotationY = 20,
  defaultZoom = 0.5,
  minZoomDistance = 0.5,
  maxZoomDistance = 10,
  enableMouseParallax = true,
  enableManualRotation = true,
  enableHoverRotation = true,
  enableManualZoom = true,
  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = "forest",
  autoFrame = false,
  placeholderSrc,
  showScreenshotButton = true,
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded,
}) => {
  useEffect(() => void useGLTF.preload(url), [url]);
  const pivot = useRef(new THREE.Vector3()).current;
  const contactRef = useRef<THREE.Mesh>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>(null);
  const sceneRef = useRef<THREE.Scene>(null);
  const cameraRef = useRef<THREE.Camera>(null);

  const initYaw = deg2rad(defaultRotationX);
  const initPitch = deg2rad(defaultRotationY);
  const camZ = Math.min(
    Math.max(defaultZoom, minZoomDistance),
    maxZoomDistance,
  );

  const capture = () => {
    const g = rendererRef.current,
      s = sceneRef.current,
      c = cameraRef.current;
    if (!g || !s || !c) return;
    g.shadowMap.enabled = false;
    const tmp: { l: THREE.Light; cast: boolean }[] = [];
    s.traverse((o: any) => {
      if (o.isLight && "castShadow" in o) {
        tmp.push({ l: o, cast: o.castShadow });
        o.castShadow = false;
      }
    });
    if (contactRef.current) contactRef.current.visible = false;
    g.render(s, c);
    const urlPNG = g.domElement.toDataURL("image/png");
    const a = document.createElement("a");
    a.download = "model.png";
    a.href = urlPNG;
    a.click();
    g.shadowMap.enabled = true;
    tmp.forEach(({ l, cast }) => (l.castShadow = cast));
    if (contactRef.current) contactRef.current.visible = true;
    invalidate();
  };

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        touchAction: "pan-y pinch-zoom",
      }}
    >
      {showScreenshotButton && (
        <button
          onClick={capture}
          style={{
            position: "absolute",
            border: "1px solid #fff",
            right: 16,
            top: 16,
            zIndex: 10,
            cursor: "pointer",
            padding: "8px 16px",
            borderRadius: 10,
          }}
        >
          Take Screenshot
        </button>
      )}

      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene, camera }) => {
          rendererRef.current = gl;
          sceneRef.current = scene;
          cameraRef.current = camera;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
        camera={{ fov: 50, position: [0, 0, camZ], near: 0.01, far: 1000 }}
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        {environmentPreset !== "none" && (
          <Environment preset={environmentPreset as any} background={false} />
        )}

        <ambientLight intensity={ambientIntensity} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={keyLightIntensity}
          castShadow
        />
        <directionalLight
          position={[-5, 2, 5]}
          intensity={fillLightIntensity}
        />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

        <ContactShadows
          ref={contactRef as any}
          position={[0, -0.5, 0]}
          opacity={0.35}
          scale={10}
          blur={2}
        />

        <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
          <ModelInner
            url={url}
            xOff={modelXOffset}
            yOff={modelYOffset}
            pivot={pivot}
            initYaw={initYaw}
            initPitch={initPitch}
            minZoom={minZoomDistance}
            maxZoom={maxZoomDistance}
            enableMouseParallax={enableMouseParallax}
            enableManualRotation={enableManualRotation}
            enableHoverRotation={enableHoverRotation}
            enableManualZoom={enableManualZoom}
            autoFrame={autoFrame}
            fadeIn={fadeIn}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            onLoaded={onModelLoaded}
          />
        </Suspense>

        {!isTouch && (
          <DesktopControls
            pivot={pivot}
            min={minZoomDistance}
            max={maxZoomDistance}
            zoomEnabled={enableManualZoom}
            enableRotate={!enableManualRotation} // Disable OrbitControls rotation when manual rotation is enabled
          />
        )}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
