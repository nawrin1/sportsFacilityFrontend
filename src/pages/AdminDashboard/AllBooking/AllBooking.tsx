import { ThreeDots } from 'react-loader-spinner';
import { useGetMyBookingQuery } from "../../../redux/features/user/user.api";
import { Box, Fade, Input } from "@mui/material";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useGetAllBookingsQuery } from '../../../redux/features/admin/admin.api';


const AllBooking = () => {
    const { data,isLoading } = useGetAllBookingsQuery(undefined, {
        pollingInterval: 1000,
      });
  
    if(isLoading || !data){
      return <div className="min-h-screen flex justify-center items-center">
        <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
/>
</div>
    }


  
    console.log(data);
    return (
        <div className="flex flex-col items-center  lg:px-2 md:px-2 bg-[#04091e] min-h-screen pt-20 pb-20">
        <div className='flex flex-col lg:flex-row   lg:w-[80%] md:w-[80%] items-start justify-end pb-4 pt-4'>
         
        </div>
        <div className="overflow-x-auto lg:w-[80%] md:w-[80%] w-[95%]">
          <table className="table">
            <thead className="bg-[#616161] text-white">
              <tr>
               
                <th>User</th>
                <th>Facility</th>
                <th>Date</th>
                <th>Amount</th>
                
              </tr>
            </thead>
            <tbody className="text-white">
              
            {data?.data
  .filter((each) => each.isBooked !== "canceled")
  .map((each, idx:number) => (
    <tr key={idx} className="border-b-1 border-[#565656] animate-fade-in transition-all duration-300 ease-in-out hover:scale-95 hover:bg-[#2d2d2d]  ">
      <td>
        <div className="font-bold">{each.user.name}</div>
      </td>
      <td>
        <div className="font-bold">{each.facility.name}</div>
      </td>
      <td>
        <div className="font-bold">{each.date}</div>
      </td>
      <td>
        <div className="font-bold">{each.payableAmount}</div>
      </td>



    </tr>
  ))}

            </tbody>
          </table>
        </div>

      </div>
    );
};

export default AllBooking;