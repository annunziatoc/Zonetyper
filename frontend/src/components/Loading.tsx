import styles from './Loading.module.css'
const Loading = () => {
    return (

        <div className={styles.loadingOverlay}>
            <div className={styles.loadingBar}>
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className={styles.loadingLines}></div>
                ))}
            </div>
            <div>Loading...</div>
        </div >
    )
}

export default Loading;