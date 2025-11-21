import HeroMaskSvg from "../components/HeroMaskSvg.tsx";

const Home = () => {
    return (
        <div>
            <div className="relative w-4xl mx-auto mt-30 h-[500px]">
                <div
                    className="absolute inset-0 bg-teal-800 "
                    style={{ clipPath: 'url(#heroClip)' }}
                >
                    <div className="p-8 text-white">
                        Your content here
                    </div>
                </div>
            </div>

            <HeroMaskSvg />
        </div>
    )
}

export default Home




