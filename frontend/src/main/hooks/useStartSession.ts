import { useEffect } from "react"
import useTypingStore from "./useTypingStore";
import { getNewText } from "../services/typingApi";

export const useStartSession = () => {

    const { sourceText, setCharsArr,resetSession, setSourceText, setSourceTextId,
    setCurrentQuote, currentQuote} = useTypingStore();

    useEffect(() => {
        if (currentQuote) return; 
        const newText = getNewText();
        setCurrentQuote(newText.text);
        setSourceText(newText.text);
        setSourceTextId(newText.id);
    }, [])

    //populate the charsArr
    //slice up until a certain number of words
    useEffect(() => {

        const words = sourceText.split(' ')
        const numChars = words.slice(0, Math.min(105, words.length)).join(' ').length
        resetSession();
        setCharsArr(() => sourceText.split('').slice(0, numChars).map((char) => ({
            char,
            status: null,
            id: crypto.randomUUID()
        })))
    }, [sourceText])

}
