import video from '../../assets/6340278-uhd_3840_2160_25fps.mp4';
import './Video.css';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Video = () => {
    return (
        <div className="video-container pt-20 bg-black">
            <div className="over"></div>
            <video src={video} autoPlay muted loop></video>
            <div className='absolute font-serif font-semibold text-4xl text-white top-[45%] left-[25%]'>
            <ScrollAnimation animateIn='fadeIn'>
            
            
           <h1>Your Gateway to Top-Tier Sports Facilities. </h1>
            </ScrollAnimation>
            
                
                
            </div>
            <div className='absolute font-serif font-semibold text-3xl text-white top-[60%] left-[43%]'>
            <ScrollAnimation animateIn='fadeIn' delay={800}>
            
            
            <h1>Book, Play, Excel </h1>
             </ScrollAnimation>
            </div>
        </div>
    );
};

export default Video;
