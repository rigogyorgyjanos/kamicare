import React from 'react'
import bgImage from "../assets/marble.jpg";
import servicesList from "../data/servidesData"

const renderWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
};

const Services = () => {
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
                {/* Header */}
                <div className="mb-5 bg-[#a8a394]/40 p-3 backdrop-blur-sm text-center ">
                    <div className="flex gap-2 items-center justify-center text-xl mb-5 bg-[#a8a394] p-3 text-[#6B4A1E] border border-[#d6b277] ">
                        <span>Szolgáltatások és árak</span>
                    </div>
                    <p className="mb-1 text-md">
                        Az árak a láb aktuális állapotától, illetve kezeléstől függően változhatnak
                    </p>
                    <p className="mb-3 text-sm underline underline-offset-2">
                        2026.02.01-től érvényes visszavonásig
                    </p>
                </div>

                {/* Services and prices */}
                <div className="mb-5 bg-[#a8a394]/40 p-3 backdrop-blur-sm">

                    <div className="flex gap-2 items-center justify-center text-xl mb-5 bg-[#a8a394] p-3 text-[#6B4A1E] border border-[#d6b277] ">
                        <span className='font-semibold'>Árlista</span>
                    </div>
                    {servicesList.map((service, index) => (
                        <div key={index} className={` ${(index !== 0 ? "border-t border-[#d6b277]" : "")} grid grid-cols-2 mb-3  `}>
                            {/* Name */}
                            <div className="text-lg font-bold text-[#6B4A1E] text-shadow-xs p-1 content-center">
                                {renderWithLineBreaks(service.name)}
                            </div>

                            {/* Price */}
                            <div className="text-lg p-1 text-white/75 text-shadow-xs  text-end content-center">
                                {renderWithLineBreaks(service.price)}
                            </div>

                            {/* Description (optional) */}
                            {service.description && (
                                <div className="col-span-2 text-sm p-1 text-center ">
                                    {renderWithLineBreaks(service.description)}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Services