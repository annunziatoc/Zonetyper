import { useEffect, useState } from "react";
import styles from './Timer.module.css'

const Timer = () => {

    const MAX_SECONDS = 600;

        const [timer, setTimer] = useState(0)

    useEffect(() => {
        
        const interval = setInterval(() => {
            setTimer((prev) => {
                if(prev >= MAX_SECONDS) clearInterval(interval)
                return prev + 1
            })
        }, 1000)

        return () => {
            clearInterval(interval)
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