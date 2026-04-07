import useTypingStore from "../hooks/useTypingStore";
import styles from '../components/TypingSurface.module.css'

const TypingInput = ({ surfaceRef, children }: {
    surfaceRef: React.RefObject<HTMLDivElement | null>,
    children: React.ReactNode
}) => {

    const { currIdx, setCurrIdx, charsArr, setCharsArr, startTime,
        setStartTime, endTime, setErrorCount } = useTypingStore();

    const hasErrors = charsArr.some(cs => cs.status === false)

    return (
        <div ref={surfaceRef} onKeyDown={async (ev) => {
            //at start set the start time
            if (currIdx === 0 && startTime === 0) setStartTime(Date.now())
            //out of bounds return
            if (currIdx >= charsArr.length && ev.key !== 'Backspace') return

            switch (ev.key) {
                case 'Backspace':
                    {
                        //if we can backspace at all
                        if (currIdx > 0) {
                            // disable backspace if at end
                            if (endTime) return
                            setCharsArr((prev) => prev.map((cs, i) => {
                                //if index match we undo the state
                                return i === currIdx - 1 ? { ...cs, status: null } : cs
                            }))
                            //go back by index tracking
                            setCurrIdx((curr) => curr - 1)
                        }
                        break;
                    }
                //runtime value 
                //ev.key is what user pressed
                //charsArr[currIdx].char is what user supposed to press
                case charsArr[currIdx].char: {
                    setCharsArr((prev) => prev.map((cs, i) => {
                        // typing validation only true for no errors
                        if (hasErrors) return i === currIdx ? { ...cs, status: false } : cs
                        //correct char typed
                        return i === currIdx ? { ...cs, status: true } : cs
                    }))
                    //next index regardless
                    setCurrIdx((curr) => curr + 1)
                    break;
                }

                // only process single char keyboard commands
                // ignore string cmds like 'enter', 'tab' , 'space' etc..
                default: {
                    //don't allow out of bounds
                    if (currIdx >= charsArr.length) return;
                    if (ev.key.length !== 1) break
                    setCharsArr((prev) => prev.map((cs, i) => {
                        return i === currIdx ? { ...cs, status: false } : cs
                    }))
                    setErrorCount()
                    setCurrIdx((curr) => curr + 1)
                    break;
                }
            }
        }}
            className={styles.surface}
            tabIndex={0}>
            {children}
        </div>
    )
}




export default TypingInput