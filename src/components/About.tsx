type AboutProps = {
  id?: string;
  name?: string;
  motto?: string;
  text?: string;
};

export default function About({
  id = "bemutatkozas",
  name = "Szépelyi Kamilla",
  motto = "Nincs csúnya láb, csak problémás.",
  text,
}: AboutProps) {
  return (
    <section id={id} className="scroll-mt-24 bg-[#c1c6c1] text-[#2b2a29]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        {/* KÖNYV ELRENDEZÉS */}
        <div className="grid gap-6 md:gap-0 md:grid-cols-[1fr_3px_1fr] items-stretch">
          {/* BAL „OLDAL” */}
          <div
            className="
              relative
              bg-[#e7d8bd]/50
              shadow-sm md:shadow-lg
              p-6 sm:p-8
              ring-1 ring-black/5
              md:overflow-hidden
              md:transform-[translateZ(0)]
              content-center
            "
          >
            {/* belső lap-árnyék a gerincnél (bal oldal jobb széle) */}
            <div
              aria-hidden
              className="
                hidden md:block
                pointer-events-none absolute inset-y-6 -right-4 w-10
                bg-linear-to-l from-black/10 via-black/5 to-transparent
                blur
                
              "
            />
            {/* külső finom árnyék a bal külső szélen */}
            <div
              aria-hidden
              className="
                hidden md:block
                pointer-events-none absolute inset-y-8 -left-6 w-12
                bg-linear-to-r from-black/10 to-transparent
                blur
                 
              "
            />

            <blockquote className="relative ">
              <span
                aria-hidden
                className="absolute -top-6 left-0 text-5xl leading-none select-none"
              >
                “
              </span>
              <p className="text-xl sm:text-2xl font-semibold italic text-[#9a7142] text-center">
                {motto}
              </p>
              <span
                aria-hidden
                className="absolute -bottom-10 right-0 text-5xl leading-none select-none"
              >
                ”
              </span>
            </blockquote>
          </div>

          {/* GERINC / ELVÁLASZTÓ – csak desktopon látszik */}
          <div
            aria-hidden
            className="
              hidden md:block w-[3px]
              bg-linear-to-b
              from-[#d6b277] via-[#9a7142]/60 to-[#d6b277]
              shadow-[inset_0_0_6px_rgba(0,0,0,0.25)]
              rounded-full
            "
          />

          {/* JOBB „OLDAL” */}
          <div
            className="
              relative
              bg-[#a8a394]/40
              shadow-sm md:shadow-lg
              py-6 px-6 sm:px-8
              ring-1 ring-black/5
              text-base sm:text-lg leading-relaxed text-justify
              md:overflow-hidden
              md:transform-[translateZ(0)]
            "
          >
            {/* belső lap-árnyék a gerincnél (jobb oldal bal széle) */}
            <div
              aria-hidden
              className="
                hidden md:block
                pointer-events-none absolute inset-y-6 -left-4 w-10
                bg-linear-to-r from-black/10 via-black/5 to-transparent
                blur
              "
            />
            {/* külső finom árnyék a jobb külső szélen */}
            <div
              aria-hidden
              className="
                hidden md:block
                pointer-events-none absolute inset-y-8 -right-6 w-12
                bg-linear-to-l from-black/10 to-transparent
                blur
              "
            />

            <h2 className="text-2xl pb-2 underline underline-offset-8 decoration-[#9a7142]/60">
              {name}
            </h2>

            {text ? (
              <p className="whitespace-pre-line ">{text}</p>
            ) : (
              <>
                <p className="pb-3 text-shadow-sm ">
                  vagyok és 42 évesen döntöttem úgy, hogy szeretnék egy olyan hivatást,
                  ahol valóban közel kerülhetek az emberekhez – ahol segíthetek nekik,
                  és hozzájárulhatok életminőségük javításához. 2018-ban végeztem el
                  a pedikűrös képzését.
                </p>
                <p className="pb-3 text-shadow-sm">
                  Már az első pillanattól tudtam, hogy a{" "}
                  <span className="about-highlight">problémás lábak ápolása</span> lesz az utam.
                  Az elmúlt hét évben folyamatosan fejlesztem a tudásomat, mert úgy gondolom,
                  hogy a tanulás és <span className="about-highlight">fejlődés élethosszig tartó folyamat.</span>{" "}
                  Ez a szemlélet vezetett el a <span className="about-highlight">speciális lábápoló képzéshez</span> is,
                  ahol tovább mélyítem a szakmai ismereteimet. „Munkád során lásd az egész embert.”
                  Ezt a szemléletet igyekszem a mindennapokban megvalósítani. Számomra minden vendég egyedi,
                  és minden láb egy történetet hordoz. A legnagyobb öröm számomra, amikor valaki fájdalommal
                  vagy bizonytalansággal érkezik, és mosolyogva, megkönnyebbülten, fájdalom nélkül távozik.
                </p>
                <p className="pb-3 text-shadow-sm">
                  <span className="about-highlight">
                    Ezekért a pillanatokért érdemes ezt a hivatást választani.
                  </span>{" "}
                  A jövőben szeretném tovább mélyíteni tudásomat a gyógyító pedikűr területén,
                  és minél több vendégnek segíteni abban, hogy újra könnyed léptekkel, magabiztosan járhasson.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
