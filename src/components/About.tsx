import { DirectionAwareHover } from "./ui/direction-aware-hover"

export function About() {
    return (
        <section className="max-w-[1024px] mx-auto px-4 pb-48">
            <h2 className="text-5xl md:text-7xl text-center font-extralight mb-12">About? Me?</h2>
            <div className="md:hidden">
                <p className="mb-4">
                    Two core aspects of my professional life — design and frontend — I learnt them outside the formal education framework! It is an Ekalavya kind of thing hehe! Most skills are ultimately a combination of experience and persistence, yeah?
                </p>
                <p className="mb-4">
                    Purpose and process are both important, but if given a choice, I might show a healthy disrespect for the process.
                </p>

                <p className="mb-4">
                    Whenever I day dream, my brain has this weird habit of zooming out and finding similarities between seemingly unrelated things of life 🤷‍️
                </p>
                <p className="mb-4">
                    If you sufficiently enhance the perspective, I believe, we&apos;re neither making the world a better place nor a worse one — all we&apos;re doing is just changing it.
                </p>
            </div>
            <div className="hidden md:block text-lg lg:text-xl">
                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="col-span-3 md:col-span-2 h-64 rounded-2xl p-8 flex items-center bg-gradient-to-b from-[#007A56]/25 to-[#073174]/25">
                        <p>
                            Two core aspects of my professional life — design and frontend — I learnt them outside the formal education framework! It is an Ekalavya kind of thing hehe! Most skills are ultimately a combination of experience and persistence, yeah?
                        </p>
                    </div>
                    <div
                        className="relative col-span-3 md:col-span-1 h-64 rounded-2xl text-lg">
                        <DirectionAwareHover imageUrl={"/images/about-me-1.webp"}>
                            <p className="p-4 pb-0 font-bold">Commissioning a new petrol station</p>
                            <p className="p-4 pt-0">Area Sales Officer at HP</p>
                        </DirectionAwareHover>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="col-span-3 md:col-span-1 h-64 rounded-2xl p-8 flex items-center bg-gradient-to-b from-[#007A56]/25 to-[#073174]/25">
                        <p>
                            Purpose and process are both important, but if given a choice, I might show a healthy disrespect for the process.
                        </p>
                    </div>
                    <div className="col-span-3 md:col-span-1 h-64 rounded-2xl bg-gradient-to-b from-[#007A56] to-[#073174] flex justify-center items-center">
                        <img src="/images/face-caricature.svg" />
                    </div>
                    <div className="col-span-3 md:col-span-1 h-64 rounded-2xl p-8 flex items-center bg-gradient-to-b from-[#007A56]/25 to-[#073174]/25">
                        <p>
                            Whenever I day dream, my brain has this weird habit of zooming out and finding similarities between seemingly unrelated things of life 🤷‍️
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 md:col-span-1 h-64 rounded-2xl p-8 flex items-center bg-gradient-to-b from-[#007A56]/25 to-[#073174]/25">
                        <p>
                            If you sufficiently enhance the perspective, I believe, we&apos;re neither making the world a better place nor a worse one — all we&apos;re doing is just changing it.
                        </p>
                    </div>
                    <div
                        className="relative col-span-3 md:col-span-2 h-64 rounded-2xl text-lg"
                    >
                        <DirectionAwareHover imageUrl={"/images/about-me-2.webp"}>
                            <p className="p-4 pb-0 font-bold">UXR on the field</p>
                            <p className="p-4 pt-0">Product Designer at Setu</p>
                        </DirectionAwareHover>
                    </div>
                </div>
            </div>
        </section >
    )
}