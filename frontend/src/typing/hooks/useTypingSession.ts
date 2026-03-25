import { useEffect } from "react"
import { getNewText } from "../services/typingApi"
import useTypingStore from "../hooks/useTypingStore";



export const useTypingSession = () => {

    const { sourceText, setCharsArr, setCurrIdx, setSourceText, setSourceTextId} = useTypingStore();

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


