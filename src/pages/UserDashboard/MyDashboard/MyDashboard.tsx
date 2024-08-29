


import { motion } from "framer-motion";

import video from '../../../assets/1466464-uhd_4096_2160_24fps.mp4'

import img1 from '../../../assets/profile (1).png'
import { BsThreeDots } from "react-icons/bs";
import { useGetUserQuery } from "../../../redux/features/user/user.api";
const MyDashboard = () => {
    const { data,isLoading } = useGetUserQuery(undefined);
    if(isLoading || !data){
      return <div className="min-h-screen flex justify-center items-center">
        <BsThreeDots
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />
      </div>
    }
  
  
    console.log(data);
    return (
        <div>
                    <div className="w-[30px] z-10 h-[30px] absolute top-4 right-[2%]">
            <img src={img1} className="w-[30px] h-[30px]"alt="" />

        </div>
        <div className="video-container  bg-black ">
            <div className="over"></div>
            <video src={video} autoPlay muted loop></video>
            <div className="flex flex-col justify-center absolute top-0 lg:left-[10%] left-[5%] items-center h-screen  text-white">
          <div className="flex flex-col items-center">
          
            <motion.div
              className="text-4xl font-bold mb-4 text-center"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Welcome Back!
            </motion.div>
            
            <motion.div
              className="text-4xl font-bold mb-4 text-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {data?.data.name}
            </motion.div>
            <p className="text-center text-lg text-[#a9a9a9] mb-6">
              We're thrilled to have you back. Explore your dashboard and let us know if you need any assistance.
            </p>
            
          </div>
        </div>
           
           
        </div>
            
        </div>
    );
};

export default MyDashboard;