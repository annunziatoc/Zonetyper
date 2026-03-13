import { useEffect } from "react"
import { getNewText } from "../services/typingApi"
import useTypingStore from "../store/useTypingStore";



export const useTypingSession = () => {

    const {sourceText, setCharsArr, setCurrIdx, setSourceText} = useTypingStore();

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
            setSourceText(newText)
        }
        init();
    }, [setSourceText])


}


