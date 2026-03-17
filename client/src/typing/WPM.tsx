import styles from '../typing/WPM.module.css'
import useTypingStore from "./useTypingStore";

const WPM = () => {

    const {finalWpm} = useTypingStore()
    return (
        <div className={styles.wpm}>
            {`WPM: ${finalWpm}`}
        </div>
    )
}


export default WPM



