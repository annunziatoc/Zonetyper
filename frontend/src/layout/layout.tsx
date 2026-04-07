import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router";
import styles from './layout.module.css'
import useTabReset from "../main/hooks/useTabReset";


const Layout = () => {
    useTabReset()
    return (
        <div className={styles.layout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}


export default Layout;