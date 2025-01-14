import { randomThoughts } from "@/constants/randomThougts"
import { useEasterEgg } from "@/context/EasterEggContext"

export function RandomThought() {
    const { tooltipInvokedCount } = useEasterEgg()
    return (
        <p className="max-w-[25vw] leading-normal" >
            {randomThoughts[(tooltipInvokedCount % 4)]}
        </p>)
}