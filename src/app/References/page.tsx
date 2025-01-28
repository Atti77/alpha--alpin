"use client";


export default function References()  {
  const references = [
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
              className="bg-black rounded-lg overflow-hidden"
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
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-black text-white rounded-lg  transition-colors shadow-md">
            Mutass többet
          </button>
        </div>
      </div>
    </section>
  );
};
