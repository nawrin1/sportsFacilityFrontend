
import './Banner.css';
import img1 from '../../assets/SPORTS EASE (2).png';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";




const Banner = () => {
  useEffect(() => {
    Aos.init({
        duration:1500
    });
    Aos.refresh();
  }, []);

  
  return (
    <div className="ban bg-black h-[80%] pb-40 flex justify-center items-center relative z-10  ">
      <img src={img1} alt="" />

<div className='absolute lg:top-[20%] lg:left-[32%] left-[20%] top-[10%] md:left-[24%]'>
      <p className='font-serif lg:text-6xl text-3xl md:text-5xl text-white font-semibold ' data-aos="fade-up" data-aos-duration="3000">S P O R T <span> E A S E</span></p>
    </div>


<div className='absolute lg:top-[32%] lg:left-[38%] top-[20%] left-[31%] md:left-[32%]'>

<p className='font-serif lg:text-3xl text-[14px] md:text-2xl text-white font-semibold font-serif text-center lg:leading-10 '>Unleash Your Potential <br />Elevate Your Game</p>

</div>


    <div className='absolute lg:top-[40%] top-[30%] md:top-[30%]   w-full h-[20%] text-center  flex justify-center items-center '>
      <div className='book cursor-pointer w-[18%] h-[20%] lg:ml-[37px] md:mr-5 mr-3 border-2 border-white 0 text-white lg:pt-1 md:text-[14px] text-[8px] lg:left-[43%] lg:top-[45%] md:left-[38%] md:top-[35%] left-[40%] top-[30%]'>
        BOOK NOW

      </div>
      
    </div>





     
      
      
    </div>
  );
};

export default Banner;



