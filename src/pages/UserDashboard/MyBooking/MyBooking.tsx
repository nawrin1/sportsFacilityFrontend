import { BsThreeDots } from "react-icons/bs";
import { useDeleteMyBookingMutation, useGetMyBookingQuery } from "../../../redux/features/user/user.api";
import { Box, Fade, Input } from "@mui/material";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyBooking = () => {
    const { data,isLoading } = useGetMyBookingQuery(undefined);
    const [deleteMyBooking]=useDeleteMyBookingMutation()
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

    const handleDelete = (_id: string) => {
        console.log(_id)
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#2b3c17",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
          backdrop: 'swal2-backdrop-show'
        }).then((result) => {
          if (result.isConfirmed) {
            deleteMyBooking(_id)
              .then(() => {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              })
              .catch((error) => {
                console.error("Failed to delete the product:", error);
              });
          }
        });
      };
  
  
    console.log(data);
    return (
        <div className="flex flex-col items-center  lg:px-2 md:px-2 bg-[#04091e] min-h-screen pt-20 pb-20">
        <div className='flex flex-col lg:flex-row   lg:w-[80%] md:w-[80%] items-start justify-end pb-4 pt-4'>
         
        </div>
        <div className="overflow-x-auto lg:w-[80%] md:w-[80%] w-[95%]">
          <table className="table">
            <thead className="bg-[#616161] text-white">
              <tr>
               
                <th>Title</th>
                <th>Price</th>
                <th>StartTime</th>
                <th>Details</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody className="text-white">
              
            {data?.data
  .filter((each) => each.isBooked !== "canceled") // Adjust the filter condition if needed
  .map((each, idx) => (
    <tr key={idx} className="border-b-1 border-[#565656]">
      <td>
        <div className="font-bold">{each.facility.name}</div>
      </td>
      <td>
        <div className="font-bold">{each.payableAmount}</div>
      </td>
      <td>
        <div className="font-bold">{each.startTime}</div>
      </td>
      <td>
        <div className="font-bold text-xl">
<Link to={`/userdashboard/mybooking/${each._id}`}>
<div
            className="hover:text-blue-900"
            
          >
            <TbListDetails />
          </div></Link>
        </div>
      </td>
      <td>
        <div className="font-bold text-xl">
          <div
            className="hover:text-red-600"
            onClick={() => handleDelete(each._id)}
          >
            <RiDeleteBin2Fill />
          </div>
        </div>
      </td>
    </tr>
  ))}

            </tbody>
          </table>
        </div>

      </div>
    );
};

export default MyBooking;