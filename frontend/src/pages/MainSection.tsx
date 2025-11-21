import HeroMaskSvg from "../components/HeroMaskSvg.tsx";

const MainSection = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <section className="relative w-full max-w-4xl mx-auto h-[400px] -mt-30">
                <div
                    className="absolute inset-0 bg-typing-surface dark:bg-typing-surface-dark"
                    style={{ clipPath: 'url(#heroClip)' }}
                >
                    <div className="py-10 px-6  text-typing-surface-text dark:text-typing-surface-text-dark font-mono text-xl">
                        Your content here
                    </div>
                </div>
            </section>

            <HeroMaskSvg />
        </div>
    )
}

export default MainSection




