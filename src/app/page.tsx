"use client";

import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "./HeroSection/page";
import About from "./About/page";
import References from "./References/page";
import ContactForm from "./contact/page";
import Footer from "./Footer/page";
import { FaTimes, FaBars } from "react-icons/fa";

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Bezárjuk a menüt kattintás után
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Head>
        <title>Alpha Alpin - Ipari Alpinista</title>
        <meta
          name="description"
          content="Professzionális ipari alpinista szolgáltatások"
        />
      </Head>

      <nav className="w-full bg-black from-black/90 to-black/60 backdrop-blur-sm z-50 relative">
        {" "}
        {/* Added relative */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="transform transition-transform hover:scale-110"
            >
              <Image
                src="/ipari-logo.png"
                alt="Alpha Alpin"
                width={120}
                height={40}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>

            {/* Desktop menü */}
            <div className="hidden md:flex gap-8">
              <div className="hidden md:flex gap-8">
                <a
                  className="text-white hover:text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium px-4 py-2 rounded-lg hover:bg-blue-600/80 border border-transparent hover:border-blue-400 cursor-pointer"
                  onClick={() => handleScroll("about")}
                >
                  Rólam
                </a>
                <a
                  className="text-white hover:text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium px-4 py-2 rounded-lg hover:bg-blue-600/80 border border-transparent hover:border-blue-400 cursor-pointer"
                  onClick={() => handleScroll("references")}
                >
                  Referenciák
                </a>
                <a
                  className="text-white hover:text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium px-4 py-2 rounded-lg hover:bg-blue-600/80 border border-transparent hover:border-blue-400 cursor-pointer"
                  onClick={() => handleScroll("contact")}
                >
                  Kapcsolat
                </a>
              </div>
            </div>

            {/* Hamburger menü ikon */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobil menü */}
          {isMenuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-full bg-black py-4 px-6 border-t border-gray-800 shadow-lg">
              {" "}
              {/* Modified positioning */}
              <div className="flex flex-col space-y-4">
                <a
                  className="text-white hover:text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium px-4 py-2 rounded-lg hover:bg-blue-600/80 border border-transparent hover:border-blue-400 cursor-pointer"
                  onClick={() => handleScroll("about")}
                >
                  Rólam
                </a>
                <a
                  className="text-white hover:text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium px-4 py-2 rounded-lg hover:bg-blue-600/80 border border-transparent hover:border-blue-400 cursor-pointer"
                  onClick={() => handleScroll("references")}
                >
                  Referenciák
                </a>
                <a
                  className="text-white hover:text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium px-4 py-2 rounded-lg hover:bg-blue-600/80 border border-transparent hover:border-blue-400 cursor-pointer"
                  onClick={() => handleScroll("contact")}
                >
                  Kapcsolat
                </a>
              </div>
            </div>
          )}
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
