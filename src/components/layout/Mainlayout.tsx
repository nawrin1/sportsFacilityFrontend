import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";


const Mainlayout = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
          
            
        </div>
    );
};

export default Mainlayout;