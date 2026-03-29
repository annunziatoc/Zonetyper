
import { useRef } from "react"
import { motion } from "framer-motion"
import useTypingStore from "../hooks/useTypingStore"
import { useCaretPosition } from "../hooks/useCaretPosition"
import styles from '../TypingSurface.module.css'

const CharDisplay = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) => {

    const caretRef = useRef<HTMLSpanElement>(null);
    const { charsArr, currIdx, sourceTextId } = useTypingStore();
    const caretPos = useCaretPosition(caretRef, currIdx, charsArr.length, containerRef)

    return (
        <>
            {
                charsArr.map((cs, i) => (
                    //span is the caret
                    <span key={cs.id} className={cs.status === true ?
                        styles.correct : cs.status === false ? styles.incorrect : ''}
                        //if current index is this span attach the ref
                        ref={i === currIdx ? caretRef : null}>{cs.char}</span>
                ))
            }
            {
                caretPos.height > 0 && (
                    <motion.div //caret animation
                        key={sourceTextId}
                        className={styles.caret}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            top: caretPos.top, left: caretPos.left,
                            height: caretPos.height, width: caretPos.width
                        }}
                        transition={{ duration: 0.04, ease: 'easeOut' }} />
                )
            }
        </>

    )
}

export default CharDisplay;