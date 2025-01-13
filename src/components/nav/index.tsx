import { AnimatePresence, motion } from "motion/react"
import { transitionSpring } from "../hero"
import { NavItem } from "./NavItem"
import { useEasterEgg } from "@/context/EasterEggContext"
import { useEffect } from "react"
import { useTooltipInvoked } from "@/context/TooltipInvokedContext"


export function Nav() {
    const { showEasterEggMessage, setShowEasterEggMessage } = useEasterEgg()
    const { tooltipInvokedCount } = useTooltipInvoked()

    useEffect(() => {
        let showEasterEggMessageTimeout: NodeJS.Timeout
        if (showEasterEggMessage) {
            showEasterEggMessageTimeout = setTimeout(() => {
                setShowEasterEggMessage(false)
            }, 3000)
        }

        return () => clearTimeout(showEasterEggMessageTimeout)
    }, [showEasterEggMessage])

    useEffect(() => {
        if (tooltipInvokedCount > 4 && tooltipInvokedCount <= 16) {
            setShowEasterEggMessage(true)
        }
    }, [tooltipInvokedCount])

    return (
        <motion.nav
            className={`fixed w-fit z-50 top-0 left-1/2 -translate-x-1/2 mx-auto bg-black/50 border-b border-l border-r border-[#c0c0c0]/50 backdrop-blur-md rounded-b-2xl overflow-clip transition-all duration-500 ease-in-out ${showEasterEggMessage ? `max-h-24 md:max-h-28` : `max-h-14 md:max-h-20`}`}
            initial={{ opacity: 0 }}
            animate={"secondAnimation"}
            variants={{
                secondAnimation: {
                    opacity: 1,
                    transition: { ...transitionSpring, delay: 6.75 },
                },
            }}
        >
            <ul className="flex">
                <NavItem alphabet="V" />
                <NavItem alphabet="D" />
                <NavItem alphabet="E" />
                <NavItem alphabet="A" />
                <NavItem alphabet="R" />
            </ul>
            <AnimatePresence>
                {showEasterEggMessage &&
                    <motion.p
                        className="text-center text-black text-sm md:text-base -mt-1 py-1 bg-white/75"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        You found an easter egg, smarty pants!
                    </motion.p>
                }
            </AnimatePresence>
        </motion.nav>
    )
}