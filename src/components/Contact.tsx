export function Contact() {
    return (
        <>
            <section
                id="contact"
                className="px-4 pt-24 pb-4 opacity-75 text-white text-center"
            >
                <h2 className="text-5xl md:text-7xl font-extralight mb-12">What say?</h2>
                <div className="mb-12 flex gap-4 md:gap-8 justify-center items-center">
                    <a href="mailto:in.vivek.g@gmail.com">
                        <img src="/icons/email.svg" className="h-12 md:h-16" />
                    </a>
                    <a href="https://github.com/vivek-nexus" target="_blank">
                        <img src="/icons/github.svg" className="h-12 md:h-16" />
                    </a>
                    <a href="https://www.linkedin.com/in/vivek-nexus" target="_blank">
                        <img src="/icons/linkedin.svg" className="h-12 md:h-16" />
                    </a>
                </div>
                <footer>
                    Hand built with Next.js + Tailwind CSS and animated with Motion. Contains easter eggs.
                </footer>
            </section>
        </>
    )
}