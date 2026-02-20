import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router";
import styles from './layout.module.css'


const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}


export default Layout;