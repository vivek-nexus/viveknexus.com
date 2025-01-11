export function Contact() {
    return (
        <>
            <style>{
                `
                    @keyframes contact-animation {
                        0% {
                            --c-0: hsla(216.63716814159295, 91%, 24%, 1);
                            --x-0: 34%;
                            --y-0: 50%;
                            --s-start-0: 8%;
                            --s-end-0: 86%;
                            --c-1: hsla(162.24, 100%, 24%, 1);
                            --x-1: 71%;
                            --y-1: 72%;
                            --s-start-1: 8%;
                            --s-end-1: 86%;
                            --c-2: hsla(266, 60%, 58%, 0);
                            --x-2: 57%;
                            --y-2: 28%;
                            --s-start-2: 8%;
                            --s-end-2: 86%;
                            --c-3: hsla(309, 68%, 82%, 0);
                            --x-3: 16%;
                            --y-3: 43%;
                            --s-start-3: 8%;
                            --s-end-3: 86%;
                        }

                        100% {
                            --c-0: hsla(162.24, 100%, 24%, 1);
                            --x-0: 3%;
                            --y-0: 34%;
                            --s-start-0: 8%;
                            --s-end-0: 86%;
                            --c-1: hsla(216.63716814159295, 91%, 24%, 1);
                            --x-1: 97%;
                            --y-1: 6%;
                            --s-start-1: 8%;
                            --s-end-1: 86%;
                            --c-2: hsla(250, 66%, 57%, 0);
                            --x-2: 31%;
                            --y-2: 52%;
                            --s-start-2: 8%;
                            --s-end-2: 86%;
                            --c-3: hsla(318, 82%, 99%, 0);
                            --x-3: 48%;
                            --y-3: 89%;
                            --s-start-3: 8%;
                            --s-end-3: 86%;
                        }
                    }

                    @property --c-0 {
                        syntax: '<color>';
                        inherits: false;
                        initial-value: hsla(216.63716814159295, 91%, 24%, 1)
                    }

                    @property --x-0 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 34%
                    }

                    @property --y-0 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 50%
                    }

                    @property --s-start-0 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 8%
                    }

                    @property --s-end-0 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 86%
                    }

                    @property --c-1 {
                        syntax: '<color>';
                        inherits: false;
                        initial-value: hsla(162.24, 100%, 24%, 1)
                    }

                    @property --x-1 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 71%
                    }

                    @property --y-1 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 72%
                    }

                    @property --s-start-1 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 8%
                    }

                    @property --s-end-1 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 86%
                    }

                    @property --c-2 {
                        syntax: '<color>';
                        inherits: false;
                        initial-value: hsla(266, 60%, 58%, 0)
                    }

                    @property --x-2 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 57%
                    }

                    @property --y-2 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 28%
                    }

                    @property --s-start-2 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 8%
                    }

                    @property --s-end-2 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 86%
                    }

                    @property --c-3 {
                        syntax: '<color>';
                        inherits: false;
                        initial-value: hsla(309, 68%, 82%, 0)
                    }

                    @property --x-3 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 16%
                    }

                    @property --y-3 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 43%
                    }

                    @property --s-start-3 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 8%
                    }

                    @property --s-end-3 {
                        syntax: '<percentage>';
                        inherits: false;
                        initial-value: 86%
                    }

                    #contact {
                        --c-0: hsla(216.63716814159295, 91%, 24%, 1);
                        --x-0: 34%;
                        --y-0: 50%;
                        --c-1: hsla(162.24, 100%, 24%, 1);
                        --x-1: 71%;
                        --y-1: 72%;
                        --c-2: hsla(266, 60%, 58%, 0);
                        --x-2: 57%;
                        --y-2: 28%;
                        --c-3: hsla(309, 68%, 82%, 0);
                        --x-3: 16%;
                        --y-3: 43%;
                        ;
                        background-color: hsla(29, 0%, 0%, 1);
                        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 828 828' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), radial-gradient(circle at var(--x-0) var(--y-0), var(--c-0) var(--s-start-0), transparent var(--s-end-0)), radial-gradient(circle at var(--x-1) var(--y-1), var(--c-1) var(--s-start-1), transparent var(--s-end-1)), radial-gradient(circle at var(--x-2) var(--y-2), var(--c-2) var(--s-start-2), transparent var(--s-end-2)), radial-gradient(circle at var(--x-3) var(--y-3), var(--c-3) var(--s-start-3), transparent var(--s-end-3));
                        animation: contact-animation 4s linear infinite alternate;
                        background-blend-mode: overlay, normal, normal, normal, normal;
                    }
                `
            }</style>
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
                    Hand built with Next.js and Tailwind CSS. Contains easter eggs.
                </footer>
            </section>
        </>
    )
}