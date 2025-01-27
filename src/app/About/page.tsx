export default function Page() {
  return (
    <section
      id="about"
      className="py-20"
      style={{ backgroundColor: "#e0e0e0" }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Rólam
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/profile.jpg"
              alt="Fóti Roland"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="text-black-300 space-y-4">
            <h3 className="text-2xl font-semibold text-black">Fóti Roland</h3>
            <p className="leading-relaxed">
              Több mint 10 éves szakmai tapasztalattal rendelkező ipari
              alpinista vagyok. Munkám során mindig a maximális biztonságra és
              precizitásra törekszem. Szakértelmemmel számos kihívást jelentő
              projektet valósítottam meg sikeresen, legyen szó magas épületek
              karbantartásáról, homlokzati munkákról vagy speciális magassági
              feladatokról.
            </p>
            <p className="leading-relaxed mt-4">
              Minden munkát professzionális felszereléssel és naprakész
              biztonsági protokollok betartásával végzek. Büszke vagyok rá, hogy
              ügyfeleim megbízható partnerként tekintenek rám, és visszatérően
              keresnek különböző magassági munkák elvégzésére.
            </p>
            <ul className="space-y-2 mt-4">
              <li>✓ Veszélytelenítés</li>
              <li>✓ Homlokzatfestés</li>
              <li>✓ Homlokzatjavítás</li>
              <li>✓ Favágás</li>
              <li>✓ Faápolás</li>
              <li>✓ Szigetelés javítás</li>
              <li>✓ Csatorna javítás</li>
              <li>✓ Ablakmosás</li>
            </ul>
            <div className="mt-6">
              <p className="font-semibold text-black">Képesítések:</p>
              <ul className="mt-2">
                <li>• Ipari alpintechnikai végzettség</li>
                <li>• Munkavédelmi szakképesítés</li>
                <li>• Magasépítési szakmai vizsgák</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};