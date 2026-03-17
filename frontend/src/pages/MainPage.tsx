import { useRef } from "react";
import TypingSurface from "../typing/TypingSurface";
import styles from './MainPage.module.css'
import Timer from '../typing/Timer'
import WPM from "../typing/WPM";
import useTypingStore from "../typing/useTypingStore";

const MainPage = () => {

    const { endTime } = useTypingStore();

    const surfaceRef = useRef<HTMLDivElement>(null)

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