import { useState, useRef, useEffect } from "react";
import styles from './MainSurface.module.css'
import { motion } from "framer-motion"
const MainSurface = ({ surfaceRef }: { surfaceRef: React.RefObject<HTMLDivElement | null> }) => {

    interface CharState {
        char: string;
        status: null | true | false;
        id: string;
    }

  
    const caretRef = useRef<HTMLSpanElement>(null);
    const [cursorPos, setCursorPos] = useState({ top: 0, left: 0, height: 0, width: 0 })
    const [textOnScreen] = useState(`"Culture is like a smog. To live within it, you must breathe some of it in and, inevitably, be contaminated."`)
    const [currIdx, setCurrIdx] = useState(0);
    const [charsArr, setCharsArr] = useState<CharState[]>(
        textOnScreen.split('').map((char) => ({
            char,
            status: null,
            id: crypto.randomUUID()
        }))
    )

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

    return (
        <main className={styles.mainSurface}>
            <div className={styles.typingMask}>
                <div ref={surfaceRef} onKeyDown={(ev) => {

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
                            setCharsArr((prev) => prev.map((cs, i) => {
                                return i === currIdx ? { ...cs, status: null } : cs
                            }))
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
