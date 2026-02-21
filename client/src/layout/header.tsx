import { useEffect, useState } from "react";
import styles from './header.module.css'

const Header = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>('dark')
    const [animate, setAnimate] = useState(false)


    useEffect(() => {
        document.documentElement.style.colorScheme = theme
    }, [theme])

    const onClickLogo = () => {
        setAnimate(!animate)
    }


    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={`${styles.logo} ${animate ? styles['logo-animate'] : ''}`} onClick={() => onClickLogo()}>
                    <span className={styles['logo-zone']}>[ Z o n e </span>
                    <span className={styles['logo-typer']}>T y p e r ]</span>
                </div>
                <div className={styles['nav-items']}>
                    <span>Race</span>
                    <span>Leaderboard</span>
                    <span>Profile</span>
                    <span onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>Theme</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;