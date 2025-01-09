import { motion } from "framer-motion"
import { transitionSpring } from "."
import { useEffect, useState } from "react"

export function RightBrain() {
    // Framer motion is not letting the initial stop colour apply. Hence, injecting the motion component only after the delay
    const [startAnimation, setStartAnimation] = useState(false)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setStartAnimation(true)
        }, 2050)

        return () => clearTimeout(timeOut)
    }, [])
    return (
        <motion.svg
            width="200"
            height="289"
            viewBox="0 0 200 289"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <radialGradient
                    id="gradient-r"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(179.134 138.635) rotate(180) scale(165.295 134.549)"
                >
                    {!startAnimation ?
                        <>
                            <stop
                                id="stop1-1-r"
                                stopColor="#06275B"
                            />
                            <stop
                                id="stop2-1-r"
                                offset="1"
                                stopColor="#06275B"
                            />
                        </>
                        : <>
                            <motion.stop
                                id="stop1-1-r"
                                stopColor="#06275B"
                                initial={{ stopColor: "#06275B" }}
                                animate={{ stopColor: "#5589A6" }}
                                transition={{ ...transitionSpring }}
                            />
                            <motion.stop
                                id="stop2-1-r"
                                offset="1"
                                stopColor="#06275B"
                                initial={{ stopColor: "#06275B" }}
                                animate={{ stopColor: "#102B54" }}
                                transition={{ ...transitionSpring }}
                            />
                        </>

                    }
                </radialGradient>
            </defs>

            {/* Path with the animated gradient */}
            <motion.path
                d="M195.826 223.451C198.363 214.301 199.178 203.14 199.2 191.22L197.365 63.7203C195.928 33.5284 189.77 8.12107 168.504 3.09531C132.009 -5.52973 98.625 3.09531 55.2789 38.7917C11.2501 66.4703 -11.6249 143.345 6.00003 187.22C19.777 221.516 33.1207 229.105 48.7296 230.715C53.4936 263.24 84.4683 288.345 121.969 288.345C162.219 288.345 194.95 259.425 195.826 223.451Z"
                fill="url('#gradient-r')"
            />
        </motion.svg>
    )
}