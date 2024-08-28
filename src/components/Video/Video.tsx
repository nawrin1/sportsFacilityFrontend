import video from '../../assets/6340278-uhd_3840_2160_25fps.mp4';
import './Video.css';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Video = () => {
    return (
        <div className="video-container  bg-black ">
            <div className="over"></div>
            <video src={video} autoPlay muted loop></video>
            <div className='text-center px-2 absolute font-serif font-semibold lg:text-4xl  md:text-4xl text-white text-2xl md:top-[30%] md:left-[3%] lg:top-[43%] lg:left-[25%] top-[30%] left-[2%]'>
            <ScrollAnimation animateIn='fadeIn'>
            
            
           <h1>Your Gateway to Top-Tier Sports Facilities. </h1>
            </ScrollAnimation>
            
                
                
            </div>
            <div className='absolute font-serif font-semibold text-xl lg:text-3xl md:text-3xl text-white md:top-[50%] md:left-[35%] lg:top-[60%] lg:left-[43%] top-[50%] left-[31%]'>
            <ScrollAnimation animateIn='fadeIn' delay={800}>
            
            
            <h1>Book, Play, Excel </h1>
             </ScrollAnimation>
            </div>
        </div>
    );
};

export default Video;
