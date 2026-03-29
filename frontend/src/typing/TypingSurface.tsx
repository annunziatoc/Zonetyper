import { useRef } from "react";
import styles from './TypingSurface.module.css'
import { useStartSession } from "./hooks/useStartSession";
import useEndSession from "./hooks/useEndSession";
import TypingInput from "./components/TypingInput";
import ErrorDisplay from "./components/ErrorDisplay";
import CharDisplay from "./components/CharDisplay";
import useTypingStore from "./hooks/useTypingStore";
import ResultsScreen from "./components/ResultsScreen";
import { AnimatePresence, motion } from "framer-motion"

const MainSurface = ({ surfaceRef }: { surfaceRef: React.RefObject<HTMLDivElement | null> }) => {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const { endTime, sourceTextId } = useTypingStore()
    useStartSession();
    useEndSession();

    return (
        <main className={styles.mainSurface}>
            <AnimatePresence mode="wait">
                {!endTime ?
                    <motion.div key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} transition={{ duration: 0.15 }}>
                        <div className={styles.typingMaskWrapper}>
                            <div ref={containerRef} className={styles.typingMask}>
                                <TypingInput surfaceRef={surfaceRef}>
                                    <AnimatePresence >
                                        <motion.div key={sourceTextId} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                                            <CharDisplay containerRef={containerRef} />
                                        </motion.div>
                                    </AnimatePresence>
                                </TypingInput>
                            </div>
                            <ErrorDisplay />
                        </div>
                    </motion.div>
                    :
                    <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                        <ResultsScreen />
                    </motion.div>}
            </AnimatePresence>
        </main >
    )
}

export default MainSurface;

