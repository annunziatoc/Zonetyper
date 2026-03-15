import { useRef, useEffect } from "react";
import styles from './MainSurface.module.css'
import { motion } from "framer-motion"
import useTypingStore from "../store/useTypingStore";
import { getNewText } from "../services/typingApi";
import { useCaretPosition } from "../hooks/useCaretPosition";
import { useTypingSession } from "../hooks/useTypingSession";
const MainSurface = ({ surfaceRef }: { surfaceRef: React.RefObject<HTMLDivElement | null> }) => {

    const { setSourceText, currIdx, setCurrIdx,
        charsArr, setCharsArr, startTime, setStartTime,
        endTime, setEndTime, setFinalWpm } = useTypingStore();

    const caretRef = useRef<HTMLSpanElement>(null);
    //pointer to hand off the current DOM node for position motion calc
    const caretPos = useCaretPosition(caretRef, currIdx)
    useTypingSession();

    //any incorrect keypress in the charsArr?
    const hasErrors = charsArr.some(cs => cs.status === false)

    //need to run the calc 
    useEffect(() => {
        if (charsArr.every(cs => cs.status === true) && charsArr.length > 0) {
            const now = Date.now()
            //get all chars and create an arr like ['c','h','a','r','s',' ',]
            //join into a string like so ['chars ']
            //split to get word chunks ['chars', '']
            const nOfWords = charsArr.map(cs => cs.char).join('').split(' ').length
            //ms to s to min 
            const elapsedMin = (now - startTime) / 60000
            const wpm = startTime === 0 ? 0 : Math.floor(nOfWords / elapsedMin)
            setFinalWpm(wpm)
            setEndTime(now)
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [charsArr])

    //get focus on the outer surface ref props so we can click anywhere
    useEffect(() => {
        surfaceRef.current?.focus()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main className={styles.mainSurface}>
            <div className={styles.typingMaskWrapper}>
                <div className={styles.typingMask}>
                    <div ref={surfaceRef} onKeyDown={async (ev) => {

                        if (currIdx === 0 && startTime === 0) setStartTime(Date.now())

                        switch (ev.key) {
                            //if chars match
                            case 'Backspace':
                                {
                                    if (currIdx > 0) {
                                        if (endTime) return
                                        setCharsArr((prev) => prev.map((cs, i) => {
                                            //if index match
                                            return i === currIdx - 1 ? { ...cs, status: null } : cs
                                        }))

                                        setCurrIdx((curr) => curr - 1)
                                    }
                                    break;
                                }
                            case 'Tab': {
                                ev.preventDefault();
                                const newText = getNewText();
                                setSourceText(newText)
                                setCurrIdx(() => 0)
                                setEndTime(0)
                                setStartTime(0)
                                break;
                            }

                            // typing validation only true of no errors
                            case charsArr[currIdx].char: {
                                setCharsArr((prev) => prev.map((cs, i) => {
                                    if (hasErrors) return i === currIdx ? { ...cs, status: false } : cs
                                    return i === currIdx ? { ...cs, status: true } : cs
                                }))
                                setCurrIdx((curr) => curr + 1)
                                break;
                            }

                            // only process single char keyboard commands
                            // ignore string cmds like 'enter', 'tab' , 'space' etc..
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
                            //span is the caret
                            //status is used for highlighting 
                            //caret ref attaches to DOM node of current char
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
                {hasErrors && <div className={styles.warning}>Backspace Your Mistakes To Continue.</div>}
                <svg style={{ overflow: 'visible' }} className={`${styles.typingMaskOutline} ${hasErrors ? styles.hasErrors : ''}`} viewBox="0 0 800 368" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M 0 30 C 0 24 6 18 14 18 H 304 C 315 18 326 14 334 7 C 340 3 348 0 356 0 H 444 C 452 0 460 3 466 7 C 474 14 485 18 496 18 H 786 C 794 18 800 24 800 30 V 344 C 800 350 794 356 786 356 H 682 C 678 356 675 359 670 365 C 667 367 664 368 657 368 H 143 C 140 368 136 367 130 365 C 125 359 122 356 118 356 H 14 C 6 356 0 350 0 344 Z"
                        fill="none" vectorEffect="non-scaling-stroke"
                    />
                </svg>
            </div>
        </main >
    )
}

export default MainSurface;

