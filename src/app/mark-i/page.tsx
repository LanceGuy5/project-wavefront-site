"use client";

import ModelViewer from "@/components/blocks/ModelViewer";
import { useState } from "react";

export default function MarkI() {
  const [readyToDisplay, setReadyToDisplay] = useState(false);

  return (
    <div className="min-h-screen text-foreground relative overflow-hidden flex flex-col items-center justify-center p-4">
      {readyToDisplay && (
        <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
          <p className="text-sm">Click and drag to rotate, scroll to zoom</p>
        </div>
      )}
      <div className="border border-slate-700 rounded-lg shadow-lg overflow-hidden">
        <ModelViewer
          url="models/model.obj"
          width={400}
          height={400}
          modelXOffset={0}
          modelYOffset={0.3}
          defaultRotationX={0}
          defaultRotationY={0}
          defaultZoom={500}
          minZoomDistance={500}
          maxZoomDistance={1000}
          enableMouseParallax={false}
          enableManualRotation={false}
          enableHoverRotation={false}
          enableManualZoom={true}
          ambientIntensity={0.3}
          keyLightIntensity={1}
          fillLightIntensity={0.5}
          rimLightIntensity={0.8}
          environmentPreset="forest"
          autoFrame={false}
          fadeIn={true}
          autoRotate={false}
          autoRotateSpeed={0.35}
          showScreenshotButton={false}
          placeholderSrc=""
          onModelLoaded={() => setReadyToDisplay(true)}
        />
      </div>
    </div>
  );
}
