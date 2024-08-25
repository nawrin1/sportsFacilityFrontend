// import { MdOutlineSportsGymnastics } from "react-icons/md";
// import './Navbar.css'
// import { CgProfile } from "react-icons/cg";
// import { NavLink } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../redux/hook";
// import { logout, selectCurrentUser, useCurrentUserToken } from "../redux/features/auth/authSlice";

// const Navbar = () => {
//     const user = useAppSelector(selectCurrentUser);
//     const token=useAppSelector(useCurrentUserToken)
//     const dispatch=useAppDispatch()

//     console.log(user,token)
//     const handleLogout=()=>{
//         dispatch(logout())
//     }


//     return (
// <div className="bg-black sticky top-0 h-auto pt-2 ">
//             <div className="nav sticky flex justify-between rounded-full pt-2 px-2 pb-3 top-0 font-serif  border-b-[1px] border-gray-500 font-bold w-full h-14 text-white mx-auto items-center max-w-[1200px]">
//                 <div className="flex">
//                     <p><MdOutlineSportsGymnastics className="mt-1 mr-1 text-3xl" /></p>
//                     <h1 className="text-3xl">SPORT EASE</h1>
//                 </div>

//                 <div className="menu-bar w-[50%] h-10 bg-slate-300 rounded-full ">
//                     <p className="transform text-2xl font-serif font-semibold text-center">MENU</p>

//                 </div>
//                 { 
//                 !user && !token?   (
//                     <NavLink to='/login'>
//                     <div className="button w-[100px] h-[30px] text-xl font-serif flex items-center justify-center relative">
//                         <div className="icon absolute text-[#f2ede6] text-2xl pl-3 pt-[2px]">
//                         <CgProfile />
//                         </div>
//                         <span className="login-text">Login</span>
//                     </div>
//                     </NavLink>
//                 ):                    ( 
//                 <div onClick={handleLogout} className="button w-[100px] h-[30px]  font-serif flex items-center justify-center relative mt-3">
//                     <div className="icon absolute text-[#f2ede6] text-2xl pl-3 pt-[2px]">
//                     <CgProfile />
//                     </div>
//                     <span className="login-text text-xl">Logout</span>
//                 </div>
//                 )
//                 }



//             </div>
//         </div>

//     );
// };

// export default Navbar;



import { useState } from 'react';
import { MdOutlineSportsGymnastics } from "react-icons/md";
import './Navbar.css'
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logout, selectCurrentUser, useCurrentUserToken } from "../redux/features/auth/authSlice";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = useAppSelector(selectCurrentUser);
    const token = useAppSelector(useCurrentUserToken);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    const toggleMenu = () => {
        setIsMenuOpen(true);
    };

    return (
        <div className="bg-black sticky top-0 h-auto pt-2">
            <div className="nav sticky flex justify-between rounded-full pt-2 px-2 pb-3 top-0 font-serif border-b-[1px] border-gray-500 font-bold w-full h-14 text-white mx-auto items-center max-w-[1200px]">
                <div className="flex">
                    <p><MdOutlineSportsGymnastics className="mt-1 mr-1 text-3xl" /></p>
                    <h1 className="text-3xl">SPORT EASE</h1>
                </div>

                {/* <div
                    className={`menu-bar w-[50%] h-10 bg-slate-300 rounded-full transition-transform duration-500 ${
                        isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
                    }`}
                >
                    
                </div> */}



<div onClick={toggleMenu} className="cursor-pointer text-white">
    
        <div className={`menu-bar flex justify-center pt-2 bg-[#414141] mt-[6px] ${isMenuOpen ? 'open' : ''}`}>
       
                        <ul className="menu flex menu-horizontal space-x-8 text-[16px]">
                            
                        <NavLink to='/' className={({ isActive }) =>
                        isActive ? "active" : ""
                        }>
                            <li className='a'>Home</li>
                        </NavLink>

                        <NavLink to='/manage' className={({ isActive }) =>
                        isActive ? "active" : ""
                        }>
                            <li className='a'>Facility</li>
                        </NavLink>

                        <NavLink to='/products' className={({ isActive }) =>
                        isActive ? "active" : ""
                        }>
                            <li className='a'>About Us</li>
                        </NavLink>

                        <NavLink to='/products' className={({ isActive }) =>
                        isActive ? "active" : ""
                        }>
                            <li className='a'>Contact Us</li>
                        </NavLink>
                        
                            
                        </ul>
                    
        </div>
   
        <p className={`${isMenuOpen ? 'close' : ''}transform text-2xl font-serif font-semibold text-center mr-4`}>MENU</p>
    
</div>


                {!user && !token ? (
                    <NavLink to="/login">
                        <div className="button w-[100px] h-[30px] text-xl font-serif flex items-center justify-center relative mt-3">
                            <div className="icon absolute text-[#f2ede6] text-2xl pl-3 pt-[2px]">
                                <CgProfile />
                            </div>
                            <span className="login-text">Login</span>
                        </div>
                    </NavLink>
                ) : (
                    <div onClick={handleLogout} className="button w-[100px] h-[30px] font-serif flex items-center justify-center relative mt-3">
                        <div className="icon absolute text-[#f2ede6] text-2xl pl-3 pt-[2px]">
                            <CgProfile />
                        </div>
                        <span className="login-text text-xl">Logout</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
