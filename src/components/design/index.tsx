import { DesignCard } from "./DesignCard"
import { motion } from "motion/react"


export function Design() {
    return (
        <motion.div
            className="my-48 flex flex-col-reverse lg:flex-col gap-8 lg:gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, type: "tween", ease: "easeIn" }}
        >
            <div className="mx-2 flex flex-row flex-wrap lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                <DesignCard
                    text1="Good design is good business"
                    text2="Wherever quality matters"
                    className="flex-shrink-0"
                />
                <DesignCard
                    text1="Design multiplies original value"
                    text2="But usually does not create it"
                    className="flex-shrink-0"
                />
            </div>
            <div className="mx-2 flex flex-row flex-wrap lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                <DesignCard
                    text1="Craft powers impressive stories"
                    text2="Usability powers the after story"
                    className="flex-shrink-0 order-2 lg:order-1"
                />
                <div className="relative basis-full lg:basis-auto order-1 lg:order-2">
                    <div className=" absolute left-1/2 -translate-x-1/2 mx-auto mt-20 w-[50%] lg:w-[150%] h-6 bg-white blur-[48px] rounded-3xl">
                    </div>
                    <h2
                        className="font-extrabold text-5xl lg:text-7xl text-black text-center pb-2 bg-gradient-to-b from-[#ff9326] from-30% to-white"
                        style={{
                            WebkitBackgroundClip: "text",
                            WebkitTextStroke: "4px transparent",
                            textShadow: "0px 0px 36.4px rgba(255, 255, 255, 0.5)"
                        }}
                    >
                        Design
                    </h2>
                </div>
                <DesignCard
                    text1="Everything in the world is designed"
                    text2="Intentions differ though"
                    className="flex-shrink-0 order-3"
                />
            </div>
        </motion.div >
    )
}