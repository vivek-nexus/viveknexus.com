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
        <section id="engineering" className={`relative ${spaceMono.className}`}>
            <ShootingStars
                minDelay={1500}
                maxDelay={5000}
            />
            <StarsBackground
                twinkleProbability={1}
                starDensity={0.00055}
            />
            <div
                className="absolute top-0 left-0 gradient-to-b w-full h-full"
                style={{
                    backgroundImage: "linear-gradient(180deg, black 0%, transparent 20%, transparent 90%, black 100%)"
                }}
            >
            </div>
            <div className="max-w-[1024px] mx-auto px-4 pt-48 pb-48">
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