import {Link} from 'react-router-dom';

const Header = () => {


    return (
        <Link to="/">
            <div className="felex p-1 mb-10 border w-full max-w-5xl mx-auto">
                <div className="text-xl  font-display"><span className="mr-2">[</span>
                    <span className="text-neutral-500">Z o n e T y p e </span>
                    <span className="inline-block 
               p-[0.15rem] rotate-15 ml-[0.18rem] bg-red-500 ">R</span>
                    <span className="ml-2.5">]</span></div>
            </div>
        </Link>
    )
}


export default Header



