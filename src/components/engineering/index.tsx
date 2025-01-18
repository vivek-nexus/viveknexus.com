import { engineeringProjects } from "@/constants/engineeringProjects"
import { Space_Mono } from "next/font/google"
import { EngineeringProjectCard } from "./EngineeringProjectCard"
import { ShootingStars } from "../ui/shooting-stars"
import { StarsBackground } from "../ui/stars-background"

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: "400"
})

export function Engineering() {
    return (
        <section
            id="engineering"
            className={`relative ${spaceMono.className} py-24 [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]`}
        >
            <ShootingStars
                minDelay={0}
                maxDelay={2500}
            />
            <StarsBackground
                twinkleProbability={1}
                starDensity={0.00095}
            />
            <div className="max-w-[1024px] mx-auto px-6">
                <h2 className="text-5xl md:text-7xl text-center font-extralight mb-12">Engineering</h2>
                <div className="grid grid-cols-2 gap-12">
                    {engineeringProjects.map((engineeringProject, index) => {
                        return (
                            <EngineeringProjectCard
                                key={engineeringProject.title}
                                index={index}
                                title={engineeringProject.title}
                                description={engineeringProject.description}
                                repoLink={engineeringProject.repoLink}
                                stats={engineeringProject.stats}
                                linkText={engineeringProject.linkText}
                                hyperLink={engineeringProject.hyperLink}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}