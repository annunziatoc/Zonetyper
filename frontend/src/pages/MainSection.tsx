import HeroMaskSvg from "../components/HeroMaskSvg.tsx";
import TextAreaInput from "../components/TextAreaInput.tsx";

import {useRef} from 'react';




const MainSection = () => {
    
    const inputRef = useRef<HTMLTextAreaElement>(null);
    
    return (
        <div className="h-full flex items-center justify-center">
            <section className="relative w-full max-w-4xl mx-auto h-[400px] -mt-30">
                <div
                    onClick={() => {inputRef.current?.focus();}}
                    className="absolute inset-0 bg-typing-surface dark:bg-typing-surface-dark before:absolute before:inset-0"
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
                    <div className="relative py-10 px-6 text-typing-surface-text dark:text-typing-surface-text-dark font-mono text-xl">
                        <TextAreaInput inputRef={inputRef}/>
                    </div>
                </div>
            </section>

            <HeroMaskSvg />
        </div>
    )
}

export default MainSection