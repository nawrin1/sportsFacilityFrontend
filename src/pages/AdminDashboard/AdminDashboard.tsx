
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"; 
import { Divider } from "@mui/material";

import { MdDashboardCustomize } from "react-icons/md";
import './AdminDashboard.css'


const AdminDashboard = () => {


  return (
    <div className="drawer lg:drawer-open text-black">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-black">
        {/* Main content area */}





        <Outlet />

        <label
          htmlFor="my-drawer-2"
          className="fixed top-4 left-4 lg:hidden flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full shadow-md hover:bg-gray-700 transition duration-300 cursor-pointer"
          aria-label="Open drawer"
        >
          <AiOutlineMenu size={20} />
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full bg-[#fffff2] text-base-content shadow-xl">
          <h2 className="text-3xl text-blue-950 font-semibold text-center mb-7 font-serif">
            <p><MdDashboardCustomize/></p>Dashboard
          </h2>
          <li className="font-semibold text-lg text-center flex justify-center hover:text-[#fffff2] items-center hover:bg-[#414141]">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "activelink hover:text-white flex items-center gap-3 p-2 rounded transition duration-200" : "flex items-center gap-3 p-2 rounded transition duration-200"}
            >
              <p className="text-xl font-serif text-center">Home</p>
            </NavLink>
          </li>
          <Divider variant="middle" component="li" />
          <li className="font-semibold text-lg text-center flex justify-center hover:text-[#fffff2] items-center hover:bg-[#414141]">
            <NavLink
              to="/admindashboard/mydash"
              className={({ isActive }) => isActive ? "activelink hover:text-white flex items-center gap-3 p-2 rounded transition duration-200" : "flex items-center gap-3 p-2 rounded transition duration-200"}
            >
              <p className="text-xl font-serif text-center">My Dashboard</p>
            </NavLink>
          </li>
          <Divider variant="middle" component="li" />
          <li className="font-semibold text-lg text-center flex justify-center hover:text-[#fffff2] items-center hover:bg-[#414141]">
            <NavLink
              to="/admindashboard/allbookings"

              className={({ isActive }) => isActive ? "activelink hover:text-white flex items-center gap-3 p-2 rounded transition duration-200" : "flex items-center gap-3 p-2 rounded transition duration-200"}
            >
              <p className="text-xl font-serif text-center">All Bookings</p>
            </NavLink>
          </li>
          <li className="font-semibold text-lg text-center flex justify-center hover:text-[#fffff2] items-center hover:bg-[#414141]">
            <NavLink
              to="/admindashboard/createadmin"

              className={({ isActive }) => isActive ? "activelink hover:text-white flex items-center gap-3 p-2 rounded transition duration-200" : "flex items-center gap-3 p-2 rounded transition duration-200"}
            >
              <p className="text-xl font-serif text-center">Add Admin</p>
            </NavLink>
          </li>
        </ul> 
      </div>
    </div>
  );
};

export default AdminDashboard;
