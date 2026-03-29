import useTypingStore from "../hooks/useTypingStore";
import styles from './ResultsScreen.module.css'

const ResultsScreen = () => {

    const { finalWpm, finalAcc, finalDur, errorCount } = useTypingStore();
    return (
        <div className={styles.container}>
            <div className={styles.heading}>Session Results</div>
            <div className={styles.card}>
                <ul className={styles.statsGrid}>
                    <li>WPM: <span>{finalWpm}</span></li>
                    <li>Accuracy: <span>{`${finalAcc} %`}</span></li>
                    <li>Duration: <span>{`${finalDur} s`}</span></li>
                    <li>Errors: <span>{errorCount}</span></li>
                </ul>

                <div className={styles.graph}>
                </div>
            </div>
            {/* <div className={styles.nextSession}>Tab for Next Quote</div> */}
        </div>
    )
}


export default ResultsScreen;