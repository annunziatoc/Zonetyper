import { useEffect } from "react";
import { getNewText } from "../services/typingApi";
import useTypingStore from "./useTypingStore";
import { useNavigate } from "react-router";

const useTabReset = () => {

    const navigate = useNavigate()
    const { setSourceText, setSourceTextId, resetSession } = useTypingStore();

    useEffect(() => {
        const handler = (ev: KeyboardEvent) => {
         
            if (ev.key !== 'Tab') return
            ev.preventDefault();
            resetSession();
            const newText = getNewText();
            setSourceText(newText.text)
            setSourceTextId(newText.id)
            navigate('/')
        }

        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

}


export default useTabReset;