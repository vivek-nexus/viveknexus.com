import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { randomThoughts } from "@/constants/randomThougts"
import { useState } from "react"

function generateRandomNumber(max: number) {
    return Math.floor(Math.random() * max)
}

export function AboutText({ number }: { number: number }) {
    const [randomThoughtNumber, setRandomThoughtNumber] = useState(generateRandomNumber(randomThoughts.length))

    return (
        <p>
            {(number === 1) && `Two core aspects of my professional life — design and frontend — I learnt them outside the formal education framework! Most skills are ultimately a combination of experience and persistence, yeah? Purpose and process are both important, but if given a choice, I might show a healthy disrespect for the process.`}
            {(number === 2) && `Stoicism is one value I hold close to heart. May be, you sensed that by now? `}
            {(number === 3) &&
                <>
                    Whenever I day dream, my brain has this weird habit of zooming out and finding similarities between seemingly unrelated things of life.
                    <span className="hidden md:inline"> A random&nbsp;
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        className="font-bold bg-gradient-to-r from-[#2ed1a0] to-[#0e5edf] text-gradient"
                                        onMouseOver={() => {
                                            setRandomThoughtNumber(generateRandomNumber(randomThoughts.length))
                                        }}
                                        onFocus={() => {
                                            setRandomThoughtNumber(generateRandomNumber(randomThoughts.length))
                                        }}
                                    >
                                        example.
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p
                                        className="max-w-[25vw] leading-normal"
                                    >
                                        {randomThoughts[randomThoughtNumber]}
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </span>
                </>
            }
            {(number === 4) && `If you sufficiently broaden your perspective, we are neither making the world a better place nor a worse one — all we are doing is just changing it.`}
        </p>
    )
}