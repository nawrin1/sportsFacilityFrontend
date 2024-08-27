import Banner from "../components/Banner/Banner";
import Feature from "../components/Feature/Feature";
import Timeline from "../components/Timeline/Timeline";


const Home = () => {
    return (
        <div className="max-w-7xl">
            <Banner></Banner>
            <Feature></Feature>
            <Timeline></Timeline>

            <div className="bg-black h-[800px] w-full">
                <h2>hi</h2>

            </div>
            
        </div>
    );
};

export default Home;