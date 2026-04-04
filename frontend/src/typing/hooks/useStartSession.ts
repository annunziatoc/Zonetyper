import { useEffect } from "react"
import useTypingStore from "./useTypingStore";

export const useStartSession = () => {

    const { sourceText, setCharsArr, setCurrIdx, setStartTime, setFinalWpm, setFinalAcc,  setFinalDur, setEndTime, resetErrorCount } = useTypingStore();

    //populate the charsArr
    //slice up until a certain number of words
    useEffect(() => {

        const words = sourceText.split(' ')
        const numChars = words.slice(0, Math.min(105, words.length)).join(' ').length
        setCharsArr(() => sourceText.split('').slice(0, numChars).map((char) => ({
            char,
            status: null,
            id: crypto.randomUUID()
        })))
        setCurrIdx(() => 0)
        setStartTime(0)
        setFinalWpm(0)
        setFinalAcc(0)
        setFinalDur(0)
        setEndTime(0)
        resetErrorCount()

    }, [sourceText])

}
