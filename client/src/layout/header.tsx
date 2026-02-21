import { useEffect, useState } from "react";
import styles from './header.module.css'

const Header = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>('dark')


    useEffect(() => {
        document.documentElement.style.colorScheme = theme
    }, [theme])


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
                    <span onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light' )} className={styles['theme-toggle']}>Theme</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;