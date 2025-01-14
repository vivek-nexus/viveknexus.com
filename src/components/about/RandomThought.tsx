import { randomThoughts } from "@/constants/randomThougts"
import { useTooltipInvoked } from "@/context/TooltipInvokedContext"

export function RandomThought() {
    const { tooltipInvokedCount } = useTooltipInvoked()
    return (
        <p className="max-w-[25vw] leading-normal" >
            {randomThoughts[(tooltipInvokedCount % 4)]}
        </p>)
}