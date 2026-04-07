import { useEffect, useRef } from "react";
import TypingSurface from "../main/components/TypingSurface";
import styles from './Index.module.css'
import Timer from '../main/components/Timer'
import useTypingStore from "../main/hooks/useTypingStore";

const MainPage = () => {

    const { endTime } = useTypingStore()
    const surfaceRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!endTime) {
            setTimeout(() => {
                surfaceRef.current?.focus()
            },225)
        }
    }, [endTime])


    return (
        <div className={styles.mainPage} onClick={() => surfaceRef.current?.focus()}>
            <div className={styles.typingSpeedWrapper}>
            </div>
            <div className={styles.typingSpeedWrapper}>
                <div style={{ visibility: !endTime ? 'visible' : 'hidden' }}>
                    <Timer />
                </div>
            </div>
            <TypingSurface surfaceRef={surfaceRef} />
        </div>
    )
}

export default MainPage;