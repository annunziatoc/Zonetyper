import { useEffect, useState } from "react";
import styles from './Timer.module.css'

const Timer = () => {

    const MAX_SECONDS = 600;

        const [timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 1)
        }, 1000)

        const timeout = setTimeout(() => {
            clearInterval(interval)
        }, MAX_SECONDS * 1000)

        return () => {
            clearInterval(interval)
            clearTimeout(timeout)
        }

    }, [])


    const formatTime = () => {
        const minutes = Math.floor(timer / 60)
        const formattedTime = `${minutes > 0 ? minutes + `m` : ''} ${timer % 60}s`
        return formattedTime
    }
 
    return (
 <div className={styles.timer}>{formatTime()}</div>
    )
}


export default Timer;