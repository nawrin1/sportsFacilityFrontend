import { MdOutlineSportsGymnastics } from "react-icons/md";
import './Navbar.css'
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
<div className="bg-black sticky top-0 h-auto pt-2">
            <div className="nav sticky flex justify-between rounded-full p-2 top-0 font-serif text-3xl border-b-[1px] border-gray-500 font-bold w-full h-12 text-white mx-auto items-center max-w-[1200px]">
                <div className="flex">
                    <p><MdOutlineSportsGymnastics className="mt-1 mr-1" /></p>
                    <h1 className="">SPORT EASE</h1>
                </div>

                <NavLink to='/login'>
                    <div className="button w-[100px] h-[30px] text-xl font-serif flex items-center justify-center relative">
                        <div className="icon absolute text-[#f2ede6] text-2xl pl-3 pt-[2px]">
                            <CgProfile />
                        </div>
                        <span className="login-text">Login</span>
                    </div>
                </NavLink>
            </div>
        </div>

    );
};

export default Navbar;