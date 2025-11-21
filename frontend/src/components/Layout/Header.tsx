import {Link} from 'react-router-dom';

const Header = () => {


    return (
        <Link to="/">
            <div className="flex p-1 mb-10 border w-full max-w-5xl mx-auto">
                <div className="text-xl font-display"><span className="mr-2">[</span>
                    <span className="text-neutral-500">
                        <span className="text-zinc-200">Z o n e </span>
                        <span className="text-red-500">T y p e </span>
                        </span>
                    <span className="inline-block 
               p-[0.15rem] rotate-15 ml-[0.18rem] bg-red-500 ">R</span>
                    <span className="ml-2.5">]</span></div>
            </div>
        </Link>
    )
}


export default Header



