import { useEffect, useState } from "react";
import useTypingStore from "../typer/hooks/useTypingStore";
import { getUserStats, type userStatsDto } from "../typer/services/userStatsService";
import styles from './Results.module.css'
import Loading from "../shared/components/Loading";
import WpmChart from "../typer/components/WpmChart";

const Results = () => {
    const {
        finalWpm, endTime, finalAcc,
        //    errorCount, finalDur,
    } = useTypingStore()
    const [stats, setStats] = useState<userStatsDto | null>(null);
    useEffect(() => {
        if (!endTime) return
        getUserStats().then(setStats).catch(err => console.error('getUserStats failed', err));
    }, [endTime])

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <ul className={styles.statsGrid}>
                    <li>Speed: <span>{`${finalWpm} `}<small>wpm</small></span></li>
                    <li>Accuracy: <span>{`${finalAcc} %`}</span></li>
                    {stats ? <li>Top Speed: <span>{`${stats?.topSpeed} `}
                        <small>wpm</small></span></li> : <li><Loading /></li>}
                    {stats ? <li>Last 5 Avg: <span>
                        {(() => {
                            if (!stats?.recentStats) return ''
                            let sum = 0;
                            for (const s of stats.recentStats) sum += s.wpm
                            return Math.round(sum / stats.recentStats.length)
                        })()}
                        <small> wpm</small>
                    </span></li> : <li><Loading /></li>}
                </ul>
                <div className={styles.graphGridOuter}>
                    <div className={styles.graphFlexInner}>
                        <div>Words Per Minute</div>
                        <WpmChart />
                    </div>
                    <div className={styles.seconds}>Seconds</div>
                </div>
            </div>
        </div>
    )
}


export default Results;

