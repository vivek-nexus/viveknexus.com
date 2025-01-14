import { navDetails } from "@/constants/navDetails"
import { Space_Mono } from "next/font/google"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: "700"
})

type Alphabet = "V" | "D" | "E" | "A" | "R"

export function NavItem({ alphabet }: { alphabet: Alphabet }) {
    const router = useRouter()

    function isModifierKeyPressed(keyboardEvent: KeyboardEvent) {
        return (keyboardEvent.altKey || keyboardEvent.ctrlKey || keyboardEvent.metaKey || keyboardEvent.shiftKey)
    }


    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            console.log(isModifierKeyPressed(event))
            if (!isModifierKeyPressed(event)) {
                const key = event.key.toUpperCase() as Alphabet
                if (key.toLocaleUpperCase() === alphabet) {
                    if (alphabet === "R") {
                        window.open(navDetails[alphabet].URI, "_blank")
                    }
                    else if (alphabet === "V") {
                        window.scrollTo(0, 0)
                    }
                    else {
                        router.push(navDetails[alphabet].URI)
                    }
                }
            }
        }

        document.addEventListener("keydown", handleKeyPress)

        return () => {
            document.removeEventListener("keydown", handleKeyPress)
        }
    }, [router])

    return (
        <li>
            <a href={navDetails[alphabet].URI} target={alphabet === "R" ? "_blank" : undefined}
                className="w-14 md:w-20 h-14 md:h-20 flex flex-col gap-1 justify-center items-center"
            >
                <span className={`border border-white2 w-5 h-5 rounded text-xs font-bold ${spaceMono.className} flex justify-center items-center`}>{alphabet.toLocaleUpperCase()}</span>
                <span className="hidden md:block">{navDetails[alphabet].text}</span>
            </a>
        </li>
    )
}