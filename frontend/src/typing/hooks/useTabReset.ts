import { useEffect } from "react";
import { getNewText } from "../services/typingApi";
import useTypingStore from "./useTypingStore";

const useTabReset = () => {

    const { setSourceText, setSourceTextId, setCurrIdx, setEndTime, setStartTime, resetErrorCount } = useTypingStore()

    useEffect(() => {
        const handler = (ev: KeyboardEvent) => {
            if (ev.key !== 'Tab') return
            ev.preventDefault();
            //reset all state
            const newText = getNewText();
            setSourceText(newText.text)
            setSourceTextId(newText.id)
            setCurrIdx(() => 0)
            setEndTime(0)
            setStartTime(0)
            resetErrorCount()
        }

        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

}


export default useTabReset;