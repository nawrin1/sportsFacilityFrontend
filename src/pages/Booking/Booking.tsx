import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from "react-router-dom";
import { useGetSingleFacilityQuery } from "../../redux/features/admin/admin.api";
import { ThreeDots } from "react-loader-spinner";
import {
  TQueryParam,
  useCheckSlotsQuery,
  useGetUserQuery,
  useUserBookingMutation,
} from "../../redux/features/user/user.api";
import { Divider, Input } from "@mui/material";
import { toast } from "sonner";
type TParam = { date: string; facility: string };
type Tslots = { startTime: string; endTime: string };

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    startTime: "",
    endTime: "",
  });
  const [params, setParams] = useState<TParam | undefined>(undefined);

  const { facility } = useParams();

  const { data, isLoading } = useGetSingleFacilityQuery(facility);
  const {
    data: slots,
    isLoading: slotLoading,
    refetch,
  } = useCheckSlotsQuery(params, {
    skip: !params,
  });
  const [userBooking] = useUserBookingMutation();

  //   const { data:user } = useGetUserQuery(undefined);

  if (isLoading || !data) {
    return (
      <div className="min-h-screen flex justify-center items-center">
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
    );
  }
  //   if (slotLoading || !slots) {
  //     return (
  //       <div className="min-h-screen flex justify-center items-center">
  //         <ThreeDots
  //           visible={true}
  //           height="80"
  //           width="80"
  //           color="#4fa94d"
  //           radius="9"
  //           ariaLabel="three-dots-loading"
  //           wrapperStyle={{}}
  //           wrapperClass=""
  //         />
  //       </div>
  //     );
  //   }

  const handleAvailabilityCheck = () => {
    const paramData: TParam = {
      date: selectedDate,
      facility: data?.data[0]._id,
    };
    setParams(paramData);
    refetch();
    setAvailableSlots(slots);
    setClicked(true);

    console.log(selectedDate);
  };

  const handleBooking = async (event) => {
    const toastId = toast.loading("Booking creating..");

    event.preventDefault();
    const BookingDetails = {
      startTime: bookingDetails.startTime,
      endTime: bookingDetails.endTime,
      facility: data?.data[0]._id,
      date: selectedDate,
    };

    console.log("Booking Details:", BookingDetails);
    const res = await userBooking(BookingDetails);
    console.log(res);
    if (res.error) {
      toast.error(res.error.data.errorMessages[0]?.message, {
        id: toastId,
        duration: 2000,
      });
    }
    if (res.data.success) {
      toast.success("Booking Created", { id: toastId, duration: 2000 });
    }
  };

  const formatDate = (date) => {
    if (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      setSelectedDate(formattedDate);

      console.log(selectedDate);
      const paramData: TParam = {
        date: selectedDate,
        facility: data?.data[0]._id,
      };
      setParams(paramData);
      console.log(params);
      console.log(slots, "slots");
    } else {
      setSelectedDate("");
    }
  };

  //    console.log(params)
  //    console.log(slots)
  // console.log(user)
  return (
    <div className="min-h-screen bg-black p-4 flex flex-col items-center pb-10">
      {/* Facility Overview */}
      <div className="text-white shadow-md rounded-md p-6 mb-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">{data?.data[0].name}</h2>
        <p className="text-gray-300 ">{data?.data[0].description}</p>
        <p className="text-gray-300 ">
          Price Per Hour: {data?.data[0].pricePerHour}$
        </p>
      </div>

      <div className="flex lg:flex-row-reverse flex-col gap-5">
        {/* Availability Checker */}
        <div className=" bg-black text-white  shadow-md rounded-md p-6 mb-8 w-full max-w-4xl">
          {/* <h3 className="text-xl font-semibold mb-4">Check Availability</h3> */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <DatePicker
              selected={selectedDate ? new Date(selectedDate) : null}
              onChange={(date) => formatDate(date)}
              className="border border-gray-300 p-2 rounded-md mb-4 md:mb-0 md:w-auto text-black"
              placeholderText="Select a date"
            />
            <button
              onClick={handleAvailabilityCheck}
              className={`px-4 py-2 rounded-sm  transition ${
                selectedDate
                  ? "bg-white text-black hover:bg-[#52545b]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!selectedDate}
            >
              Check Availability
            </button>
          </div>

          {clicked && slots?.data?.length > 0 && (
            <div className="mt-4 ">
              <h4 className="text-lg font-medium">Available Time Slots:</h4>
              <ul className="list-disc pl-5">
              {slots?.data?.map((slot, index) => (
            <li key={index} className="text-gray-300">
              {slot.startTime} - {slot.endTime}
              <Divider />
            </li>
          ))}

              </ul>
            </div>
          )}

          {/*  loading state */}
          {clicked && slotLoading && (
            <div className="mt-4">
              <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
              />
            </div>
          )}

          {/*  if no slots available */}
          {clicked && !slotLoading && slots?.data?.length === 0 && (
            <div className="mt-4 text-gray-200">
              No available slots for the selected date.
            </div>
          )}
        </div>

        {/* Booking Form */}
        <div className="bg-white shadow-md rounded-sm p-6 mt-[67px] lg:w-[80%] max-w-4xl h-[50%]">
          <h3 className="text-xl font-semibold mb-4">Booking Form</h3>
          {/* <form onSubmit={handleBooking} className="flex flex-col gap-4"> */}
          <form className="flex flex-col gap-4">
            <div>
              <Input
                placeholder="Booking Date"
                defaultValue={selectedDate}
                value={selectedDate}
              ></Input>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Start Time (e.g., 10:00 AM)"
                value={bookingDetails.startTime}
                onChange={(e) =>
                  setBookingDetails({
                    ...bookingDetails,
                    startTime: e.target.value,
                  })
                }
                className="border border-gray-300 p-2 rounded-md flex-1"
                required
              />
              <input
                type="text"
                placeholder="End Time (e.g., 11:00 AM)"
                value={bookingDetails.endTime}
                onChange={(e) =>
                  setBookingDetails({
                    ...bookingDetails,
                    endTime: e.target.value,
                  })
                }
                className="border border-gray-300 p-2 rounded-md flex-1"
                required
              />
            </div>
            <div className="flex w-full gap-5">
              <div className="w-full ">
                <Input
                  placeholder="Name.."
                  sx={{ width: "100%" }}
                  required
                ></Input>
              </div>
              <div className="w-full ">
                <Input
                  placeholder="Email.."
                  sx={{ width: "100%" }}
                  required
                ></Input>
              </div>
            </div>
            {/* <button
            type="submit"
            className="bg-[#04091e] text-white px-4 py-2 rounded-md hover:bg-[#40434e] transition"
          >
            Book Now
          </button> */}
            <Link to="/payment">
              <button className="bg-[#04091e] text-white px-4 py-2 rounded-md hover:bg-[#40434e] transition">
                Book Now
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
