import { useEffect } from "react"
import { getNewText } from "./typingApi"
import useTypingStore from "./useTypingStore";
import { submitSession } from "./typingSessionService"



export const useTypingSession = () => {

    const { sourceText, setCharsArr, setCurrIdx, setSourceText,
        endTime, startTime, finalWpm, sourceTextId, setSourceTextId, errorCount } = useTypingStore();

    useEffect(() => {
        submitSession({
            sourceTextId: sourceTextId,
            wpm: finalWpm,
            accuracy: ((sourceText.length - errorCount) / sourceText.length) * 100,
            duration: endTime - startTime,
            errorCount: errorCount,
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //populate the charsArr

    useEffect(() => {
        setCharsArr(() => sourceText.split('').map((char) => ({
            char,
            status: null,
            id: crypto.randomUUID()
        })))
        setCurrIdx(() => 0)
    }, [sourceText, setCharsArr, setCurrIdx])

    //set source text

    useEffect(() => {
        const init = () => {
            const newText = getNewText();
            setSourceText(newText.text)
            setSourceTextId(newText.id)
        }
        init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setSourceText])


}


