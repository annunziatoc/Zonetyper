import { useEffect, useState } from "react";
import { getLeaderboardStats, type LeaderboardEntryDto } from "../../leaderboard/services/leaderboardService";
import styles from './Leaderboard.module.css'
import { Link } from "react-router-dom";
import { useEscapeNav } from "../../hooks/useEscapeNav";
import Loading from "../../components/Loading";

const Leaderboard = () => {

    const [leaderboardStats, setLeaderBoardStats] = useState<LeaderboardEntryDto[] | null>(null)
    useEscapeNav();

    useEffect(() => {
        getLeaderboardStats().then((data) => setLeaderBoardStats(data))
    }, [])

    return (
        <div className={styles.leaderBoardWrapper}>
            <Link to='/'>
                <div className={styles.exitButton}>&#x2715;</div>
            </Link>

            <div className={styles.categoriesWrapper}>
                <div>Rank</div>
                <div>User</div>
                <div>WPM</div>
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
                }) : <Loading/>}

        </div >




    )
}


export default Leaderboard;