"use client";
import { useState } from 'react';

export default function References() {
  const initialReferences = [
    {
      id: 1,
      image: "/ref1.jpg",
      title: "Homlokzati munka",
      description: "Társasház felújítás",
    },
    {
      id: 2,
      image: "/ref2.jpg",
      title: "Tetőjavítás",
      description: "Ipari létesítmény",
    },
    {
      id: 3,
      image: "/ref3.jpg",
      title: "Karbantartás",
      description: "Irodaház",
    },
  ];

  const additionalReferences = [
    {
      id: 4,
      image: "/ref4.jpg",
      title: "Veszélytelenítés",
      description: "Társasház",
    },
    // További referenciákat itt lehet hozzáadni
  ];

  const [references, setReferences] = useState(initialReferences);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    setReferences([...references, ...additionalReferences]);
    setShowMore(false); // Elrejtjük a gombot, ha már nincs több referencia
  };

  return (
    <section id="references" className="py-20 bg-gray-800" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">
          Referenciáim
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {references.map((ref) => (
            <div
              key={ref.id}
              id={`reference-${ref.id}`}
              className="bg-black rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={ref.image}
                alt={ref.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">
                  {ref.title}
                </h3>
                <p className="text-white">{ref.description}</p>
              </div>
            </div>
          ))}
        </div>
        {showMore && additionalReferences.length > 0 && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={handleShowMore}
              className="px-6 py-3 bg-black text-white rounded-lg transition-all duration-300 shadow-md hover:bg-gray-800 hover:shadow-lg"
            >
              Mutass többet
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
