import { useEffect, useState } from "react";
import styles from './Timer.module.css'
import useTypingStore from "../store/useTypingStore";

const Timer = () => {


    const { startTime, endTime } = useTypingStore()
    const [elapsed, setElapsed] = useState(0)
    const MAX_SECONDS = 600

    useEffect(() => {
        if (!startTime) {
            setElapsed(0)
            return
        }

        const interval = setInterval(() => {
            const now = Date.now()
            if (endTime || now - startTime >= 1000 * MAX_SECONDS) {
                setElapsed(endTime ? endTime - startTime : 1000 * MAX_SECONDS)
                clearInterval(interval)
                return
            }
            setElapsed(now - startTime)
        }, 1000)
        return () => clearInterval(interval)
    }, [startTime, endTime])


    const formatTime = () => {
        const seconds = Math.floor(elapsed / 1000)
        const minutes = Math.floor(seconds / 60)
        const formattedTime = `${minutes > 0 ? minutes + `m` : ''} ${seconds % 60}s`
        return formattedTime
    }

    return (
        <div className={styles.timer}>{formatTime()}</div>
    )
}

export default Timer;