import {useTheme} from "../../contexts/ThemeContext.tsx";

const Header = () => {

    const {toggleTheme} = useTheme()


    return (
        <div>
            <button className="bg-green-500 p-10"
                    onClick={() => toggleTheme()}>hey</button>
            header</div>
    )
}


export default Header