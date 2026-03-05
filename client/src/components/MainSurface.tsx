import { useState, useRef, useEffect } from "react";
import styles from './MainSurface.module.css'
import { motion } from "framer-motion"
import useTypingStore from "../store/useTypingStore";
import { getNewText } from "../services/typingApi";
const MainSurface = ({ surfaceRef }: { surfaceRef: React.RefObject<HTMLDivElement | null> }) => {

    const { typingText, setTypingText } = useTypingStore();


    interface CharState {
        char: string;
        status: null | true | false;
        id: string;
    }

    const caretRef = useRef<HTMLSpanElement>(null);
    const [cursorPos, setCursorPos] = useState({ top: 0, left: 0, height: 0, width: 0 })
    const [currIdx, setCurrIdx] = useState(0);
    const [charsArr, setCharsArr] = useState<CharState[]>([])

    useEffect(() => {
        const rect = caretRef.current?.getBoundingClientRect()
        if (!rect) return
        setCursorPos({
            top: rect.top, left: rect.left, height: rect.height,
            width: Math.max(rect.width, 13)
        })
    }, [currIdx])

    useEffect(() => {
        const handleResize = () => {
            const rect = caretRef.current?.getBoundingClientRect()
            if (!rect) return
            setCursorPos({
                top: rect.top, left: rect.left, height: rect.height,
                width: Math.max(rect.width, 13)
            })
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        surfaceRef.current?.focus()
    }, [])


    useEffect(() => {
        setCharsArr(typingText.split('').map((char) => ({
            char,
            status: null,
            id: crypto.randomUUID()
        })))
        setCurrIdx(0)
    }, [typingText])

    useEffect(() => {
        const init = async () => {
            const newText = await getNewText();
            setTypingText(newText)
        }
        init();
    }, [])
    
    return (
        <main className={styles.mainSurface}>
            <div className={styles.typingMask}>
                <div ref={surfaceRef} onKeyDown={async (ev) => {

                    switch (ev.key) {
                        //if chars match
                        case 'Backspace':
                            {
                                if (currIdx > 0) {
                                    setCharsArr((prev) => prev.map((cs, i) => {
                                        //if index match
                                        return i === currIdx - 1 ? { ...cs, status: null } : cs
                                    }))

                                    setCurrIdx((curr) => curr - 1)
                                }
                                break;
                            }
                        case 'Enter': {
                            setCharsArr((prev) => prev.map((cs, i) => {
                                return i === currIdx ? { ...cs, status: null } : cs
                            }))
                            setCurrIdx((curr) => curr + 1)
                            break;
                        }

                        case 'Tab': {
                            ev.preventDefault();
                            const newText = await getNewText();
                            setTypingText(newText)
                            setCurrIdx(0)
                            break;
                        }

                        // the crux of the typing validation
                        case charsArr[currIdx].char: {
                            setCharsArr((prev) => prev.map((cs, i) => {
                                return i === currIdx ? { ...cs, status: true } : cs
                            }))
                            setCurrIdx((curr) => curr + 1)

                            break;
                        }

                        //dont process non-single char keyboard commands
                        default: {
                            if (ev.key.length !== 1) break
                            setCharsArr((prev) => prev.map((cs, i) => {
                                return i === currIdx ? { ...cs, status: false } : cs
                            }))
                            setCurrIdx((curr) => curr + 1)
                            break;
                        }
                    }
                }}
                    className={styles.surface}
                    tabIndex={0}>
                    {charsArr.map((cs, i) => (
                        <span key={cs.id} className={cs.status === true ?
                            styles.correct : cs.status === false ? styles.incorrect : ''}
                            ref={i === currIdx ? caretRef : null}>{cs.char}</span>
                    ))}
                    <motion.div
                        style={{ position: 'fixed' }}
                        className={styles.caret}
                        animate={{
                            top: cursorPos.top, left: cursorPos.left,
                            height: cursorPos.height, width: cursorPos.width
                        }}
                        transition={{ duration: 0.04, ease: 'easeOut' }} />
                </div>
            </div>
        </main >
    )
}

export default MainSurface;
