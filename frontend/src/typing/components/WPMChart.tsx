
import { useEffect } from "react"
import useTypingStore from "../hooks/useTypingStore"
import styles from './WPMChart.module.css'

const WPMChart = () => {

    const { charsArr, startTime, addWpmHistory } = useTypingStore()

    const wordsCompleted = charsArr.filter((cs) => cs.char === ' ' && cs.status === true).length

    useEffect(() => {
        //now here to prevent stale value
        const now = Date.now()
        const elapsedMin = (now - startTime) / 60000
        const wpm = (wordsCompleted / elapsedMin)
        //copy of chars arr so store stays intact
        const lastCompleted = [...charsArr].reverse().find((cs) => cs.status === true && cs.char === ' ')
        if (!startTime || !wordsCompleted || lastCompleted?.char !== ' ') return
        addWpmHistory(wpm)
    }, [charsArr])

    return (
        <div className={styles.chartContainer}>

        </div>
    )
}

export default WPMChart;
