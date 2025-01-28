"use client";

export default function HeroSection()  {
  return (
    <section
      className="relative h-screen bg-cover "
      style={{ backgroundImage: "url('/ipari-hero2.webp')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center pl-16 max-w-2xl">

        <h1 className="text-6xl font-bold text-black mb-4 betutipus">
          Alpha Alpin
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-xl text-white">
            Professzionális ipari alpinista szolgáltatások
          </p>
          <div className="w-48 h-0.5 bg-gray-400"></div>
          <p className="text-lg text-white">
            Magasépítési munkák
          </p>
          <p className="text-lg text-white">
            Homlokzati munkák
          </p>
          <p className="text-lg text-white">
            Tetőjavítás
          </p>
        </div>
        <a
          href="#contact"
          className="mt-8 px-8 py-4 bg-blue-600 text-black rounded-lg hover:bg-blue-700 transition-colors shadow-lg w-fit"
        >
          Kapcsolatfelvétel
        </a>
      </div>
    </section>
  );
};
