import { engineeringProjects } from "@/constants/engineeringProjects"
import { Space_Mono } from "next/font/google"
import { EngineeringProjectCard } from "./EngineeringProjectCard"

const spaceMono = Space_Mono({
    weight: "400"
})

export function Engineering() {
    return (
        <section id="engineering" className={`${spaceMono.className} max-w-[1024px] mx-auto px-4 mb-48`}>
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

        </section>
    )
}