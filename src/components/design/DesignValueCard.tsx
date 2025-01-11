import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"


export function DesignValueCard({ text1, text2, className }: { text1: string, text2: string, className?: string }) {
    const [showText1, setShowText1] = useState(true)
    const [showText2, setShowText2] = useState(false)
    const card = useRef<HTMLDivElement>(null)

    function handleMouseEnter() {
        setShowText1(false)
        setShowText2(true)
    }
    function handleMouseOut() {
        setShowText2(false)
        setShowText1(true)
    }

    function handleClickOutside(e: MouseEvent) {
        if (!card.current?.contains(e.target as Node)) {
            setShowText1(true)
            setShowText2(false)
        }
    }

    // For tap outside on touch devices
    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    return (
        <div
            ref={card}
            className={`relative w-36 md:w-48 lg:w-64 h-24 md:h-36 lg:h-48 rounded-2xl lg:rounded-3xl flex justify-center items-center text-base md:text-lg lg:text-2xl ${className ? className : ``}`}
            style={{
                border: "solid 1px transparent",
                backgroundImage: "linear-gradient(180deg, #0C0803 0%, #262525 100%), linear-gradient(180deg, #835120 0%, #CCCBCB 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0px 4px 18px rgba(255, 255, 255, 0.25)"
            }}
            tabIndex={0}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseOut}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseOut}
            onFocus={handleMouseEnter}
            onBlur={handleMouseOut}
            aria-label={`${text1}, ${text2.toLowerCase()}`}
        >
            {showText1 &&
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, type: "tween", ease: "easeIn" }}
                    className="text-center font-extralight text-[#dfdfdf] p-6">
                    {text1}
                </motion.p>}
            {showText2 &&
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, type: "tween", ease: "easeIn" }}
                    className="text-center font-extralight text-[#FB9B3E] p-6">
                    {text2}
                </motion.p>}
            <div
                className="absolute -bottom-14 lg:-bottom-16 w-full h-1/4 rounded-2xl blur-md -z-10"
                style={{
                    background: "linear-gradient(180deg, #252424 25.12%, #000000 100%)",
                }}
                onMouseOver={(e) => { e.stopPropagation() }}
                onMouseLeave={(e) => { e.stopPropagation() }}
            >
            </div>
        </div>
    )
}