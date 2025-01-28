"use client";

import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer()  {
  const scrollToReference = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      element.classList.add("animate-bounce");
      setTimeout(() => {
        element.classList.remove("animate-bounce");
      }, 1000);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-2">
      <div className="flex justify-start items-center">
          <img 
            src="/ipari-logo.png" 
            alt="Alpha Alpin Logo" 
            className=" cursor-pointer hover:opacity-80 transition-opacity"
            onClick={scrollToTop}
          />
        </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Elérhetőség</h3>
            <p>Telefon: +36 20 242 2484</p>
            <p>Email: fotiroland12@gmail.com</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Szolgáltatások</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToReference("reference-1")}
                  className="hover:text-blue-600 transition-colors"
                >
                  Homlokzati munkák
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToReference("reference-2")}
                  className="hover:text-blue-600 transition-colors"
                >
                  Tetőjavítás
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToReference("reference-3")}
                  className="hover:text-blue-600 transition-colors"
                >
                  Magasépítési munkák
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 ">Követés</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/roland.foti2"
                target="_blank"
                className="hover:text-blue-500 transition-colors duration-300 flex items-center"
              >
                <FaFacebook className="mr-2" />
                Fóti Roland
              </a>
              <a
                href="https://www.instagram.com/fotiroland"
                target="_blank"
                className="hover:text-pink-500 transition-colors duration-300 flex items-center"
              >
                <FaInstagram className="mr-2" />
                @fotiroland
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Alpha Alpin. Minden jog
            fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};
