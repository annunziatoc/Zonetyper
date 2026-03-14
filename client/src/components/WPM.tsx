import styles from './WPM.module.css'
import useTypingStore from "../store/useTypingStore";

const WPM = () => {

    const {finalWpm} = useTypingStore()
    return (
        <div className={styles.wpm}>
            {`WPM: ${finalWpm}`}
        </div>
    )
}


export default WPM



