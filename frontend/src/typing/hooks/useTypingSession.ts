import { useEffect } from "react"
import { getNewText } from "../services/typingApi"
import useTypingStore from "../hooks/useTypingStore";



export const useTypingSession = () => {

    const { sourceText, setCharsArr, setCurrIdx, setSourceText, setSourceTextId } = useTypingStore();

    //initialize source text
    useEffect(() => {
        const newText = getNewText();
        setSourceText(newText.text)
        setSourceTextId(newText.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //populate the charsArr
    //slice up until a certain number of words
    useEffect(() => {

        const words = sourceText.split(' ')
        const numChars = words.slice(0, Math.min(110, words.length)).join(' ').length
        setCharsArr(() => sourceText.split('').slice(0, numChars).map((char) => ({
            char,
            status: null,
            id: crypto.randomUUID()
        })))
        setCurrIdx(() => 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sourceText])

}





