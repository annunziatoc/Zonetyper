import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import {useTheme} from "../../contexts/ThemeContext.tsx";


const Layout = () => {

    const {darkMode} = useTheme()

    return (
        <div className="h-screen grid grid-rows-[auto_1fr_auto] text-text-primary dark:text-text-primary-dark
         bg-background dark:bg-background-dark" data-theme={darkMode ? 'dark' : 'light'}>
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}


export default Layout


