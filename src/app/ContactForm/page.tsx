"use client";

import { useState, FormEvent } from 'react'

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://www.alpha-alpin.hu/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Köszönjük megkeresését! Hamarosan felvesszük Önnel a kapcsolatot.')
        setFormData({ name: '', email: '', phone: '', message: '' })
      }
    } catch {
      alert('Hiba történt az üzenet küldése során. Kérjük próbálja újra.')
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-800" style={{ backgroundColor: '#e0e0e0' }}>
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-8 text-center"> Vedd fel velem a kapcsolatot</h2>
        <form onSubmit={handleSubmit} className="space-y-4 border-4 border-black rounded-lg p-4">
          <input
            type="text"
            placeholder="Név"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 rounded bg-white text-black"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 rounded bg-white text-black"
            required
          />
          <input
            type="tel"
            placeholder="Telefonszám"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full p-3 rounded bg-white text-black"
          />
          <textarea
            placeholder="Üzenet"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-3 rounded bg-white text-black h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-black py-3 rounded hover:bg-black transition text-white "
          >
            Küldés
          </button>
        </form>
      </div>
    </section>
  )
}
