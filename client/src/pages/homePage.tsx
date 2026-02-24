import styles from './homePage.module.css'

const HomePage = () => {

    return (
        <main className={styles.main}>
            <div className={styles.typingMask}>
                <div className={styles.surface}>
                    Here lies some text.

                </div>
            </div>
        </main>
    )

}


export default HomePage;
