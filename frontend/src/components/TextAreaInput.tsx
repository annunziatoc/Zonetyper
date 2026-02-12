import {useState, type RefObject, useRef, useEffect} from 'react';
import {motion} from 'framer-motion';
import usePassage from "../services/usePassage.ts";

interface TextAreaInputProps {
    inputRef: RefObject<HTMLTextAreaElement | null>;
}

const TextAreaInput = ({inputRef}: TextAreaInputProps) => {

    const [textInput, setTextInput] = useState("")
    const [caretPos, setCaretPos] = useState({left: 0, top: 0})
    const charRefs = useRef<(HTMLSpanElement | null)[]>([])

    const {passage} = usePassage();
    const processedPassage = passage?.content.trim().replace(/\s+/g, ' ')
        .replace(/[–—]/g, '-').slice(0,627) + (passage && passage.content.length > 627 ? '...': '');

    useEffect(() => {
        const currentChar = charRefs.current[textInput.length]
        if (currentChar) {
            const rect = currentChar.getBoundingClientRect()
            const parentRect = currentChar.parentElement?.getBoundingClientRect()
            if (parentRect) {
                setCaretPos({
                    left: rect.left - parentRect.left,
                    top: rect.top - parentRect.top
                })
            }
        }
    }, [textInput.length])
    
    function checkInput(index: number) {
        if (index >= textInput.length) return 'text-typing-surface-text dark:text-typing-surface-text-dark';
        if (textInput[index] === processedPassage[index]) return 'text-text-success dark:text-text-success-dark';
        return 'bg-bg-failure dark:bg-bg-failure-dark'
    }
    
    return (
        <div className="relative w-full h-full">
            <textarea
                ref={inputRef}
                value={textInput}
                onChange={(e) => {
                    if (e.target.value.length <= processedPassage.length) {
                        setTextInput(e.target.value)
                    }

                }}
                style={{
                    position: 'absolute',
                    left: '-10000px'
                }}
            />

            <div className="relative">
                <motion.div
                    className="absolute bg-caret-background dark:bg-caret-background-dark pointer-events-none z-0"
                    animate={{
                        left: `${caretPos.left}px`,
                        top: `${caretPos.top}px`
                    }}
                    transition={{duration: 0.04, ease: "easeOut"}}
                    style={{width: '0.85rem', height: '1.85rem'}}
                />
                <div className="relative z-10">
                    {processedPassage.split('').map((char, index) => (
                        <span
                            key={index}
                            ref={el => void (charRefs.current[index] = el)}
                            className={`${checkInput(index)} text-[1.40rem] font-mono`}
                        >
                            {char}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default TextAreaInput;


