import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import styles from './Layout.module.css'
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