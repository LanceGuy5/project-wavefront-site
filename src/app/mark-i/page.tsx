import Beams from "@/components/blocks/Beams";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Mark1RDRE() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden bg-black text-white">
      <Header />

      {/** Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1]">
          <Beams
            beamWidth={1}
            beamHeight={15}
            beamNumber={15}
            lightColor="#bfbfbf"
            speed={3}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        <div className="animate-fade-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">MARK I</h1>
          <p className="mx-auto text-xl md:text-2xl text-slate-300 max-w-4xl leading-relaxed">
            Mark I is Project Wavefront&apos;s inaugural design and the
            world&apos;s first rotating detonation rocket engine designed,
            built, and operated by undergraduates. As a technology demonstrator,
            it aims to enable future engine development.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">2.1kN</span>
              <p>Thrust</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">30 sec</span>
              <p>Burn Time</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">Open Cycle</span>
              <p>Water Cooling</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">Methagox</span>
              <p>Fuel/Oxidizer</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">263 sec</span>
              <p>Isp</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">2.56in</span>
              <p>Chamber Diameter</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">0.816kg/s</span>
              <p>Propellant Flow Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">13kHz</span>
              <p>Frequency</p>
            </div>
          </div>
        </div>
      </section>

      {/** Overview Section */}
      <section className="grid md:grid-cols-2 gap-12 py-24 px-8 md:px-16 items-center bg-black min-h-screen">
        <Image
          src="/renders/r1.png"
          alt="Overview Render"
          width={800}
          height={700}
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">OVERVIEW</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            The Mark 1 RDRE is a cutting-edge rotating detonation rocket engine
            engineered by Project Wavefront. Designed to maximize efficiency and
            thrust-to-weight ratio, it pioneers detonation-wave combustion in a
            compact, reusable platform.
          </p>
        </div>
      </section>

      {/** Key Specs Section */}
      <section className="grid md:grid-cols-2 gap-18 py-24 px-8 md:px-16 items-center bg-neutral-900 min-h-screen">
        <div>
          <h2 className="text-4xl font-bold mb-8">KEY SPECS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { label: "Target Thrust", value: "2.1kN" },
              { label: "Isp (vacuum)", value: "263 sec" },
              { label: "Burn Time", value: "30 sec" },
              { label: "Propellant FR", value: "0.816kg/s" },
              { label: "Chamber Diameter", value: "2.56in" },
              { label: "Frequency", value: "13kHz" },
            ].map((spec, i) => (
              <div
                key={i}
                className="bg-neutral-800 p-6 rounded-xl text-center shadow-md"
              >
                <div className="text-2xl font-bold mb-2">{spec.value}</div>
                <div className="text-slate-400">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/renders/r2.png"
          alt="Key Specs Render"
          width={800}
          height={700}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/** Architecture Section */}
      <section className="grid md:grid-cols-2 gap-12 py-24 px-8 md:px-16 items-center bg-black min-h-screen">
        <Image
          src="/renders/r4.png"
          alt="Architecture Render"
          width={800}
          height={700}
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">ARCHITECTURE</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Featuring an annular combustion chamber with integrated cooling
            channels, the Mark 1&apos;s architecture optimizes detonation
            propagation and thermal resilience. Subsystems include the injector
            assembly, detonation chamber, nozzle extension, and advanced
            fuel-delivery manifolds.
          </p>
        </div>
      </section>

      {/** Detonation Innovation Section */}
      <section className="grid md:grid-cols-2 gap-12 py-24 px-8 md:px-16 items-center bg-neutral-900 min-h-screen">
        <div>
          <h2 className="text-4xl font-bold mb-4">DETONATION INNOVATION</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            The RDRE leverages continuous detonation waves to improve
            thermodynamic efficiency beyond conventional deflagration-based
            engines. This breakthrough reduces propellant consumption while
            achieving higher chamber pressures and stable thrust output.
          </p>
        </div>
        <Image
          src="/renders/r3.png"
          alt="Detonation Chamber Render"
          width={700}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/** Testing Section */}
      <section className="grid md:grid-cols-2 gap-12 py-24 px-8 md:px-16 items-center bg-black min-h-screen">
        <Image
          src="/renders/renderBW4.png"
          alt="Testing Render"
          width={600}
          height={500}
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">TESTING & ROADMAP</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Mark 1 will undergo hot-fire testing on Wavefront&apos;s vertical
            test stand. Future iterations focus on full-duration burn stability,
            gimbal integration, and eventual flight-qualified units for orbital
            launch vehicle prototypes.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
