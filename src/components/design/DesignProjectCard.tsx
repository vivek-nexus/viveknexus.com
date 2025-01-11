import { Lora } from "next/font/google"
import { Skill } from "./Skill"

const lora = Lora({
    subsets: ["latin"],
    style: "italic"
})

interface DesignProjectCardProps {
    title: string
    description: string
    skills: string[]
    quote?: string
    gradientColourHex: string
    gradientStartOpacity: number
    linkText: string
    hyperLink: string
    buttonGradientEndOpacity: number
    imageURI: string
}


export function DesignProjectCard(
    { title,
        description,
        skills,
        quote,
        gradientColourHex,
        gradientStartOpacity,
        linkText,
        hyperLink,
        buttonGradientEndOpacity,
        imageURI
    }: DesignProjectCardProps) {
    return (
        <>
            <style jsx>{`
                .design-project-card{
                    background: radial-gradient(100.05% 77.64% at 0.74% 100.32%, #${gradientColourHex + gradientStartOpacity} 14.25%, #${gradientColourHex}00 100%);
                }

                @media only screen and (min-width: 1024px) {
                    .design-project-card{
                        background: radial-gradient(32.05% 77.64% at 0.74% 2.32%, #${gradientColourHex + gradientStartOpacity} 14.25%, #${gradientColourHex}00 100%);
                    }
                }
            `}</style>
            <div
                className="w-full rounded-2xl p-6 md:p-12 grid grid-cols-2 gap-9 border-2 border-white/25 shadow-whiteGlow1 design-project-card"
            >
                <div
                    className="col-span-2 lg:col-span-1 order-2 lg:order-1">
                    <div className="mb-12 md:mb-16">
                        <p className="font-extralight text-[#dcdcdc] text-3xl md:text-4xl mb-6">{title}</p>
                        <p className="mb-6">{description} </p>
                        <div className="flex md:flex-col gap-4 md:gap-2 mb-6 whitespace-nowrap overflow-x-auto">
                            {skills.map((skill) => {
                                return (<Skill key={skill} skill={skill} gradientStartHex={gradientColourHex} />)
                            })}
                        </div>
                        {quote &&
                            <p className={`${lora.className} italic`}>
                                {`"${quote}"`}
                            </p>
                        }
                    </div>
                    <a
                        href={hyperLink}
                        target="_blank"
                        className="w-fit px-4 py-2 mb-1 md:mb-0 rounded-lg text-white font-medium flex gap-1 items-center"
                        style={{
                            backgroundImage: `linear-gradient(180deg,#${gradientColourHex} 0%, #${gradientColourHex + buttonGradientEndOpacity} 100% )`
                        }}
                    >
                        {linkText}
                        <img src="/icons/north-east-arrow.svg" className="h-4" />
                    </a>
                </div>
                <div className={`col-span-2 aspect-square lg:aspect-auto max-h-64 lg:max-h-full lg:col-span-1 order-1 lg:order-2 flex justify-start lg:justify-end bg-no-repeat bg-contain bg-center lg:bg-right`}
                    style={{
                        backgroundImage: `url("${imageURI}")`
                    }}
                >
                </div>
            </div>
        </>
    )
}