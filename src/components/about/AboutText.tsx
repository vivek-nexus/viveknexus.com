import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


export function AboutText({ number }: { number: number }) {
    return (
        <p>
            {(number === 1) && `Two core aspects of my professional life — design and frontend — I learnt them outside the formal education framework! Most skills are ultimately a combination of experience and persistence, yeah? Purpose and process are both important, but if given a choice, I might show a healthy disrespect for the process.`}
            {(number === 2) && `Stoicism is one value I hold close to heart. May be, you sensed that by now? `}
            {(number === 3) &&
                <>
                    Whenever I day dream, my brain has this weird habit of zooming out and finding similarities between seemingly unrelated things of life. A random&nbsp;
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    className="font-bold bg-gradient-to-r from-[#2ed1a0] to-[#0e5edf] text-gradient">
                                    example.
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="max-w-[25vw] leading-normal">Visual craft has very less space for emotions like sadness or frustration — it is more reserved for grandness and awesomeness. Other creative fields like music or cinema have much better distribution of emotions, no?</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </>
            }
            {(number === 4) && `If you sufficiently broaden your perspective, we are neither making the world a better place nor a worse one — all we are doing is just changing it.`}
        </p>
    )
}