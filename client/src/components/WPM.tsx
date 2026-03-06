import styles from './WPM.module.css'
import useTypingStore from "../store/useTypingStore";

const WPM = () => {

    const {currIdx, charsArr, startTime } = useTypingStore()

    const charsTyped = charsArr.slice(0, currIdx).map((cs) => cs.char).join('')
    const nOfWords = charsTyped.split(' ').length
    const elapsedMin = (Date.now() - startTime)/60000
    const wpm = startTime === 0 ? 0 : Math.floor(nOfWords / elapsedMin)


    return (
        <div className={styles.wpm}>
            {`WPM: ${wpm}`}
        </div>
    )
}


export default WPM



