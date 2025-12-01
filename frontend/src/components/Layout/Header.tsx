import {Link} from 'react-router-dom';
import {useTheme} from "../../contexts/ThemeContext.tsx";


const Header = () => {

    const {toggleTheme} = useTheme()
    


    return (
            <div className="flex justify-between px-1 py-2 mb-10 w-full max-w-5xl mx-auto">
                <Link to="/" className="text-xl font-display">
                    <div className="text-xl font-display"><span className="mr-2">[</span>
                        <span className="text-text-primary dark:text-text-primary-dark">Z o n e </span>
                        <span className="text-red-500">T y p e </span>
                        <span className="inline-block  
               p-[0.15rem] rotate-15 ml-[0.18rem] bg-red-500 ">R</span>
                        <span className="ml-2.5">]</span>
                    </div>
                </Link>

                <div className="flex justify-center items-center gap-6 font-header text-lg">
                    <div className="group cursor-pointer p-2 -m-2">
                        <span className="relative inline-block pb-1 -m-1">Race
                        <span className="absolute h-1 w-0 bg-red-500 bottom-0 left-0 
                        transition-all duration-200 group-hover:w-full skew-x-[-30deg]"></span>
                        </span>
                    </div>
                    <div className="group cursor-pointer p-2 -m-2">
                        <span className="relative inline-block pb-1 -m-1">Leaderboard
                        <span className="absolute h-1 w-0 bg-red-500 bottom-0 left-0 
                        transition-all duration-200 group-hover:w-full skew-x-[-30deg]"></span>
                        </span>
                    </div>
                    <div className="group cursor-pointer p-2 -m-2">
                        <span className="relative inline-block pb-1 -m-1">Profile
                        <span className="absolute h-1 w-0 bg-red-500 bottom-0 left-0 
                        transition-all duration-200 group-hover:w-full skew-x-[-30deg]"></span>
                        </span>
                    </div>
                    <div className="group cursor-pointer p-2 -m-2" onClick={toggleTheme}>
                        <span className="relative inline-block pb-1 -m-1">Theme
                        <span className="absolute h-1 w-0 bg-red-500 bottom-0 left-0 
                        transition-all duration-200 group-hover:w-full skew-x-[-30deg]"></span>
                        </span>
                    </div>
                </div>
            </div>
    )
}


export default Header



