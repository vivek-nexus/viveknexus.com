import { motion } from "motion/react"
import { useState } from "react"


export function DesignCard({ text1, text2, className }: { text1: string, text2: string, className?: string }) {
    const [showText1, setShowText1] = useState(true)
    const [showText2, setShowText2] = useState(false)

    function handleMouseOver() {
        setShowText1(false)
        setTimeout(() => {
            setShowText2(true)
        }, 0)
    }
    function handleMouseOut() {
        setShowText2(false)
        setTimeout(() => {
            setShowText1(true)
        }, 0)
    }

    return (
        <>
            <div
                className={`relative w-48 lg:w-64 h-36 lg:h-48 rounded-3xl flex justify-center items-center text-lg lg:text-2xl ${className ? className : ``}`}
                style={{
                    border: "solid 1px transparent",
                    backgroundImage: "linear-gradient(180deg, #0C0803 0%, #262525 100%), linear-gradient(180deg, #835120 0%, #CCCBCB 100%)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    boxShadow: "0px 4px 18px rgba(255, 255, 255, 0.25)"
                }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
            >
                {showText1 &&
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, type: "tween", ease: "easeIn" }}
                        className="text-center font-extralight text-[#dcdcdc] p-6">
                        {text1}
                    </motion.p>}
                {showText2 &&
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, type: "tween", ease: "easeIn" }}
                        className="text-center font-extralight text-[#FB9B3E] p-6">
                        {text2}
                    </motion.p>}
                <div
                    className="absolute -bottom-16 w-full h-1/4 rounded-2xl blur-md -z-10"
                    style={{
                        background: "linear-gradient(180deg, #252424 25.12%, #000000 100%)",
                    }}
                >
                </div>
            </div >

        </>
    )
}