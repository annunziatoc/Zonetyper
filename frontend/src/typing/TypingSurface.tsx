import { useEffect, useRef } from "react";
import styles from './TypingSurface.module.css'

import { useStartSession } from "./hooks/useStartSession";
import useEndSession from "./hooks/useEndSession";
import TypingInput from "./components/TypingInput";
import ErrorDisplay from "./components/ErrorDisplay";
import CharDisplay from "./components/CharDisplay";
const MainSurface = ({ surfaceRef }: { surfaceRef: React.RefObject<HTMLDivElement | null> }) => {

    const containerRef = useRef<HTMLDivElement | null>(null);
    useStartSession();
    useEndSession();
   
    return (
        <main className={styles.mainSurface}>
            <div className={styles.typingMaskWrapper}>
                <div ref={containerRef} className={styles.typingMask}>
                    <TypingInput surfaceRef={surfaceRef}>
                        <CharDisplay containerRef={containerRef} />
                    </TypingInput>
                </div>
                    <ErrorDisplay />
            </div>
        </main >
    )
}

export default MainSurface;

