import { useEffect, useState } from "react";
import { getLeaderboardStats, type LeaderboardEntryDto } from "../leaderboard/services/leaderboardService";
import styles from './Leaderboard.module.css'
import { useNavigate } from "react-router-dom";
import { useEscapeNav } from "../shared/hooks/useEscapeNav";
import Loading from "../shared/components/Loading";

const Leaderboard = () => {

    const [leaderboardStats, setLeaderBoardStats] = useState<LeaderboardEntryDto[] | null>(null)
    useEscapeNav();
    const navigate = useNavigate()
    useEffect(() => {
        getLeaderboardStats().then((data) => setLeaderBoardStats(data))
    }, [])

    return (
        <div className={styles.leaderBoardWrapper}>
            <div onClick={() => navigate(-1)} className={styles.exitButton}>&#x2715;</div>
            <div className={styles.categoriesWrapper}>
                <div>Rank</div>
                <div>User</div>
                <div>Wpm</div>
                <div>Accuracy</div>
            </div>

            {leaderboardStats ?
                leaderboardStats.map((arr, idx) => {
                    return (
                        <div key={idx} className={styles.lbRecord}>
                            <div>{`${idx + 1}`}</div>
                            <div>{`dummyUser`}</div>
                            <div>{`${arr.wpm}`}</div>
                            <div>{`${arr.accuracy}%`}</div>
                        </div>
                    )
                }) :
                <div className={styles.loadingWrapper}><Loading /></div>}

        </div >




    )
}


export default Leaderboard;