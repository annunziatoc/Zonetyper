import { useRef } from "react";
import MainSurface from "../components/MainSurface";
import styles from './MainPage.module.css'
import Timer from '../components/Timer'
import WPM from "../components/WPM";
import NewQuoteButton from "../components/NewQuoteButton";
import useTypingStore from "../store/useTypingStore";

const MainPage = () => {

   const { endTime }  = useTypingStore();

    const surfaceRef = useRef<HTMLDivElement>(null)

    return (
        <div className={styles.mainPage} onClick={() => surfaceRef.current?.focus()}>
            <div className={styles.typingSpeedWrapper}>
                <NewQuoteButton />
            </div>
            <div className={styles.typingSpeedWrapper}>
                <Timer />
               {endTime > 0 && <WPM/>}
            </div>
            <MainSurface surfaceRef={surfaceRef} />
        </div>
    )
}


export default MainPage;