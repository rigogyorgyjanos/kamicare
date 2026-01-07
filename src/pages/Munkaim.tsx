import bgImage from "../assets/marble.jpg";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";


type Category = {
  title: string;
  blur?: boolean;
  images: {
    url: string;
    description?: string;
  }[];
};


const Munkaim = () => {
  // 🔹 JSON fájlok betöltése
  const categoryData = import.meta.glob(
    "../assets/work/**/data.json",
    { eager: true }
  ) as Record<
    string,
    {
      title: string;
      blur?: boolean;
      descriptions?: Record<string, string>;
    }
  >;


  // 🔹 Képek betöltése
  const imageFiles = import.meta.glob(
    "../assets/work/**/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      query: "?url",
      import: "default",
    }
  ) as Record<string, string>;


  // 🔹 Kategóriák összerakása
  const categories: Category[] = Object.entries(categoryData).map(
    ([jsonPath, jsonContent]) => {
      const folderPath = jsonPath.replace("/data.json", "");

      const images = Object.entries(imageFiles)
        .filter(([imgPath]) => imgPath.startsWith(folderPath))
        .map(([imgPath, imgUrl]) => {
          const fileName = imgPath.split("/").pop()!;

          return {
            url: imgUrl,
            description: jsonContent.descriptions?.[fileName],
          };
        });

      return {
        title: jsonContent.title,
        blur: jsonContent.blur,
        images,
      };
    }
  );

  const [acceptedCategories, setAcceptedCategories] = useState<
    Record<number, boolean>
  >({});

  const [lightbox, setLightbox] = useState<{
    categoryIndex: number;
    imageIndex: number;
  } | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);


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
        <div className="bg-[#C1C6C1]/50 mb-10 p-5 backdrop-blur-md border border-[#d6b277]">
          <h1 className="text-white/90 text-4xl text-center font-handwritten font-bold">
            Nincs csúnya láb csak problémás.
          </h1>
          <p className="mt-5 font-bold text-center text-[#6B4A1E]">
            Minden láb megérdemli a törődést – az alábbi képeken valódi
            pedikűrös munkáim eredményeit láthatod.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category, index) => {
          const isBlurred = category.blur && !acceptedCategories[index];

          return (
            <div
              key={index}
              className="relative mb-5 bg-[#a8a394]/40 p-3 backdrop-blur-sm"
            >
              {/* Title */}
              <div className="text-xl mb-5 bg-[#a8a394] p-3 text-center border border-[#6B4A1E]">
                {category.title}
              </div>

              {/* Gallery */}
              <div
                className={`grid grid-cols-2 md:grid-cols-2 gap-3 transition ${isBlurred ? "blur-md pointer-events-none select-none" : ""
                  }`}
              >
                {category.images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="flex flex-col border border-[#d6b277]"
                  >
                    <img
                      src={img.url}
                      loading="lazy"
                      alt={img.description || `${category.title} ${imgIndex + 1}`}
                      className="h-82 md:52 object-cover cursor-pointer"
                      onClick={() =>
                        !isBlurred &&
                        setLightbox({
                          categoryIndex: index,
                          imageIndex: imgIndex,
                        })
                      }

                    />

                    {img.description && (
                      <div className="bg-[#a8a394] text-center text-sm p-2">
                        {img.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Blur overlay */}
              {isBlurred && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60">
                  <div className="bg-white p-6 text-center border border-[#6B4A1E] max-w-xs">
                    <p className="mb-4 text-sm text-gray-700">
                      A kategória felkavaró képeket tartalmazhat.
                      <br />
                      Csak saját felelősségre tekintse meg.
                    </p>

                    <button
                      onClick={() =>
                        setAcceptedCategories((prev) => ({
                          ...prev,
                          [index]: true,
                        }))
                      }
                      className="px-4 py-2 bg-[#6B4A1E] text-white hover:bg-[#7d5932] transition"
                    >
                      Beleegyezem, megtekintem
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center ">
          {/* Header */}
          <div className="flex justify-between items-center py-4 px-10 text-[#6B4A1E] w-full max-w-4xl bg-[#a8a394] border-b border-l border-r border-[#d6b277] ">
            <h2 className="text-lg font-semibold ">
              {categories[lightbox.categoryIndex].title}
            </h2>

            <button
              onClick={() => setLightbox(null)}
              className="text-xl hover:text-gray-300"
            >
              ✕
            </button>
          </div>

          {/* Swiper */}
          <div className="flex-1 flex items-center justify-center">
            <Swiper
              modules={[Navigation]}
              navigation
              scrollbar={{ draggable: true }}
              loop={true}
              initialSlide={lightbox.imageIndex}
              className="w-full max-w-4xl custom-swiper"
            >
              {categories[lightbox.categoryIndex].images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center">
                    <img
                      src={img.url}
                      alt={img.description || ""}
                      className="h-[70vh] object-contain"
                    />

                    {img.description && (
                      <div className="mt-4 text-[#d6b277] text-lg font-bold text-center">
                        {img.description}
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

    </div>
  );
};

export default Munkaim;
