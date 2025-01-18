import { randomThoughts } from "@/constants/randomThougts"
import { useGlobalContext } from "@/context/GlobalContext"

export function RandomThought() {
    const { tooltipInvokedCount } = useGlobalContext()
    return (
        <p className="max-w-[25vw] leading-normal" >
            {randomThoughts[(tooltipInvokedCount % 4)]}
        </p>)
}