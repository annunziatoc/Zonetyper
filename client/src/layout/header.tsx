import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <span className={styles['logo-zone']}>[ Z o n e </span>
                    <span className={styles['logo-typer']}>T y p e r ]</span>
                    
                </div>
                <div className={styles['nav-items']}>
                    <span>Race</span>
                    <span>Leaderboard</span>
                    <span>Profile</span>
                    <span>Theme</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;