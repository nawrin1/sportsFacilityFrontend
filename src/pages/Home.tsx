import { useEffect, useState } from 'react';
import Banner from "../components/Banner/Banner";
import Feature from "../components/Feature/Feature";
import Testimonial from "../components/Testimonial/Testimonial";
import Timeline from "../components/Timeline/Timeline";
import Video from "../components/Video/Video";
import img1 from '../assets/chevron (1).gif'

import './Home.css';


const Home = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 100px
      if (window.scrollY > 100) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="max-w-7xl">
      {/* Scroll to Top Button */}
      
      
      {showScrollTopButton && (
        <div className="profile">
          <button 
            onClick={scrollToTop} 
            className="scroll-to-top-btn flex justify-center  items-center">
                <img src={img1} className='w-[40px] h-[40px] rounded-full  ' alt="" />
            {/* <MdOutlineArrowCircleUp className='text-white text-4xl'/> */}
          </button>
        </div>
      )}


      {/* Other Components */}
      <Banner />
      <Feature />
      <Timeline />
      <Testimonial />
      <Video />
    </div>
  );
};

export default Home;
