import {useTheme} from "../../contexts/ThemeContext.tsx";

const Header = () => {

    const {toggleTheme} = useTheme()


    return (
        <div>
            <button className=""
                    onClick={() => toggleTheme()}>hey</button>
            header</div>
    )
}


export default Header