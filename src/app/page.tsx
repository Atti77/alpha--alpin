import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HeroSection } from "./HeroSection/page";
import About from "./About/page";
import { References } from "./References/page";
import { ContactForm } from "./ContactForm/page";
import { Footer } from "./Footer/page";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Head>
        <title>Alpha Alpin - Ipari Alpinista</title>
        <meta
          name="description"
          content="Professzionális ipari alpinista szolgáltatások"
        />
      </Head>

      <nav className=" w-full bg-black from-black/90 to-black/60 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="transform transition-transform hover:scale-110"
            >
              <Image
                src="/ipari-logo.png"
                alt="Alpha Alpin"
                width={120}
                height={40}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
            <div className="flex gap-8">
              <a
                href="#about"
                className="text-white hover:text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium px-4 py-2 rounded-lg hover:bg-blue-600/80 border border-transparent hover:border-blue-400"
              >
                Rólam
              </a>
              <a
                href="#references"
                className="text-white hover:text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium px-4 py-2 rounded-lg hover:bg-blue-600/80 border border-transparent hover:border-blue-400"
              >
                Referenciák
              </a>
              <a
                href="#contact"
                className="text-white hover:text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium px-4 py-2 rounded-lg hover:bg-blue-600/80 border border-transparent hover:border-blue-400"
              >
                Kapcsolat
              </a>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection />
      
      <About />

      <References />

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
