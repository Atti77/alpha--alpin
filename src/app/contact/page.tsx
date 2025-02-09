"use client";

import { useState } from "react";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "", // Telefonszám mező hozzáadva
    message: "",
  });
  const [status, setStatus] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(""); // Reset status message

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await response.json();
        setStatus(
          "Sikeresen elküldve, hamarosan felveszem önnel a kapcsolatot!"
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "", // Telefonszám mező resetelve
          message: "",
        }); // Reset form
      } else {
        const errorData = await response.json();
        setStatus(errorData.error || "Hiba történt az üzenet küldésekor.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Hálózati hiba történt. Próbáld újra.");
    }
  };


  return (
    <section
      id="contact"
      className="py-16"
      style={{ backgroundColor: "#e0e0e0" }}
    >
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Vedd fel velem a kapcsolatot
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 border-4 border-black rounded-lg p-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Vezetéknév"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="w-full p-3 rounded bg-white text-black"
              required
            />
            <input
              type="text"
              placeholder="Keresztnév"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full p-3 rounded bg-white text-black"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 rounded bg-white text-black"
            required
          />
          <input
            type="tel"
            placeholder="Telefonszám"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full p-3 rounded bg-white text-black"
          />
          <textarea
            placeholder="Üzenet"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-3 rounded bg-white text-black h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            Küldés
          </button>
          {status && (
            <p className="text-center text-red-900 mt-4 ">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
