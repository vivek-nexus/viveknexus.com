import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { LeftBrain } from "./LeftBrain"
import { RightBrain } from "./RightBrain"


const transitionTween = {
    type: "tween",
    ease: [0.48, 0.01, 0.4, 1.4],
    duration: 2,
}

export const transitionSpring = {
    type: "spring",
    stiffness: 460.8,
    damping: 48,
    mass: 1,
    duration: 0.25
}


export function Hero() {
    const [animationName, setAnimationName] = useState("firstAnimation")
    const [timeStamp, setTimeStamp] = useState(Date.now())
    const [scale, setScale] = useState(1)

    function handleResize() {
        // Potrait orientation
        if (document.documentElement.clientHeight > document.documentElement.clientWidth) {
            setScale(document.documentElement.clientWidth / 900)
        }
        // Landscape orientations
        else {
            setScale(document.documentElement.clientWidth / 1480)
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <motion.div
            className="overflow-x-clip flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 100,
                transition: {
                    duration: 1,
                    ease: "easeIn"
                }
            }}
        >
            {/* The whole div is scaled as if it is an image. Scale calculated with 1480px as the design width.
            Scaling only reduces the element visually. Explicit height and width reduction also necessary so that elements around it can reflow accordingly. */}
            <motion.div
                key={timeStamp}
                style={{
                    height: scale * document.documentElement.clientHeight,
                    width: scale * document.documentElement.clientWidth,
                    transform: `scale(${scale})`,
                    maxWidth: "100vw"
                }}
                className={`relative grid grid-cols-2 font-extralight whitespace-nowrap`}
                initial={{
                    background: "radial-gradient(41.02% 54.97% at 50% 50%, #000000 14.36%, #000000 60.9%)",
                }}
                animate={animationName}
                variants={{
                    firstAnimation: {
                        background: "radial-gradient(41.02% 54.97% at 50% 50%, #222222 14.36%, #000000 60.9%)",
                        transition: transitionTween,
                    },
                    secondAnimation: {
                        background: "radial-gradient(41.02% 54.97% at 50% 50%, #555555 10.36%, #000000 60.9%)",
                        transition: transitionSpring,
                    },
                }}
                onAnimationComplete={() => {
                    if (animationName === "firstAnimation") {
                        setAnimationName("secondAnimation")
                    }
                }}
            >
                {/* LINE */}
                <motion.hr
                    className="absolute top-1/2 left-1/2"
                    initial={{
                        backgroundColor: "rgba(255,255,255,0)",
                        x: "-50%",
                        y: "-50%",
                        width: "90vw"
                    }}
                    animate={animationName}
                    variants={{
                        firstAnimation: {
                            backgroundColor: "rgba(255,255,255,0.5)",
                            x: "-50%",
                            y: "-50%",
                            width: "7.5vw",
                            transition: transitionTween,
                        },
                        secondAnimation: {
                            backgroundColor: "rgba(255,255,255,0.75)",
                            x: "-50%",
                            y: "-50%",
                            width: 0,
                            transition: transitionSpring
                        },
                    }}
                />
                {/* ENLIGHTENED BALL*/}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-7 h-7"
                    style={{
                        boxShadow: "0px 0px 108px 108px rgba(255, 255, 255, 0.25)",
                        filter: "blur(8px)"
                    }}
                    initial={{
                        backgroundColor: "rgba(255,255,255,0)",
                        x: "-50%",
                        y: "-50%",
                        display: "none"
                    }}
                    animate={animationName}
                    variants={{
                        firstAnimation: {
                            backgroundColor: "rgba(255,255,255,0.5)",
                            x: "-50%",
                            y: "-50%",
                            display: "none",
                            transition: transitionTween,
                        },
                        secondAnimation: {
                            backgroundColor: "rgba(255,255,255,0.75)",
                            x: "-50%",
                            y: "-50%",
                            display: "block",
                            transition: transitionSpring,
                        },
                    }}
                >
                </motion.div>
                {/* LEFT BRAIN CONTAINER */}
                <div className="relative">
                    <motion.div
                        className="absolute right-0 top-1/2 cursor-pointer"
                        initial={{ x: -792, y: "-50%" }}
                        animate={animationName}
                        variants={{
                            firstAnimation: {
                                x: -100,
                                transition: transitionTween,
                            },
                            secondAnimation: {
                                x: 0,
                                transition: transitionSpring,
                            },
                        }}
                        onClick={() => {
                            setTimeStamp(Date.now())
                            setAnimationName("firstAnimation")
                        }}
                    >
                        <LeftBrain />
                    </motion.div>
                    <motion.h2
                        className="text-white text-right text-[64px] absolute right-8 top-1/2"
                        initial={{ x: -1109, y: "-50%" }}
                        animate={animationName}
                        variants={{
                            firstAnimation: {
                                x: -140,
                                transition: transitionTween,
                            },
                            secondAnimation: {
                                x: 0,
                                transition: transitionSpring,
                            },
                        }}
                    >
                        Opinionated <br /> designer
                    </motion.h2>
                </div>
                {/* RIGHT BRAIN CONTAINER */}
                <div className="relative">
                    <motion.div
                        className="absolute left-0 top-1/2"
                        initial={{ x: 792, y: "-50%", scaleX: -1 }}
                        animate={animationName}
                        variants={{
                            firstAnimation: {
                                x: 100,
                                transition: transitionTween,
                            },
                            secondAnimation: {
                                x: 0,
                                transition: transitionSpring,
                            },
                        }}
                    >
                        <RightBrain />
                    </motion.div>
                    <motion.h2
                        className="text-white text-left text-[64px] absolute left-8 top-1/2"
                        initial={{ x: 1109, y: "-50%" }}
                        animate={animationName}
                        variants={{
                            firstAnimation: {
                                x: 140,
                                transition: transitionTween,
                            },
                            secondAnimation: {
                                x: 0,
                                transition: transitionSpring,
                            },
                        }}
                    >
                        Action biased <br /> engineer
                    </motion.h2>
                </div>
            </motion.div>
            {/* TITLE */}
            <motion.p
                key={scale}
                style={{
                    marginTop: `calc(-1*${scale}*9rem)`
                }}
                className="text-white text-center text-2xl font-extralight whitespace-nowrap"
                initial={{ y: 560, opacity: 0 }}
                animate={animationName}
                variants={{
                    firstAnimation: {
                        y: 560,
                        opacity: 0,
                        transform: `scale(${scale})`,
                        transition: transitionTween,
                    },
                    secondAnimation: {
                        y: 0,
                        opacity: 1,
                        transform: `scale(${scale})`,
                        transition: transitionSpring,
                    },
                }}
            >
                Senior Product Designer at BrowserStack
            </motion.p>
        </motion.div>
    )
}