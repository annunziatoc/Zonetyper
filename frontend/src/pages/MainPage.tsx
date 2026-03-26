import { useEffect, useRef } from "react";
import TypingSurface from "../typing/TypingSurface";
import styles from './MainPage.module.css'
import Timer from '../typing/components/Timer'
import WPM from "../typing/components/WPM";
import useTypingStore from "../typing/hooks/useTypingStore";

const MainPage = () => {

    const { endTime } = useTypingStore();
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
                {endTime > 0 && <WPM />}
            </div>
            <TypingSurface surfaceRef={surfaceRef} />
        </div>
    )
}


export default MainPage;