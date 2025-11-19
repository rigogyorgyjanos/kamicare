// src/components/Contact.tsx
import { Phone, MapPin, Navigation } from "lucide-react";

type ContactProps = {
  id?: string;
  title?: string;
  phone: string;     // pl. "+36 30 123 4567"
  address: string;   // pl. "1132 Budapest, Váci út 22."
  note?: string;     // opcionális megjegyzés (nyitvatartás stb.)
};

export default function Contact({
  id = "elerhetoseg",
  title = "Fordulj hozzám bizalommal",
  phone,
  address,
  note,
}: ContactProps) {
  const encoded = encodeURIComponent(address);
  const mapEmbedSrc = `https://www.google.com/maps?q=${encoded}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  const telHref = `tel:${phone.replace(/\\s+/g, "")}`;

  return (
    <section id={id} className="scroll-mt-24 bg-[#c1c6c1] text-[#2b2a29]/70">
      <div className="">
        <header className="">
          <h2 className="text-2xl sm:text-3xl tracking-tight text-center h-22 justify-items-center content-center bg-white/30">{title}</h2>
        </header>

        <div className="grid gap-0 md:grid-cols-2 min-h-210 ">
          {/* Bal oldal: adatok */}
          <div className="space-y-6  bg-white/60 backdrop-blur-sm ring-1 ring-black/5 p-6 sm:p-8 content-center ">
            <div className="flex flex-col gap-4 bg-[#c1c6c1] w-l items-center py-4 shadow-2xl">
              <div className="flex flex-col gap-3 ">
                <div className="flex flex-row gap-2 items-end m-auto">
                  <Phone className="mt-0.5 h-5 w-5 text-[#9a7142]" />
                  <p className="text-sm uppercase tracking-wide text-[#9a7142] ">Telefon</p>
                </div>
                <div>
                  <a
                    href={telHref}
                    className="text-lg font-semibold text-[#2b2a29] hover:underline"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex flex-col  gap-3">
                <div className="flex flex-row gap-2 items-end m-auto">
                  <MapPin className="mt-0.5 h-5 w-5 text-[#9a7142]" />
                  <p className="text-sm uppercase tracking-wide text-[#9a7142]">Cím</p>
                </div>
                <div>
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-[#2b2a29] hover:underline"
                  >
                    {address}
                  </a>
                </div>
              </div>

              {note && (
                <div className=" bg-[#a8a394]/20 p-4 text-sm leading-relaxed max-w-xs">
                  {note}
                </div>
              )}

              <div className="pt-2">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2  border border-[#9a7142] px-4 py-2 font-medium text-[#9a7142] hover:bg-white transition-colors"
                >
                  <Navigation className="h-4 w-4" />
                  Útvonal tervezése
                </a>
              </div>
            </div>
          </div>
          {/* Jobb oldal: Térkép */}
          <div className="overflow-hidden bg-white/40 h-full min-h-86">
            <div className="h-full">
              <iframe
                title={`Térkép – ${address}`}
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
