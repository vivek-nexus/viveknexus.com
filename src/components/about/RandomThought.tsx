import { randomThoughts } from "@/constants/randomThougts"
import { useTooltipInvoked } from "@/context/TooltipInvokedContext"
import { useEffect } from "react"

export function RandomThought() {
    const { tooltipInvokedCount, setTooltipInvokedCount } = useTooltipInvoked()

    useEffect(() => {
        // TODO: Check why this increments by 4
        console.log(tooltipInvokedCount)
        setTooltipInvokedCount((tooltipInvokedCount) => (tooltipInvokedCount + 1))
    }, [])

    return (
        <p className="max-w-[25vw] leading-normal" >
            {randomThoughts[(tooltipInvokedCount / 4) % 4]}
        </p>)
}