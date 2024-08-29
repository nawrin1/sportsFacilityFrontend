import Banner from "../components/Banner/Banner";
import Feature from "../components/Feature/Feature";

import Testimonial from "../components/Testimonial/Testimonial";
import Timeline from "../components/Timeline/Timeline";
import Video from "../components/Video/Video";


const Home = () => {
    return (
        <div className="max-w-7xl">
            <Banner></Banner>
            <Feature></Feature>
            <Timeline></Timeline>
            <Testimonial></Testimonial>
            <Video></Video>
           


            
        </div>
    );
};

export default Home;