


import { motion } from "framer-motion";
import video from '../../../assets/admin.mp4'


import img1 from '../../../assets/setting.png'
import { BsThreeDots } from "react-icons/bs";
import { useGetUserQuery } from "../../../redux/features/user/user.api";
import './MyAdminDashboard.css'

const MyAdminDashboard = () => {
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
              className="lg:text-6xl text-3xl md:text-5xl font-bold mb-4 text-center border-text"
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
            "Empower your management. Access comprehensive insights, manage users, monitor activities with ease."
            </p>
            
          </div>
        </div>
           
           
        </div>
            
        </div>
    );
};

export default MyAdminDashboard;