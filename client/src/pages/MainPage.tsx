import { useEffect, useRef, useState } from "react";
import MainSurface from "../components/MainSurface";
import styles from './MainPage.module.css'
const MainPage = () => {


    const MAX_SECONDS = 300;
    const [timer, setTimer] = useState(0)



    const surfaceRef = useRef<HTMLDivElement>(null)
    // const [totalSeconds, setTotalSeconds] = useState(0)

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




    return (
        <>
            <div className={styles.mainPage} onClick={() => surfaceRef.current?.focus()}>
                <div className={styles.typingSpeedWrapper}>
                    <div className={styles.timer}>{timer}</div>
                    <div className={styles.wpm}></div>
                </div>
                <MainSurface surfaceRef={surfaceRef} />
            </div>

        </>
    )
}


export default MainPage;