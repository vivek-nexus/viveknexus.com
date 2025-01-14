import { DirectionAwareHover } from "../ui/direction-aware-hover"
import { AboutText } from "./AboutText"

export function About() {
    return (
        <section id="about" className="max-w-[1024px] mx-auto px-4 font-extralight py-12 md:py-24">
            <h2 className="text-5xl md:text-7xl text-center mb-12">About? Me?</h2>
            <div className="md:hidden">
                <div className="mb-4">
                    <AboutText number={1} />
                </div>
                <div className="mb-4">
                    <AboutText number={2} />
                </div>

                <div className="mb-4">
                    <AboutText number={3} />
                </div>
                <div className="mb-4">
                    <AboutText number={4} />
                </div>
            </div>
            <div className="hidden md:block text-lg lg:text-xl">
                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="col-span-3 md:col-span-2 h-64 rounded-2xl border border-white/25 hover:shadow-whiteGlow2 duration-200 ease-in p-8 flex items-center bg-gradient-to-b from-[#007A56]/25 to-[#073174]/25">
                        <AboutText number={1} />
                    </div>
                    <div
                        className="relative col-span-3 md:col-span-1 h-64 rounded-2xl border border-white/25 text-lg">
                        <DirectionAwareHover imageUrl={"/images/about-me-1.webp"}>
                            <p className="p-4 pb-0 font-bold">Petrol station commissioning</p>
                            <p className="p-4 pt-0 font-medium">Sales Officer at HP</p>
                        </DirectionAwareHover>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="col-span-3 md:col-span-1 h-64 rounded-2xl border border-white/25 hover:shadow-whiteGlow2 duration-200 ease-in p-8 flex items-center bg-gradient-to-b from-[#007A56]/25 to-[#073174]/25">
                        <AboutText number={2} />
                    </div>
                    <div className="col-span-3 md:col-span-1 h-64 rounded-2xl border border-white/25 hover:shadow-whiteGlow2 duration-200 ease-in bg-gradient-to-b from-[#1e8b6b] to-[#0c4198] flex justify-center items-center">
                        <img src="/images/face-caricature.svg" alt="Caricature of my face" />
                    </div>
                    <div className="col-span-3 md:col-span-1 h-64 rounded-2xl border border-white/25 hover:shadow-whiteGlow2 duration-200 ease-in p-8 flex items-center bg-gradient-to-b from-[#007A56]/25 to-[#073174]/25">
                        <AboutText number={3} />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 md:col-span-1 h-64 rounded-2xl border border-white/25 hover:shadow-whiteGlow2 duration-200 ease-in p-8 flex items-center bg-gradient-to-b from-[#007A56]/25 to-[#073174]/25">
                        <AboutText number={4} />
                    </div>
                    <div
                        className="relative col-span-3 md:col-span-2 h-64 rounded-2xl text-lg"
                    >
                        <DirectionAwareHover imageUrl={"/images/about-me-2.webp"}>
                            <p className="p-4 pb-0 font-bold">UXR on the field</p>
                            <p className="p-4 pt-0 font-medium">Product Designer at Setu</p>
                        </DirectionAwareHover>
                    </div>
                </div>
            </div>
        </section>
    )
}