import { motion } from "motion/react"
import { transitionSpring } from "../hero"
import { NavItem } from "./NavItem"


export function Nav() {
    return (
        <motion.nav
            className="fixed z-50 top-0 left-1/2 -translate-x-1/2 mx-auto bg-black/50 border-b border-l border-r border-[#c0c0c0]/50 backdrop-blur-md rounded-b-2xl"
            initial={{ opacity: 0 }}
            animate={"secondAnimation"}
            variants={{
                secondAnimation: {
                    opacity: 1,
                    transition: { ...transitionSpring, delay: 6.75 },
                },
            }}
        >
            <ul className="hidden md:flex">
                <NavItem alphabet="V" />
                <NavItem alphabet="D" />
                <NavItem alphabet="E" />
                <NavItem alphabet="A" />
                <NavItem alphabet="R" />
            </ul>
        </motion.nav>
    )
}