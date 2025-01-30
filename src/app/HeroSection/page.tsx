"use client";

export default function HeroSection()  {

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section
      className="relative h-screen bg-cover bg-center md:bg-top md:bg-cover"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/ipari-hero2.webp')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center pl-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <h1 className="text-7xl md:text-black text-white betutipus leading-none">
              Alpha Alpin
            </h1>
          </div>
          
          <p className="text-2xl text-white ">
            Professzionális ipari alpinista szolgáltatások
          </p>
          
          <div className="w-48 h-0.5 bg-white my-2"></div>
          
          <div className="flex flex-col gap-2 text-xl text-white ">
            <p><i>Magasépítési munkák</i></p>
            <p><i>Homlokzati munkák</i></p>
            <p><i>Tetőjavítás</i></p>
          </div>
          
          <a
            onClick={() => handleScroll("contact")}
            className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 w-fit text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer"
          >
            Kapcsolatfelvétel
          </a>
        </div>
      </div>
    </section>
  );
};
