import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";


import bgImage from "../assets/marble.jpg";
import img1 from "../assets/work/IMG_8117.jpeg"
import img2 from "../assets/work/IMG_8116.jpeg"
import img3 from "../assets/work/IMG_8521.jpeg"
import img4 from "../assets/work/IMG_8523.jpeg"
import img5 from "../assets/work/IMG_8518.jpeg"

import "yet-another-react-lightbox/styles.css";




const Munkaim = () => {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const images = [
        { src: img1 },
        { src: img2 },
        { src: img3 },
        { src: img4 },
        { src: img5 },
    ];

    return (
        <div className="relative min-h-screen -mt-16 ">
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
                {/* My work  - Hero  */}
                <div className='bg-[#C1C6C1]/50 mb-10 p-5 backdrop-blur-sm border border-[#d6b277]'>
                    <div className=' font-handwritten font-bold tracking-wider text text-center'>
                        <h1 className='text-white/90 text-4xl'>Nincs csúnya láb csak problémás.</h1>
                    </div>
                    <div className='mt-5 text-center text-[#9a7142]'>
                        <p>
                            Minden láb megérdemli a törődést – az alábbi képeken valódi
                            pedikűrös munkáim előtte–utána eredményeit láthatod.
                        </p>
                    </div>
                </div>

                {/* Cat 1 */}
                <div className="mb-5 bg-[#a8a394]/40 p-3 backdrop-blur-sm">
                    <div className="flex gap-2 items-center justify-center text-xl mb-5 bg-[#a8a394] p-3">
                        <span>Category 1 </span>
                    </div>
                    <div >
                        {/* images header */}

                        {/* Images with little desc */}
                        <div className="grid grid-cols-2 gap-3 ">
                            <div className="flex flex-col">
                                <img src={img1} alt="Work image" onClick={() => { setIndex(0); setOpen(true) }} />
                                <p className="text-center text-lg text-white/75 italic">Előtte</p>
                            </div>
                            <div className="flex flex-col  ">
                                <img src={img2} alt="Work image" onClick={() => { setIndex(1); setOpen(true) }} />
                                <p className="text-center text-lg text-white/75 italic">Utána</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Cateory 2 */}
                <div className="mb-5 bg-[#a8a394]/40 p-3 backdrop-blur-sm">
                    <div className="flex gap-2 items-center justify-center text-xl mb-5 bg-[#a8a394] p-3">
                        <span>Category 2 </span>
                    </div>
                    <div >
                        {/* images header */}

                        {/* Images with little desc */}
                        <div className="grid grid-cols-2 gap-3 ">
                            <div className="flex flex-col">
                                <img src={img3} alt="Work image" onClick={() => { setIndex(2); setOpen(true) }} />
                                <p className="text-center text-lg text-white/75 italic">Előtte</p>
                            </div>
                            <div className="flex flex-col  ">
                                <img src={img4} alt="Work image" onClick={() => { setIndex(3); setOpen(true) }} />
                                <p className="text-center text-lg text-white/75 italic">Utána</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Category 3 */}
                <div className="mb-5 bg-[#a8a394]/40 p-3 backdrop-blur-sm">
                    <div className="flex gap-2 items-center justify-center text-xl mb-5 bg-[#a8a394] p-3">
                        <span>Category 3 </span>
                    </div>
                    <div >
                        {/* images header */}

                        {/* Images with little desc */}
                        <div className="grid grid-cols-2 gap-3 ">
                            <div className="flex flex-col">
                                <img src={img5} alt="Work image" onClick={() => { setIndex(4); setOpen(true) }} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images}
                index={index}
                plugins={[Zoom]}
            />
        </div>
    )
}

export default Munkaim