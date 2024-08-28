import { BsGithub } from "react-icons/bs";
import { FaLeaf, FaLinkedin } from "react-icons/fa";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            
            
            <footer className="footer bg-[#222222] text-white p-10">
            <aside>
            
                <div className="flex">
                                    
                        <p className="text-3xl font-bold pt-3 ">SPORTEASE </p>
                        
                        <div className="text-2xl pt-4">
                        <MdOutlineSportsGymnastics/>     
                        </div>

                 </div>
                 <div>
                    <p><span className="text-xl">Always at your service</span></p>
                    
                 </div>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                <a href="http://www.linkedin.com/in/jannatul-ferdous-nawrin-162058233/" target="_blank">
                    <div className="text-2xl">
                    <FaLinkedin />

                    </div>
                </a>
                <a href="https://github.com/nawrin1" target="_blank">
                    <div className="text-2xl">
                    < BsGithub />
                    </div>
                </a>
                <a href="https://www.facebook.com/jannatulferdous.nawrin.7?mibextid=ZbWKwL" target="_blank">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                </a>
                </div>
                <p><NavLink to='/aboutus'><span className="text-[15px] text-[#9e9e9e] hover:text-white">About Us </span></NavLink> <span className="text-[15px] hover:text-white text-[#9e9e9e]"> Contact Us</span> </p>
            </nav>
            </footer>
            
        </div>
    );
};

export default Footer;