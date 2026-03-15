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
                <ul className={styles['nav-items']}>
                    <li>
                        <span>Race</span>
                    </li>
                    <li>
                        <span>Stats</span>
                    </li>
                    <li>
                        <span>Login</span>
                    </li>
                    <li onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
                        <span>Theme</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;