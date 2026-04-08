import useTypingStore from "../hooks/useTypingStore"
import styles from '../components/TypingSurface.module.css'

const ErrorDisplay = () => {
    const { charsArr, } = useTypingStore()
    const hasErrors = charsArr.some(cs => cs.status === false)

    return (
        <>
            {hasErrors && <div className={styles.warning}>Backspace Your Mistakes To Continue.</div>}
            <svg style={{ overflow: 'visible' }} className={`${styles.typingMaskOutline} ${hasErrors ? styles.hasErrors : ''}`} viewBox="0 0 800 368" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M 0 30 C 0 24 6 18 14 18 H 304 C 315 18 326 14 334 7 C 340 3 348 0 356 0 H 444 C 452 0 460 3 466 7 C 474 14 485 18 496 18 H 786 C 794 18 800 24 800 30 V 344 C 800 350 794 356 786 356 H 682 C 678 356 675 359 670 365 C 667 367 664 368 657 368 H 143 C 140 368 136 367 130 365 C 125 359 122 356 118 356 H 14 C 6 356 0 350 0 344 Z"
                    fill="none" vectorEffect="non-scaling-stroke" />
            </svg>
        </>
    )
}

export default ErrorDisplay;