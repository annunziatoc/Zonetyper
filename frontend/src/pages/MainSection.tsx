import HeroMaskSvg from "../components/HeroMaskSvg.tsx";

const MainSection = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <section className="relative w-full max-w-4xl mx-auto h-[400px] -mt-30">
                <div
                    className="absolute inset-0 bg-[#1f1e1c] "
                    style={{ clipPath: 'url(#heroClip)' }}
                >
                    <div className="py-10 px-6  text-zinc-300 font-mono text-xl">
                        Your content here
                    </div>
                </div>
            </section>

            <HeroMaskSvg />
        </div>
    )
}

export default MainSection




