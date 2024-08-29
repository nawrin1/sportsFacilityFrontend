import './MyBookingDetails.css'
import img1 from '../../../assets/mybooking.jpg'
import { useParams } from 'react-router-dom';
import { useSingleMyBookingQuery } from '../../../redux/features/user/user.api';
import { BsThreeDots } from 'react-icons/bs';

const MyBookingDetails = () => {
    const { id} = useParams();
    console.log(id)
    const { data,isLoading } = useSingleMyBookingQuery(id);
    console.log(data)
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
  

    return (
<div className="singlebook-container relative lg:h-[100vh] md:h-[50vh] ">
  <div className="singlebookover h-[100%] lg:h-[100%]"></div>
  <div>
    <img src={img1} alt="" />
  </div>


  <div className='absolute first-div top-12 left-6 w-[50%] h-[30%] text-white p-7'>
  <h1 className='lg:text-3xl md:text-3xl text-xl font-serif font-semibold'>Facility Details</h1>
    <h1 className='lg:mt-4 md:mt-4 mt-1 lg:text-[16px] md:text-[16px] text-[12px]'><span className='text-gray-800'>Name:</span> {data?.data.facility.name}</h1>
    <p className=' lg:text-[16px] md:text-[16px] text-[12px]'><span className='text-gray-800'>Location:</span> {data?.data.facility.location}</p>
    <p className=' lg:text-[16px] md:text-[16px] text-[12px]'><span className='text-gray-800'>Price per hour:</span> {data?.data.facility.pricePerHour}</p>

  </div>
  <div className='absolute second-div  top-[60%] right-6 w-[50%] h-[30%] text-right p-7 text-white'>
  <h1 className='lg:text-3xl md:text-3xl text-xl font-serif font-semibold'>Booking Details</h1>
    <h1 className='lg:mt-4 md:mt-4 mt-1 lg:text-[16px] md:text-[16px] text-[12px]'><span className='text-gray-800'>Booked on</span> {data?.data.date}</h1>
    <p className=' lg:text-[16px] md:text-[16px] text-[12px]'> ( {data?.data.startTime}-{data?.data.endTime} )</p>
    <p className=' lg:text-[16px] md:text-[16px] text-[12px]'><span className='text-gray-800'>Price</span> {data?.data.payableAmount}</p>

  </div>
  </div>
    );
};

export default MyBookingDetails;