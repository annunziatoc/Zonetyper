import { useEffect, useRef } from "react";
import TypingSurface from "../typing/TypingSurface";
import styles from './MainPage.module.css'
import Timer from '../typing/components/Timer'

const MainPage = () => {

    const surfaceRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        surfaceRef.current?.focus()
    }, [])


    return (
        <div className={styles.mainPage} onClick={() => surfaceRef.current?.focus()}>
            <div className={styles.typingSpeedWrapper}>
            </div>
            <div className={styles.typingSpeedWrapper}>
                <Timer />
            </div>
            <TypingSurface surfaceRef={surfaceRef} />
        </div>
    )
}


export default MainPage;