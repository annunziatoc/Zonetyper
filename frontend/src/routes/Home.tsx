import { useEffect, useRef } from "react";
import TypingSurface from "../typer/components/TypingSurface";
import styles from './Home.module.css'
import Timer from '../typer/components/Timer'
import useTypingStore from "../typer/hooks/useTypingStore";

const Home = () => {

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

export default Home;