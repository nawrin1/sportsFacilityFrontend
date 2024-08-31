import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Aos from 'aos';
import "aos/dist/aos.css";
import { ThreeDots } from "react-loader-spinner";
import { useGetSingleFacilityQuery } from "../../redux/features/admin/admin.api";
import './FacilityDetails.css'
const FacilityDetails = () => {
    const {name}=useParams()
    const {data,isLoading}=useGetSingleFacilityQuery(name)
    // console.log(name)
    console.log(data)


    useEffect(() => {
        Aos.init({
            duration:1500
        });
        Aos.refresh();
      }, []);

      if(isLoading || !data){
        return <div className="min-h-screen flex justify-center items-center">
          <ThreeDots
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
    return (
    
 <div className="flex facility w-full  items-center ">
  

  <div className=" w-[75%]  flex justify-center items-center rounded-md">
    <img src={data?.data[0].image}  data-aos="fade-in" data-aos-duration="3000" className="rounded-md  h-[60%] w-[80%] object-contain " alt="" />
  </div>

  <div className=" w-full  lg:px-10 px-2 z-10">
    <div className="pt-20">
      <h1 className="lg:text-4xl text-2xl md:text-3xl font-serif font-semibold">{data?.data[0].name}</h1>
      
    </div>
    <div className="">
      <h1 className="lg:text-xl text-[15px] md:text-[16px] font-serif font-medium">Price /hr: {data?.data[0].pricePerHour}</h1>
    </div>
    
    <hr className="w-[25%] h-[2px] my-4 bg-gray-500 border-none" />
    <div className="lg:pt-5  lg:text-justify">
      <p className="lg:text-xl text-[14px] md:text-[18px] text-white font-serif font-medium">{data?.data[0].description.slice(0,200)}..</p>
    </div>
    <div className="lg:pt-5  lg:text-justify">
      <p className="lg:text-xl text-[14px] md:text-[18px] text-slate-400 font-serif font-medium">Location: {data?.data[0].location}..</p>
    </div>

    <div className=" pt-[7%] pb-[10%] flex flex-col ">
    
    <button  className="relative shadow-sm shadow-slate-600 rounded-sm lg:w-[150px] lg:h-[40px] w-[100px] h-[20px] overflow-hidden border border-black group-hover:border-white text-black bg-white transition-all duration-500 ease-out group">
  <span className="absolute inset-0 w-full h-full bg-black transform translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
  <Link to={`/bookingfacility/${data?.data[0].name}`}><span className="relative z-10 flex items-center justify-center h-full text-black transition-colors duration-500 ease-out group-hover:text-white lg:text-xl text-[15px]">Book Now</span></Link>
</button>

    </div>



  </div>
</div> 
    );
};

export default FacilityDetails;