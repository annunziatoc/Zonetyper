import useTypingStore from "../hooks/useTypingStore";
import styles from './ResultsScreen.module.css'

const ResultsScreen = () => {

    const { finalWpm, finalAcc, finalDur, errorCount } = useTypingStore();
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.heading}>Session Complete.</div>
                <div className={styles.statsGrid}>
                    <div>Duration: {finalDur}</div>
                    <div>Error Count: {errorCount}</div>
                    <div>Accuracy: {finalAcc}%</div>
                    <div>WPM: {finalWpm}</div>
                </div>
                 <div className={styles.nextSession}>Tab for Next Quote</div>
            </div>
           
        </div>
    )
}


export default ResultsScreen;