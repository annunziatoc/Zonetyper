import TextAreaInput from "../components/TextAreaInput.tsx";
import {useRef} from 'react';
import HeroMaskSvg from "../assets/HeroMaskSvg.tsx";


const MainSection = () => {

    const inputRef = useRef<HTMLTextAreaElement>(null);

    return (
        <div className="h-full flex items-center justify-center select-none"
             onClick={() => {
                 inputRef.current?.focus();
             }}>
            <section className="relative w-full max-w-4xl mx-auto h-[400px]">
                <div
                    className="absolute blur-[180px] inset-0 bg-stone-900 dark:bg-stone-700"
                    style={{
                        clipPath: 'url(#heroClip)',
                        transform: 'scale(1.005)',

                    }}
                />
                <div
                    className="absolute inset-0 bg-typing-surface dark:bg-typing-surface-dark"
                    style={{
                        clipPath: 'url(#heroClip)',
                    }}
                >
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(100,116,139,.08) 8px, rgba(100,116,139,.08) 16px),
            repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(100,116,139,.08) 8px, rgba(100,116,139,.08) 16px),
            repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(51,65,85,.12) 4px, rgba(51,65,85,.12) 8px),
            repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(51,65,85,.12) 4px, rgba(51,65,85,.12) 8px)
        `,
                            backgroundSize: '16px 16px, 16px 16px, 8px 8px, 8px 8px'
                        }}
                    />
                    <div
                        className="relative py-10 px-6 text-typing-surface-text dark:text-typing-surface-text-dark font-mono text-xl">
                        <TextAreaInput inputRef={inputRef}/>
                    </div>
                </div>
            </section>

            <HeroMaskSvg/>
        </div>
    )
}

export default MainSection



