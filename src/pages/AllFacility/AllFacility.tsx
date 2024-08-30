import { ThreeDots } from "react-loader-spinner";
import { useGetAllFacilityQuery } from "../../redux/features/admin/admin.api";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoFilter } from "react-icons/io5";
import { PiEmptyBold } from "react-icons/pi";
import { LiaDollarSignSolid } from "react-icons/lia";
import { Input } from "@mui/material";
import { useState } from "react";

interface Facility {
  _id: string;
  name: string;
  pricePerHour: number;
  location: string;
  description: string;
  isDeleted: boolean;
  image: string;
}

const AllFacility = () => {
  const [max, setMax] = useState<number>(1000);
  const [min, setMin] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, isLoading, isError } = useGetAllFacilityQuery(undefined, {
    pollingInterval: 1000,
  });

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

  if (isError) {
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

 
  const validMin = isNaN(min) ? 0 : min;
  const validMax = isNaN(max) ? 1000 : max;

 
  const searchRegex = new RegExp(searchTerm, 'i');

//   console.log("Search Term:", searchTerm);
//   console.log("Min Price:", validMin);
//   console.log("Max Price:", validMax);

  
  const filteredFacilities = data.data?.filter((facility: Facility) => {
    const facilityPrice = facility.pricePerHour;
    const matchesSearch = searchRegex.test(facility.name) || searchRegex.test(facility.location);
    const matchesPrice = facilityPrice >= validMin && facilityPrice <= validMax;
    console.log(`Facility: ${facility.name}, Price: ${facilityPrice}, Matches Search: ${matchesSearch}, Matches Price: ${matchesPrice}`);
    return matchesPrice && matchesSearch && !facility.isDeleted;
  }) || [];

  return (
    <div className="pt-10 bg-[#04091e] px-2 min-h-screen">
      <div className="flex justify-end mb-20">
        <Input
          sx={{
            '&:before': {
              borderBottom: '1px solid gray',
            },
            '&:hover:not(.Mui-disabled):before': {
              borderBottom: '1px solid gray',
            },
            '&:after': {
              borderBottom: '1px solid gray',
            },
            color: 'white',
          }}
          onChange={handleSearchChange}
          placeholder="Search by name / location"
        />
      </div>
      <div className="flex justify-center">
        <div className="category flex flex-col mx-auto justify-center">
          <p className="text-white text-4xl text-center">All Facilities</p>
          <p className="text-center text-white">
            "Explore a diverse range of top-tier facilities designed to meet every need and preference."
          </p>
        </div>
      </div>
    
      <div className="flex justify-end w-full">
        <div className="dropdown dropdown-left dropdown-end pt-4">
          <div
            tabIndex={0}
            role="button"
            className="bg-[#d4d4d4] hover:bg-black hover:text-white rounded-lg w-[100px] h-[35px] px-4 py-2 m-1 text-xl flex items-center"
          >
            <p>Filter</p>{" "}
            <div className="text-2xl pl-2">
              <IoFilter />
            </div>
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-lg w-32 p-2 shadow">
            <li>
              <Input
                type="number"
                onChange={(event) => setMin(parseInt(event.target.value, 10) || 0)}
                placeholder="min Price"
              />
            </li>
            <li>
              <Input
                type="number"
                onChange={(event) => setMax(parseInt(event.target.value, 10) || 1000)}
                placeholder="max Price"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center">
        {filteredFacilities.length > 0 ? (
          <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center mx-auto place-items-center mb-20">
            {filteredFacilities.map((facility: Facility, idx: number) => (
              <Link to={`/allfacility/${facility.name}`} key={idx}>
                <div className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
                  <div className="relative group">
                    <img
                      className="h-[350px] w-[250px] object-cover"
                      src={facility.image}
                      alt={facility.name}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h1 className="text-[22px] font-semibold">
                        {facility.name}
                      </h1>
                      <div className="flex items-center space-x-1">
                        <p className="text-xl">{facility.pricePerHour}</p>
                        <LiaDollarSignSolid />
                      </div>
                      <button className="mt-4 bg-[#04091e] text-white px-4 py-2 rounded-md hover:bg-[#333641] transition-colors duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-2xl text-center flex justify-center pb-20 pt-10 text-white">
            <p>No Facility Matched!</p>
            <div className="pt-1 text-red-600">
              <PiEmptyBold />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllFacility;
