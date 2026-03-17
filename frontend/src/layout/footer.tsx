import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>


            <div className={styles.guide}>
                <div className={styles.tab}>Tab</div>
                <div>For New Quote</div>
            </div>
            <div className={styles.guide}>
                <div className={styles.click}>Click</div>
                <div>Screen To Gain Focus</div>
            </div>

        </footer>

    )
}


export default Footer;