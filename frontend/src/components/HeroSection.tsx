import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full px-6 py-8 md:px-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold uppercase leading-tight tracking-tight">
            Top Scorer
            <br />
            to the Final
            <br />
            Match
          </h1>
          <p className="text-gray-600 max-w-md text-sm leading-relaxed">
            The Euroleague Finals Top Scorer is the individual award for the
            player that gained the highest points in the Euroleague Finals.
          </p>
          <button className="bg-black text-white rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-800 transition-colors">
            Continue Reading
          </button>
        </div>
        <div className="flex-1 relative flex justify-center">
          <Image
            src="/images/basketball-player-action-sunset.png"
            alt="Basketball player in action"
            width={500}
            height={600}
            priority
            className="object-contain"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
