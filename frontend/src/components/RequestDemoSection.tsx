import Image from "next/image";
import DemoForm from "./DemoForm";

export default function RequestDemoSection() {
  return (
    <section className="w-full px-6 py-12 md:px-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm text-gray-500 inline-flex items-center gap-1.5">
            &#x1F680; Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Request a Demo
          </h2>
          <p className="text-gray-500 mt-2">
            Our team will walk you through the platform
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-stretch gap-0 max-w-5xl mx-auto">
          <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/overlay.png"
              alt="Background scenery"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 md:-ml-12 z-10 mt-[-40px] md:mt-0 md:self-center">
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
