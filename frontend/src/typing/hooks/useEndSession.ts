import { useEffect } from "react"
import useTypingStore from "./useTypingStore"
import { submitSession } from "../services/typingSessionService"

const useEndCompletion = () => {

    const { charsArr, startTime, sourceText, sourceTextId, errorCount,
        setEndTime, setFinalWpm } = useTypingStore()
    
    useEffect(() => {
        //if all true then we are done also .every returns true on empty arr
        if (charsArr.every(cs => cs.status === true) && charsArr.length > 0) {
            //for final time
            const now = Date.now()
            //get all chars and create an arr like ['c','h','a','r','s',' ',]
            //join into a string like so ['chars ']
            //split to get word chunks ['chars', '']
            const nOfWords = charsArr.map(cs => cs.char).join('').split(' ').length
            //ms to s to min 
            const elapsedMin = (now - startTime) / 60000
            const wpm = startTime === 0 ? 0 : Math.floor(nOfWords / elapsedMin)

            //if session not started or startTime === 0
            if (startTime === 0 || wpm === 0) return;
            setEndTime(now)
            setFinalWpm(wpm)
            submitSession({
                sourceTextId: sourceTextId,
                wpm: wpm,
                accuracy: Math.round(((charsArr.length - errorCount) / charsArr.length) * 100),
                duration: Math.floor((now - startTime) / 1000),
                errorCount: errorCount,
                sourceText: sourceText,
            }).catch(err => console.error(" submitSession failed", err));

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [charsArr, startTime])
}


export default useEndCompletion;