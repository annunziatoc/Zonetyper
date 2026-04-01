import { useEffect, useState } from "react";
import useTypingStore from "../hooks/useTypingStore";
import { getUserStats, type userStatsDto } from "../services/userStatsService";
import styles from './ResultsScreen.module.css'
import Loading from "../../components/Loading";

const ResultsScreen = () => {

    const {
        finalWpm, endTime, finalAcc,
        //    errorCount, finalDur,
    } = useTypingStore()
    const [stats, setStats] = useState<userStatsDto | null>(null);
    useEffect(() => {
        if (!endTime) return
        getUserStats().then(setStats)
    }, [endTime])

        ;
    return (
        <div className={styles.container}>
            <div className={styles.heading}>Session Results</div>
                <div className={styles.card}>
                    <ul className={styles.statsGrid}>
                        <li>Speed: <span>{`${finalWpm} `}<small>wpm</small></span></li>
                        <li>Accuracy: <span>{`${finalAcc} %`}</span></li>
                        {/* <li>Duration: <span>{`${finalDur} s`}</span></li>
                    <li>Errors: <span>{errorCount}</span></li> */}
                        {stats ?  <li>Top Speed: <span>{`${stats?.topSpeed} `}<small>wpm</small></span></li> : <Loading/>}
                       {stats ? <li>Last 5 Avg: <span>
                            {(() => {
                                if (!stats?.recentStats) return ''
                                let sum = 0;
                                for (const s of stats.recentStats) sum += s.wpm
                                return Math.round(sum / stats.recentStats.length)
                            })()}
                            <small> wpm</small>
                        </span></li> : <Loading/> }
                    </ul>
                    <div className={styles.graph}>
                    </div>
                </div>
            {/* <div className={styles.nextSession}>Tab for Next Quote</div> */}
        </div>
    )
}


export default ResultsScreen;