
// import {loadStripe} from '@stripe/stripe-js';
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from './CheckoutForm';
// import { useAppSelector } from '../../redux/hook';
// import { useBookingInfo } from '../../redux/features/booking/bookingSlice';
// import { Divider } from "@mui/material";


// const Payment = () => {
//     const bookingInfo=useAppSelector(useBookingInfo)
//     const stripePromise=loadStripe(import.meta.env.VITE_stripe)
//     console.log(bookingInfo)

  
   
//     return (



//         <div className='flex w-full bg-black text-white justify-center items-center'>
            
//     <div className="flex flex-col lg:flex-row justify-center items-center p-4 lg:p-8 w-full">
//       {/* Booking Details  */}
//       <div className="w-full p-4 lg:p-6 rounded-md shadow-md mb-6 lg:mb-0">
//         <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
//         {bookingInfo.facilityImage && (
//           <img
//             src={bookingInfo.facilityImage}
//             alt={bookingInfo.facilityName}
//             className="w-[70%] h-52 object-cover rounded-md mb-4"
//           />
//         )}
//         <div className="space-y-1">
//           <p className="text-[18px] font-medium">
//             <span className="font-semibold">Booked By:</span> {bookingInfo.UserName}
//           </p>
//           <p className="text-lg font-medium">
//             <span className="font-semibold">Facility:</span> {bookingInfo.facilityName}
//           </p>
//           <p className="text-lg font-medium">
//             <span className="font-semibold">Date:</span> {bookingInfo.date}
//           </p>
//           <p className="text-lg font-medium">
//             <span className="font-semibold">Time:</span> {bookingInfo.startTime} - {bookingInfo.endTime}
//           </p>
//           <p className="text-lg font-medium">
//             <span className="font-semibold">Payable Amount:</span> ${bookingInfo.price}
//           </p>
//         </div>
//       </div>



//         </div>
//         {/* payment form */}
//         <Divider 
//   orientation="vertical" 
//   sx={{ 
//     borderColor: "white", 
//     "&::before, &::after": {
//       borderColor: "white",
//     },
//     color: "white",
//     fontSize: '10px',
//     height: '100px',  
//     marginX: 2 
//   }} 
//   variant="middle"
// >
//   SPORTEASE
// </Divider>

       
//         <div className='min-h-screen bg-black flex flex-col justify-center items-center gap-8 w-full'>
//              <h2 className='text-white font-serif text-center font-semibold '>Payment Process:</h2>
//         <div className='w-[60%] bg-white rounded-lg p-4'>
       
//                     <Elements stripe={stripePromise}>
//                         <CheckoutForm></CheckoutForm>
//                     </Elements>
//         </div>
//         </div>
//         </div>
//     );
// };

// export default Payment;



import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
import { useAppSelector } from '../../redux/hook';
import { useBookingInfo } from '../../redux/features/booking/bookingSlice';
import { Divider } from "@mui/material";
import './Payment.css'

const Payment = () => {
    const bookingInfo = useAppSelector(useBookingInfo);
    const stripePromise = loadStripe(import.meta.env.VITE_stripe);
  
    return (
        <div className="flex flex-col lg:flex-row bg-black text-white min-h-screen justify-center items-center p-4">
            {/* Booking Details */}
            <div className=" w-full   p-4 lg:p-8 animate-fade-in-up">
                <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
                {bookingInfo.facilityImage && (
                    <img
                        src={bookingInfo.facilityImage}
                        alt={bookingInfo.facilityName}
                        className="w-full lg:w-[70%] h-52 object-cover rounded-md mb-4 shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out"
                    />
                )}
                <div className="space-y-2 text-center lg:text-left">
                    <p className="text-lg font-medium">
                        <span className="font-semibold">Booked By:</span> {bookingInfo.UserName}
                    </p>
                    <p className="text-lg font-medium">
                        <span className="font-semibold">Facility:</span> {bookingInfo.facilityName}
                    </p>
                    <p className="text-lg font-medium">
                        <span className="font-semibold">Date:</span> {bookingInfo.date}
                    </p>
                    <p className="text-lg font-medium">
                        <span className="font-semibold">Time:</span> {bookingInfo.startTime} - {bookingInfo.endTime}
                    </p>
                    <p className="text-lg font-medium">
                        <span className="font-semibold">Payable Amount:</span> ${bookingInfo.price}
                    </p>
                </div>
            </div>

            {/* Divider */}
            <Divider
                orientation="vertical"
                sx={{
                    borderColor: "white",
                    "&::before, &::after": {
                        borderColor: "white",
                    },
                    color: "white",
                    fontSize: '10px',
                    height: '150px', // Adjusted height for better appearance
                    marginX: 2
                }}
                variant="middle"
            >
                SPORTEASE
            </Divider>

            {/* Payment Form */}
            <div className="flex flex-col justify-center items-center w-full  p-4 lg:p-8 animate-fade-in-up">
                <h2 className="text-white font-serif text-center font-semibold mb-4">Payment Process</h2>
                <div className="w-full lg:w-[80%] bg-white rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
