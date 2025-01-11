import { designValues } from "@/constants/designValues"
import { DesignValueCard } from "./DesignValueCard"
import { motion } from "motion/react"

export function DesignValues() {
    return (
        <motion.div
            className="mx-4 mb-16 md:mb-36 flex flex-col-reverse lg:flex-col gap-4 md:gap-8 lg:gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, type: "tween", ease: "easeIn" }}
        >

            <div className="flex flex-row flex-wrap lg:flex-row gap-4 md:gap-8 lg:gap-32 justify-center items-center">
                <DesignValueCard
                    text1={designValues[1].text1}
                    text2={designValues[1].text2}
                    className="flex-shrink-0"
                />
                <DesignValueCard
                    text1={designValues[2].text1}
                    text2={designValues[2].text2}
                    className="flex-shrink-0"
                />
            </div>
            <div className="flex flex-row flex-wrap lg:flex-row gap-4 md:gap-8 lg:gap-32 justify-center items-center">
                <DesignValueCard
                    text1={designValues[3].text1}
                    text2={designValues[3].text2}
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
                <DesignValueCard
                    text1={designValues[4].text1}
                    text2={designValues[4].text2}
                    className="flex-shrink-0 order-3"
                />
            </div>
        </motion.div>
    )
}