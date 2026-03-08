import { useRef, useEffect } from "react";
import styles from './MainSurface.module.css'
import { motion } from "framer-motion"
import useTypingStore from "../store/useTypingStore";
import { getNewText } from "../services/typingApi";
import { useCaretPosition } from "../hooks/useCaretPosition";
import { useTypingSession } from "../hooks/useTypingSession";
const MainSurface = ({ surfaceRef }: { surfaceRef: React.RefObject<HTMLDivElement | null> }) => {

    const {setSourceText, currIdx, setCurrIdx,
        charsArr, setCharsArr, startTime, setStartTime } = useTypingStore();

    const caretRef = useRef<HTMLSpanElement>(null);
    const caretPos = useCaretPosition(caretRef, currIdx)
    useTypingSession();

    useEffect(() => {
        surfaceRef.current?.focus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main className={styles.mainSurface}>
            <div className={styles.typingMask}>
                <div ref={surfaceRef} onKeyDown={async (ev) => {

                    if (currIdx === 0 && startTime === 0) setStartTime(Date.now())

                    // if(currIdx >= charsArr.length) return

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
                            setSourceText(newText)
                            setCurrIdx(() => 0)
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
                            top: caretPos.top, left: caretPos.left,
                            height: caretPos.height, width: caretPos.width
                        }}
                        transition={{ duration: 0.04, ease: 'easeOut' }} />
                </div>
            </div>
        </main >
    )
}

export default MainSurface;
