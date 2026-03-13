import useTypingStore from "../store/useTypingStore";
import { getNewText } from '../services/typingApi'
import styles from './NewQuoteButton.module.css'


const NewQuoteButton = () => {

    const { setSourceText: setTypingText } = useTypingStore();

    const handleClick = () => {
        const result = getNewText()
        setTypingText(result);
    }

    return (
        <div className={styles.newQuoteButton} onClick={handleClick}>
            New Quote
        </div>
    )
}


export default NewQuoteButton;