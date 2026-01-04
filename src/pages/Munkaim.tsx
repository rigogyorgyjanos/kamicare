import bgImage from "../assets/marble.jpg";

type Category = {
  title: string;
  images: string[];
};

const Munkaim = () => {
  // 🔹 JSON fájlok betöltése
  const categoryData = import.meta.glob(
    "../assets/work/**/data.json",
    { eager: true }
  ) as Record<string, { title: string }>;

  // 🔹 Képek betöltése
  const imageFiles = import.meta.glob(
    "../assets/work/**/*.{jpg,jpeg,png,webp}",
    { eager: true, as: "url" }
  ) as Record<string, string>;

  // 🔹 Kategóriák összerakása
  const categories: Category[] = Object.entries(categoryData).map(
    ([jsonPath, jsonContent]) => {
      const folderPath = jsonPath.replace("/data.json", "");

      const images = Object.entries(imageFiles)
        .filter(([imgPath]) => imgPath.startsWith(folderPath))
        .map(([, imgUrl]) => imgUrl);

      return {
        title: jsonContent.title,
        images,
      };
    }
  );

  return (
    <div className="relative min-h-screen -mt-16">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay */}
      <div aria-hidden className="absolute inset-0 bg-gray-900/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 md:max-w-2xl py-26">
        {/* Hero */}
        <div className="bg-[#C1C6C1]/50 mb-10 p-5 backdrop-blur-sm border border-[#d6b277]">
          <h1 className="text-white/90 text-4xl text-center font-handwritten font-bold">
            Nincs csúnya láb csak problémás.
          </h1>
          <p className="mt-5 text-center text-[#9a7142]">
            Minden láb megérdemli a törődést – az alábbi képeken valódi
            pedikűrös munkáim eredményeit láthatod.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category, index) => (
          <div
            key={index}
            className="mb-5 bg-[#a8a394]/40 p-3 backdrop-blur-sm"
          >
            {/* Title */}
            <div className="text-xl mb-5 bg-[#a8a394] p-3 text-center border border-[#9a7142]">
              {category.title}
            </div>

            {/* Gallery  */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {category.images.map((img, imgIndex) => (
                <div key={imgIndex} className="flex flex-col border border-[#d6b277] ">
                  <img
                    src={img}
                    alt={`${category.title} ${imgIndex + 1}`}
                    className="h-52 object-cover "
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Munkaim;
