import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Mark1RDRE() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden bg-black text-white">
      <Header />

      {/** Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/home/BackgroundWeb.jpeg"
            alt="Mark 1 RDRE Hero Render"
            fill
            priority
            className="object-cover opacity-70"
          />
        </div>
        <div className="animate-fade-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest uppercase">
            Mark I RDRE
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mt-6 text-slate-300">
            Mark I will be Project Wavefront&apos;s first project and the
            world&apos;s first Rotating Detonation Rocket Engine designed,
            built, and operated by undergraduate students. Mark I is a
            technology demonstrator, aimed to pave the way for future, more
            ambitious engine development programs. We aim to design, develop,
            and test this engine in one year on an accelerated timeline.
            Featuring active cooling which enables a 30 second burn time, Mark I
            will be developed as two engines with shared combustion geometry;
            one for machined production and one for additive manufacturing.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">1000 N</span>
              <p>Target Thrust</p>
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
              <span className="text-3xl font-bold">275+ sec</span>
              <p>Isp</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">4&quot;</span>
              <p>Chamber Diameter</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">0.36 kg/s</span>
              <p>Propellant Flow Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/** Overview Section */}
      <section className="grid md:grid-cols-2 gap-12 py-24 px-8 md:px-16 items-center bg-black min-h-screen">
        <Image
          src="/renders/render1BW.png"
          alt="Overview Render"
          width={600}
          height={500}
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">Overview</h2>
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
          <h2 className="text-4xl font-bold mb-8">Key Specs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { label: "Target Thrust", value: "1000 N" },
              { label: "Isp (vacuum)", value: "275+ s" },
              { label: "Burn Time", value: "30 sec" },
              { label: "Propellant FR", value: "0.36 kg/s" },
              { label: "Chamber Diameter", value: '4"' },
              { label: "AM Ver.", value: "GRCop-42" },
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
          src="/renders/MockAnimationRender.png"
          alt="Key Specs Render"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/** Architecture Section */}
      <section className="grid md:grid-cols-2 gap-12 py-24 px-8 md:px-16 items-center bg-black min-h-screen">
        <Image
          src="/renders/renderBW2.png"
          alt="Architecture Render"
          width={600}
          height={500}
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">Architecture</h2>
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
          <h2 className="text-4xl font-bold mb-4">Detonation Innovation</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            The RDRE leverages continuous detonation waves to improve
            thermodynamic efficiency beyond conventional deflagration-based
            engines. This breakthrough reduces propellant consumption while
            achieving higher chamber pressures and stable thrust output.
          </p>
        </div>
        <Image
          src="/renders/renderBW3.png"
          alt="Detonation Chamber Render"
          width={600}
          height={500}
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
          <h2 className="text-4xl font-bold mb-4">Testing & Roadmap</h2>
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
