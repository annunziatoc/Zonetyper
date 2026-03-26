import { useEffect, useRef } from "react";
import styles from './TypingSurface.module.css'

import { useStartSession } from "./hooks/useStartSession";
import useEndSession from "./hooks/useEndSession";
import Keydown from "./components/Keydown";
import ErrorDisplay from "./components/ErrorDisplay";
import CharDisplay from "./components/CharDisplay";
const MainSurface = ({ surfaceRef }: { surfaceRef: React.RefObject<HTMLDivElement | null> }) => {

    const containerRef = useRef<HTMLDivElement | null>(null);
    useStartSession();
    useEndSession();
    useEffect(() => {
        surfaceRef.current?.focus()
    }, [])

    return (
        <main className={styles.mainSurface}>
            <div className={styles.typingMaskWrapper}>
                <div ref={containerRef} className={styles.typingMask}>
                    <Keydown surfaceRef={surfaceRef}>
                        <CharDisplay containerRef={containerRef} />
                    </Keydown>
                </div>
                    <ErrorDisplay />
            </div>
        </main >
    )
}

export default MainSurface;

