import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";


const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="w-full h-screen bg-black"> h</div>
            
        </div>
    );
};

export default Mainlayout;