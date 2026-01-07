import { FaRegCalendarAlt } from "react-icons/fa";
import { LiaWalletSolid } from 'react-icons/lia';
import { LuClockAlert } from 'react-icons/lu';
import { MdOutlineSick } from 'react-icons/md';
import { TbCalendarOff } from 'react-icons/tb';
import bgImage from "../assets/marble.jpg";

const Hazirend = () => {
    return (
        <div className="relative -mt-16 ">
            {/* Background image */}
            <div
                aria-hidden
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            {/* Overlay (halványítás) */}
            <div
                aria-hidden
                className="absolute inset-0 bg-gray-900/50"
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-3 md:max-w-2xl py-26">

                {/* Intro */}
                <div className="mb-5 bg-[#a8a394]/40 p-3 backdrop-blur-sm">
                    <div className="text-xl text-center mb-5 bg-[#a8a394] p-3">
                        <h1 className="underline underline-offset-8">
                            Szabályok és irányelvek
                        </h1>
                    </div>
                    <div className="mb-3">
                        <p>
                            Házirendem tartalmazza azokat a legfontosabb szabályokat és kéréseket,
                            amelyek célja, hogy Vendégeim számára a lehető legmagasabb szakmai
                            színvonalú, nyugodt körülmények között történő ellátást biztosíthassam.
                        </p>
                    </div>
                    <div className="mb-3">
                        <p>
                            A hatályos magyar jogszabályok, valamint jelen Házirend betartása kötelező
                            minden, szalonomban tartózkodó személy számára.
                        </p>
                    </div>
                    <div className="mb-3">
                        <p>
                            A Házirend elolvasható a Váróban és a honlapomon egyaránt.
                            Időpont foglalásával Vendégeim automatikusan elfogadják a szabályokat.
                        </p>
                    </div>
                </div>

                {/* Appointment booking */}
                <div className="mb-5 bg-[#a8a394]/40 p-3 backdrop-blur-sm">
                    <div className="flex gap-2 items-center justify-center text-xl mb-5 bg-[#a8a394] p-3 text-[#6B4A1E]">
                        <FaRegCalendarAlt />
                        <span>Időpontfoglalás, bejelentkezés</span>
                    </div>
                    <p className="mb-3">
                        Időpontfoglalás telefonon történik, munkanapokon 7:00 és 20:00 óra között.
                    </p>
                    <p className="mb-3">
                        Amennyiben a hívást nem tudom fogadni, visszahívom.
                    </p>
                    <p className="mb-3">
                        Munkám jellegéből adódóan nem mindig van lehetőségem a telefon azonnali felvételére.
                    </p>
                </div>

                {/* Késés */}
                <div className="mb-5 bg-[#a8a394]/40 p-3 backdrop-blur-sm">
                    <div className="flex gap-2 items-center justify-center text-xl mb-5 bg-[#a8a394] p-3">
                        <LuClockAlert />
                        <span>Késés</span>
                    </div>
                    <p className="mb-3">
                        Kérem, érkezzen pontosan, és jelezze, amennyiben késésben van.
                    </p>
                    <p className="mb-3">
                        A kezelések egymást követik, csúszás ledolgozására nincs lehetőség.
                    </p>
                    <p className="mb-3">
                        Késés esetén a kezelésre szánt időtartam lerövidül és nem biztos, hogy a kért teljes szolgáltatás elvégezhető. Kifizetni viszont a teljes kezelést szükséges. Ezt mindenképpen megbeszéljük érkezésekor.
                    </p>
                </div>

                {/* Lemondás */}
                <div className="mb-5 bg-[#a8a394]/40 p-3 backdrop-blur-sm">
                    <div className="flex gap-2 items-center justify-center text-xl mb-5 bg-[#a8a394] p-3 text-[#6B4A1E]">
                        <TbCalendarOff />
                        <span>Lemondás, időpont-változtatás</span>
                    </div>
                    <p className="mb-3">
                        Időpont módosítása legkésőbb 24 órával előtte lehetséges.
                    </p>
                    <p className="mb-3">
                        Az aznapi lemondás esetén a kezelés teljes díja fizetendő.
                    </p>
                    <div className='mb-3'>
                        <p>Az időpont tetszés szerint, a szabad kapacitásom függvényében módosítható, azonban kérem, vegye figyelembe az alábbiakat.</p> </div> <div className='mb-3'> <p>Kötelezettségek nélkül időpontot módosítani vagy lemondani legkésőbb az időpont előtt 24 órával van lehetőség. Így lehetőségem nyílik arra, hogy az adott időpontot más Vendég számára felajánljam, vagy a várólistán szereplők közül valaki igénybe vehesse.</p> </div> <div className='mb-3'> <p>Az aznapi lemondást nem tudom elfogadni, mivel a munkarendem és az időbeosztásom is előre tervezett. Az ilyen esetekben a kezelés teljes díja fizetendő, mint le nem mondott vagy igénybe nem vett szolgáltatás.</p>
                    </div>
                    <div className='mb-3'>
                        <p>Amennyiben valaki nyomós indok nélkül nem mondja le időpontját, és nem jelenik meg, sajnos a továbbiakban nem tudok számára újabb időpontot biztosítani. Kérem, tartsuk tiszteletben egymás idejét.</p>
                    </div>
                </div>

                {/* Betegség */}
                <div className="mb-5 bg-[#a8a394]/40 p-3 backdrop-blur-sm">
                    <div className="flex gap-2 items-center justify-center text-xl mb-5 bg-[#a8a394] p-3">
                        <MdOutlineSick />
                        <span>Betegség</span>
                    </div>
                    <div>
                        <div className='mb-3'>
                            <p>
                                Megbetegedés esetén a saját, a többi vendég és a szalonban dolgozók egészsége érdekében az időpont lemondása, vagy jelzése szükséges.
                            </p>
                        </div>
                        <div className="mb-3">
                            <p>
                                Saját betegségünk esetén azonnal értesítjük és egyeztetünk mihamarabbi időpontot a következő kezelésre. Megértését köszönjük!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fizetés */}
                <div className="mb-5 bg-[#a8a394]/40 p-3 backdrop-blur-sm">
                    <div className="flex gap-2 items-center justify-center text-xl mb-5 bg-[#a8a394] p-3 text-[#6B4A1E]">
                        <LiaWalletSolid />
                        <span>Fizetés</span>
                    </div>
                    <div className='mb-3'>
                        <p>Szalonomban készpénzzel vagy banki utalással tud a helszínen fizetni. Kártyás terminál fizetésre nincs lehetőség!</p>
                    </div>
                    <div className='mb-3'>
                        <p>Elektronikus nyugta kiállítás történik a fizetési folyamat során. Ügyfélnyílvántartást nem vezetek.</p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Hazirend
