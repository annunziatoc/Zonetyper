import { useEffect } from "react";
import { getNewText } from "../services/typingApi";
import useTypingStore from "./useTypingStore";

const useTabReset = () => {

    const { setSourceText, setSourceTextId } = useTypingStore();

    useEffect(() => {
        const handler = (ev: KeyboardEvent) => {
            if (ev.key !== 'Tab') return
            ev.preventDefault();
            const newText = getNewText();
            setSourceText(newText.text)
            setSourceTextId(newText.id)
        }

        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

}


export default useTabReset;