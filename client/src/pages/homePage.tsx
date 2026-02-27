import { useState, useRef, useEffect } from "react";
import styles from './homePage.module.css'

const HomePage = () => {

    interface CharState {
        char: string;
        status: null | true | false;
        id: string;
    }

    const caretRef = useRef<HTMLSpanElement>(null);
    const [cursorPos, setCursorPos] = useState({top: 0, left: 0, height: 0, width: 0})
    const [textOnScreen] = useState(`"Culture is like a smog. To live within it,
         you must breathe some of it in and, inevitably, be contaminated."`)
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
        setCursorPos({ top: rect.top, left: rect.left, height: rect.height, width: rect.width })
    },[currIdx])

    return (
        <main className={styles.main}>
            <div className={styles.typingMask}>
                <div onKeyDown={(ev) => {

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

                        case charsArr[currIdx].char: {
                            setCharsArr((prev) => prev.map((cs, i) => {
                                return i === currIdx ? { ...cs, status: true } : cs
                            }))
                            setCurrIdx((curr) => curr + 1)

                            break;
                        }
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
                        <span key={cs.id} className={cs.status === true ? styles.correct : cs.status === false ? styles.incorrect : ''} ref={i === currIdx ? caretRef : null}>{cs.char}</span>
                    ))}
                    <div className={styles.caret} style={{position: 'fixed', top: cursorPos.top, left: cursorPos.left, height: cursorPos.height, width: cursorPos.width}}/>
                </div>
            </div>
        </main >
    )

}


export default HomePage;
