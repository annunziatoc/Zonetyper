import { useState } from "react";
import styles from './homePage.module.css'

const HomePage = () => {

    interface CharState {
        char: string;
        status: null | true | false;
        id: string;
    }

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

    return (
        <main className={styles.main}>
            <div className={styles.typingMask}>
                <div onKeyDown={(ev) => {
                    if (ev.key === charsArr[currIdx].char) {
                        setCharsArr((prev) => prev.map((cs, i) => {
                            if (i === currIdx) {
                                return { ...cs, status: true }
                            }
                            return cs
                        }))
                    }
                    setCurrIdx((curr) => curr + 1)
                }}
                    className={styles.surface}
                    tabIndex={0}>
                    {charsArr.map((cs) => (
                        <span key={cs.id}>{cs.char}</span>
                    ))}
                </div>
            </div>
        </main>
    )

}


export default HomePage;
