import { designProjects } from "@/constants/designProjects"
import { DesignProjectCard } from "./DesignProjectCard"
import { DesignValues } from "./DesignValues"
import { motion } from "motion/react"


export function Design() {
    return (
        <section id="design" className="max-w-[1024px] mx-auto px-4 py-12 md:py-24">
            <DesignValues />
            <motion.div
                className="flex flex-col gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, type: "tween", ease: "easeIn" }}
            >
                {designProjects.map((designProject) => {
                    return (
                        <DesignProjectCard
                            key={designProject.title}
                            gradientColourHex={designProject.gradientColourHex}
                            gradientStartOpacity={designProject.gradientStartOpacity}
                            title={designProject.title}
                            description={designProject.description}
                            skills={designProject.skills}
                            quote={designProject.quote}
                            linkText={designProject.linkText}
                            hyperLink={designProject.hyperLink}
                            buttonGradientEndOpacity={designProject.buttonGradientEndOpacity}
                            imageURI={designProject.imageURI}
                            addMask={designProject.addMask}
                        />
                    )
                })}
            </motion.div>
        </section>
    )
}