import { useEffect } from "react"
import useTypingStore from "./useTypingStore"

const useWPMTracking = () => {

    const { charsArr, startTime, addWpmHistory } = useTypingStore()
    const wordsCompleted = charsArr.filter((cs) => cs.char === ' ' && cs.status === true).length

    useEffect(() => {
        //now here to prevent stale value
        const now = Date.now()
        const elapsedMin = (now - startTime) / 60000
        const elapsedSeconds = Math.round((now - startTime) / 1000)
        const wpm = Math.round((wordsCompleted / elapsedMin))
        //copy of chars arr so store stays intact
        const lastCompleted = [...charsArr].reverse().find((cs) => cs.status === true && cs.char === ' ')
        if (!startTime || !wordsCompleted || lastCompleted?.char !== ' ') return
        addWpmHistory({ time: elapsedSeconds, wpm: wpm })
    }, [charsArr])
}

export default useWPMTracking