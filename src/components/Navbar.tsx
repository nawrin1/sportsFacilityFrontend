


// import { useState } from 'react';
// import { MdOutlineSportsGymnastics } from "react-icons/md";
// import './Navbar.css'
// import { CgProfile } from "react-icons/cg";
// import { NavLink } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../redux/hook";
// import { logout, selectCurrentUser, useCurrentUserToken } from "../redux/features/auth/authSlice";
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { ImCross } from 'react-icons/im';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const user = useAppSelector(selectCurrentUser);
//     const token = useAppSelector(useCurrentUserToken);
//     const dispatch = useAppDispatch();

//     const handleLogout = () => {
//         dispatch(logout());
//     };

//     const toggleMenu = () => {
//         setIsMenuOpen(true);
//     };

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     return (
//         <div className="bg-black sticky top-0 h-auto pt-2">
//             <div className="nav sticky flex justify-between rounded-full pt-2 px-2 pb-3 top-0 font-serif border-b-[1px] border-gray-500 font-bold w-full h-14 text-white mx-auto items-center max-w-[1200px]">
//                 <div className="flex">
//                     <p><MdOutlineSportsGymnastics className="mt-1 mr-1 text-3xl" /></p>
//                     <h1 className="text-3xl">SPORT EASE</h1>
//                 </div>

//                 {/* <div
//                     className={`menu-bar w-[50%] h-10 bg-slate-300 rounded-full transition-transform duration-500 ${
//                         isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
//                     }`}
//                 >
                    
//                 </div> */}
//                         <div className={`text-2xl pt-4 px-2 lg:hidden `} onClick={toggleSidebar}>
//                             <GiHamburgerMenu />
//                         </div>



// <div onClick={toggleMenu} className="cursor-pointer text-white ">
    
//         <div className={`menu-bar flex justify-center lg:w-[50%] lg:h-[2.5rem] w-0 h-0 pt-2 border-[1px] shadow-md shadow-[#414141] mt-[6px] ${isMenuOpen ? 'open' : ''}`}>
       
//                         <ul className="menu flex menu-horizontal space-x-8 text-[16px]">
                            
//                         <NavLink to='/' className={({ isActive }) =>
//                         isActive ? "active" : ""
//                         }>
//                             <li className='a'>Home</li>
//                         </NavLink>

//                         <NavLink to='/manage' className={({ isActive }) =>
//                         isActive ? "active" : ""
//                         }>
//                             <li className='a'>Facility</li>
//                         </NavLink>

//                         <NavLink to='/products' className={({ isActive }) =>
//                         isActive ? "active" : ""
//                         }>
//                             <li className='a'>About Us</li>
//                         </NavLink>

//                         <NavLink to='/products' className={({ isActive }) =>
//                         isActive ? "active" : ""
//                         }>
//                             <li className='a'>Contact Us</li>
//                         </NavLink>
//                         <NavLink to='/products' className={({ isActive }) =>
//                         isActive ? "active" : ""
//                         }>
//                             <li className='a'>Dashboard</li>
//                         </NavLink>
                        
                            
//                         </ul>
                    
//         </div>
   
//        {
//         isMenuOpen? '':<p className={`${isMenuOpen ? 'close' : ''}transform menu-text  text-2xl font-serif font-semibold text-center mr-10 `}>MENU</p>
//        }
    
// </div>


//                 {!user && !token ? (
//                     <NavLink to="/login">
//                         <div className="button w-[100px] h-[30px] text-xl font-serif flex items-center justify-center relative mt-3">
//                             <div className="icon absolute text-[#f2ede6] text-2xl pl-3 pt-[2px]">
//                                 <CgProfile />
//                             </div>
//                             <span className="login-text">Login</span>
//                         </div>
//                     </NavLink>
//                 ) : (
//                     <div onClick={handleLogout} className="button w-[100px] h-[30px] font-serif flex items-center justify-center relative mt-3">
//                         <div className="icon absolute text-[#f2ede6] text-2xl pl-3 pt-[2px]">
//                             <CgProfile />
//                         </div>
//                         <span className="login-text text-xl">Logout</span>
//                     </div>
//                 )}
//             </div>


//  {/* menu bar */}

//             <div className={`fixed inset-0  bg-gray-900 bg-opacity-50 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}>

// </div>
// <div className={`fixed inset-y-0 left-0 bg-white w-64 z-50 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
// <div className={`text-2xl pt-4 px-2 lg:hidden  w-[50px]`} onClick={toggleSidebar}>
// <ImCross />
//             </div>

//     <ul className="menu menu-vertical space-y-4 text-xl pt-20">
//     <NavLink to='/' className={({ isActive }) =>
//             isActive ? "active" : ""
//             }>
//                 <li className='a'>Home</li>
//             </NavLink>

//             <NavLink to='/products' className={({ isActive }) =>
//             isActive ? "active" : ""
//             }>
//                 <li className='a'>Products</li>
//             </NavLink>

//             <NavLink to='/manage' className={({ isActive }) =>
//             isActive ? "active" : ""
//             }>
//                 <li className='a'>Product Manage</li>
//             </NavLink>
               
//     </ul>
// </div>
//         </div>



        
//     );
// };

// export default Navbar;




import { useState } from 'react';
import { MdOutlineSportsGymnastics } from "react-icons/md";
import './Navbar.css';
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logout, selectCurrentUser, useCurrentUserToken } from "../redux/features/auth/authSlice";
import { GiHamburgerMenu } from 'react-icons/gi';

import { RxCrossCircled } from 'react-icons/rx';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const user = useAppSelector(selectCurrentUser);
    const token = useAppSelector(useCurrentUserToken);
    const dispatch = useAppDispatch();
    const navigate=useNavigate()

    const handleLogout = () => {
        dispatch(logout());
        navigate("/")

    };

    const toggleMenu = () => {
        setIsMenuOpen(true);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="bg-black sticky top-0 h-auto pt-2  z-50 ">
            <div className="nav sticky flex justify-between rounded-full pt-2 px-2 pb-3 top-0 font-serif border-b-[1px] border-gray-500 font-bold w-full h-14 text-white mx-auto items-center max-w-[1200px]">
            <div className="hamburger-icon text-xl md:text-2xl  pt-4 px-2 lg:hidden" onClick={toggleSidebar}>
                    <GiHamburgerMenu />
                </div>
                <div className="flex  md:ml-28 ml-8 lg:ml-0 md:mt-2 mt-2 lg:mt-0">
                    <p><MdOutlineSportsGymnastics className="mt-1 mr-1 lg:text-2xl md:text-2xl text-xl" /></p>
                    <h1 className="lg:text-2xl md:text-2xl text-xl text-[#f2ede6]">SPORT EASE</h1>
                </div>



                <div onClick={toggleMenu} className="cursor-pointer text-[#f2ede6]  ">
                    <div className={`menu-bar flex justify-center  relative -left-3 lg:w-[50%] lg:h-[2.5rem] w-0 h-0 pt-2 border-[1px] shadow-md shadow-[#414141] mt-[6px] ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="menu flex menu-horizontal space-x-8 text-[16px]">
                            <NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>
                                <li className='a'>Home</li>
                            </NavLink>
                            <NavLink to='/manage' className={({ isActive }) => isActive ? "active" : ""}>
                                <li className='a'>Facility</li>
                            </NavLink>
                            <NavLink to='/aboutus' className={({ isActive }) => isActive ? "active" : ""}>
                                <li className='a'>About Us</li>
                            </NavLink>
                            <NavLink to='/products' className={({ isActive }) => isActive ? "active" : ""}>
                                <li className='a'>Contact Us</li>
                            </NavLink>
                            <NavLink to='/products' className={({ isActive }) => isActive ? "active" : ""}>
                                <li className='a'>Dashboard</li>
                            </NavLink>
                        </ul>
                    </div>
                    {!isMenuOpen && <p className="menu-text text-2xl font-serif font-semibold text-center mr-20">MENU</p>}
                </div>

                {!user && !token ? (
                    <NavLink to="/login">
                        <div className="button lg:w-[100px] lg:h-[30px] w-[80px] h-[25px] text-xl font-serif flex items-center justify-center relative lg:mt-3 mt-4 2">
                            <div className="icon absolute text-[#f2ede6] text-2xl pl-2 lg:pl-3 pt-[2px] lg:mt-1 mt-0">
                                <CgProfile />
                            </div>
                            <span className="login-text lg:text-xl text-[14px] font-normal ">Login</span>
                        </div>
                    </NavLink>
                ) : (
                    <div onClick={handleLogout} className="button lg:w-[100px] lg:h-[30px] w-[80px] h-[25px] font-serif flex items-center justify-center relative mt-3">
                        <div className="icon absolute text-[#f2ede6] text-2xl pl-2 lg:pl-3 pt-[2px] lg:mt-1 mt-0">
                            <CgProfile />
                        </div>
                        <span className="login-text lg:text-xl text-[14px] md:pt-1 pt-1 font-normal ">Logout</span>
                    </div>
                )}
            </div>

            {/* Sidebar for small devices */}
            {/* <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}>
            </div> */}
            <div className={`sidebar fixed  inset-y-0 left-0   w-72 z-50 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="text-3xl pt-4 px-2  flex justify-end " onClick={toggleSidebar}>
                <RxCrossCircled />
                </div>
                <ul className="side-menu menu-vertical flex px-10 font-serif font-semibold flex-col gap-5 space-y-4 text-xl pt-20">
                <NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>
                                <li className='a'>Home</li>
                            </NavLink>
                            <NavLink to='/manage' className={({ isActive }) => isActive ? "active" : ""}>
                                <li className='a'>Facility</li>
                            </NavLink>
                            <NavLink to='/aboutus' className={({ isActive }) => isActive ? "active" : ""}>
                                <li className='a'>About Us</li>
                            </NavLink>
                            <NavLink to='/products' className={({ isActive }) => isActive ? "active" : ""}>
                                <li className='a'>Contact Us</li>
                            </NavLink>
                            <NavLink to='/products' className={({ isActive }) => isActive ? "active" : ""}>
                                <li className='a'>Dashboard</li>
                            </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
