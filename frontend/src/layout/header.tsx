import { useEffect, useState } from "react";
import styles from './Header.module.css'
import { Link } from "react-router-dom";
import useTypingStore from "../main/hooks/useTypingStore";

const Header = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>('dark')
    const [animate, setAnimate] = useState(false)
    const {resetSession, endTime} = useTypingStore()


    useEffect(() => {
        document.documentElement.style.colorScheme = theme
    }, [theme])

    const onClickLogo = () => {
        setAnimate(!animate)
        if (endTime) resetSession();
    }


    return (
        <header onMouseDown={e => e.preventDefault()} className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.navLink} to="/">
                    <div className={`${styles.logo} ${animate ? styles['logo-animate'] : ''}`} onClick={() => onClickLogo()}>
                        <span className={styles['logo-zone']}>[ Z o n e </span>
                        <span className={styles['logo-typer']}>T y p e r ]</span>
                    </div>
                </Link>
                <ul className={styles['nav-items']}>
                    {/* <li>
                        <span>Race</span>
                    </li> */}
                    <li>
                        <Link to="/leaderboard" className={styles.navLink}><span>Leaderboard</span></Link>
                    </li>
                    {/* <li>
                        <span>Login</span>
                    </li> */}
                    <li onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
                        <span>Theme</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
