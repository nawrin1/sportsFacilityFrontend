import  { useState } from 'react';
import { ThreeDots } from "react-loader-spinner";

import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import Swal from "sweetalert2";
import {  Box, Fade,  Input,  Modal} from '@mui/material';
import { toast } from 'sonner';
import { useAddFacilityMutation, useDeleteFacilityMutation, useGetAllFacilityQuery, useUpdateFacilityMutation } from '../../../redux/features/admin/admin.api';

// import { FaLeaf } from 'react-icons/fa';

interface Facility {
  _id: string;
  name: string;
  
  pricePerHour: number;
  location: string;
  description: string;
  isDeleted:boolean;
  image: string;
}



type FormElements = HTMLFormElement & {
  elements: {
    namedItem(name: string): HTMLInputElement | HTMLSelectElement | null;
  };
};

const style = {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 2,
  p: 2,
  fontFamily: 'Cormorant Infant, sans-serif'
};

const FacilityManagement = () => {
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState({
    _id:'',
    name: '',
    description: '',
    pricePerHour: 0 ,
   
    location: '',
    
    image: ''
  });
  const { data, isLoading, isError } = useGetAllFacilityQuery({}, {
    pollingInterval: 1000,
  });
  const [deleteFacility] = useDeleteFacilityMutation();
  const [updateFacility] = useUpdateFacilityMutation();
  const [addFacility] = useAddFacilityMutation();
 
// console.log(data)
  const handleOpen = (facility:Facility) => {
    setSelectedFacility(facility);
    setOpen(true);
  };
  
  const handleAddOpen = () => {
    setAddOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFacility({
        _id:'',
        name: '',
        description: '',
        pricePerHour: 0 ,
       
        location: '',
        
        image: ''
      
    });
  };
  
  const handleAddClose = () => {
    setAddOpen(false);
  };

  


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as FormElements;

    const updatedFacility = {
        name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
        description: (form.elements.namedItem("description") as HTMLInputElement)?.value,
        pricePerHour: parseInt((form.elements.namedItem("pricePerHour") as HTMLInputElement)?.value),
         location: (form.elements.namedItem("location") as HTMLInputElement)?.value,
        image: (form.elements.namedItem("image") as HTMLInputElement)?.value,
    };
    toast.success('Facility Updated!', {
        style: {
          fontFamily: 'Cormorant Infant, sans-serif', 
          color: 'black',
          fontSize: '20px'
        },
      });

    const updatedData = {
      id: selectedFacility._id,
      options: updatedFacility
    };
    updateFacility(updatedData);
    handleClose();
  };

  const handleAddSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as FormElements;

  const newFacility = {
    name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
    description: (form.elements.namedItem("description") as HTMLInputElement)?.value,
    pricePerHour: parseInt((form.elements.namedItem("pricePerHour") as HTMLInputElement)?.value),
     location: (form.elements.namedItem("location") as HTMLInputElement)?.value,
    image: (form.elements.namedItem("image") as HTMLInputElement)?.value,
  };


    console.log(newFacility)
    try {
        const res = await addFacility(newFacility);
        if (res.success) {
          toast.success('Facility Added!', {
            style: {
              fontFamily: 'Cormorant Infant, sans-serif',
              color: 'black',
              fontSize: '20px',
            },
          });
        } else if (res.error) {
            console.log(res.error)
          toast.error(res.error.data.message, {
            style: {
              fontFamily: 'Cormorant Infant, sans-serif',
              color: 'black',
              fontSize: '20px',
            },
          });
        }
        else if (res?.status==400) {
            console.log(res.error)
          toast.error(res?.data?.message as string, {
            style: {
              fontFamily: 'Cormorant Infant, sans-serif',
              color: 'black',
              fontSize: '20px',
            },
          });
        }
      } catch (error) {
        
        toast.error('An unexpected error occurred.', {
          style: {
            fontFamily: 'Cormorant Infant, sans-serif',
            color: 'black',
            fontSize: '20px',
          },
        });
        console.error('Error adding facility:', error);
      }
      
    
    handleAddClose();
  };

  const handleDelete = (_id: string) => {
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#04091e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      backdrop: 'swal2-backdrop-show'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFacility(_id)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Facility has been deleted.",
              icon: "success"
            });
          })
          .catch((error) => {
            console.error("Failed to delete the facility:", error);
          });
      }
    });
  };

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

  if (isError || !data) {
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

  return (
    <div className="flex flex-col items-center text-white lg:px-2 md:px-2 bg-[#04091e] min-h-screen pt-20 pb-20">
      <div className='flex flex-col lg:flex-row   lg:w-[80%] md:w-[80%] items-start justify-end pb-4 pt-4'>
        <button onClick={handleAddOpen} type="submit" className="relative shadow-sm shadow-slate-600 rounded-sm w-[150px] h-[35px] overflow-hidden border border-black group-hover:border-white text-black bg-white transition-all duration-500 ease-out group">
          <span className="absolute inset-0 w-full h-full bg-black transform translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
          <span className="relative z-10 flex items-center justify-center h-full text-black transition-colors duration-500 ease-out group-hover:text-white lg:text-xl text-[15px]">Add Facility</span>
        </button>
      </div>
      <div className="overflow-x-auto lg:w-[80%] md:w-[80%] w-[95%]">
        <table className="table">
          <thead className="bg-[#616161] text-white">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price/hr</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
          {data?.data
  .filter((each: Facility) => !each.isDeleted) 
  .map((each: Facility, idx: number) => (
    <tr key={idx} className="border-b-1 border-gray-600">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-10 w-10">
              <img src={each.image} alt={each.name} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{each.name}</div>
      </td>
      <td>
        <div className="font-bold">{each.description.slice(0, 52)}..</div>
      </td>
      <td>
        <div className="font-bold">{each.pricePerHour}</div>
      </td>
      <td>
        <div className="font-bold flex text-xl lg:gap-x-1 md:gap-x-1">
          <div className="hover:text-red-600" onClick={() => handleDelete(each._id)}>
            <RiDeleteBin2Fill />
          </div>
          <div className="hover:text-[#bdc468]" onClick={() => handleOpen(each)}>
            <MdOutlineDriveFileRenameOutline />
          </div>
        </div>
        {selectedFacility && (
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            // BackdropProps={{ invisible: true }}
            BackdropProps={{
                sx: {
                  backgroundColor: 'rgba(0, 0, 0, 0.4)', 
                },
              }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <form onSubmit={handleSubmit}>
                  <div className='flex'>
                    <div className='flex'>
                      <p className='font-extrabold pt-3 pr-2'>Name:</p>
                      <Input
                        name="name"
                        required
                        className='w-full mb-2'
                        defaultValue={selectedFacility.name}
                        sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }}
                      />
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex'>
                      <p className='font-extrabold pt-2 pr-2'>Description:</p>
                      <Input
                        required
                        name="description"
                        className='w-full mb-2'
                        defaultValue={selectedFacility.description}
                        sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }}
                      />
                    </div>
                    <div className='flex'>
                      <p className='font-extrabold pt-2 pr-2'>PricePerHour:</p>
                      <Input
                        required
                        name="pricePerHour"
                        className='w-full mb-2'
                        defaultValue={selectedFacility.pricePerHour}
                        sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }}
                      />
                    </div>
                    <div className='flex'>
                      <p className='font-extrabold pt-2 pr-2'>Location:</p>
                      <Input
                        required
                        name="location"
                        className='w-full mb-2'
                        defaultValue={selectedFacility.location}
                        sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }}
                      />
                    </div>
                    <div className='flex'>
                      <p className='font-extrabold pt-2 pr-2'>Image:</p>
                      <Input
                        required
                        name="image"
                        className='w-full mb-2'
                        defaultValue={selectedFacility.image}
                        sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }}
                      />
                    </div>
                    <button
                      type="submit"
                      className='bg-[#04091e] text-white px-4 py-2 rounded-md hover:bg-[#2a2a2b]'
                    >
                      Update Facility
                    </button>
                  </div>
                </form>
              </Box>
            </Fade>
          </Modal>
        )}
      </td>
    </tr>
  ))}

          </tbody>
        </table>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={addOpen}
        onClose={handleAddClose}
        closeAfterTransition
        // BackdropProps={{ invisible: true }}
        BackdropProps={{
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.4)', 
            },
          }}
      >
        <Fade in={addOpen}>
          <Box sx={style}>
            <form onSubmit={handleAddSubmit}>
              <div className='flex flex-col'>
                <div className='flex'>
                  <p className='font-extrabold pt-3 pr-2'>Title:</p>
                  <Input name="name" required className='w-full mb-2' sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }} />
                </div>

                <div className='flex'>
                  <p className='font-extrabold pt-2 pr-2'>Description:</p>
                  <Input name="description" required className='w-full mb-2' sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }} />
                </div>
                <div className='flex'>
                  <p className='font-extrabold pt-2 pr-2'>PricePerHour:</p>
                  <Input name="pricePerHour" required className='w-full mb-2' sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }} />
                </div>
                <div className='flex'>
                  <p className='font-extrabold pt-2 pr-2'>Location:</p>
                  <Input name="location" required className='w-full mb-2' sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }} />
                </div>
                
                <div className='flex'>
                  <p className='font-extrabold pt-2 pr-2'>Image:</p>
                  <Input name="image"required  className='w-full mb-2' sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }} />
                </div>
                <button type="submit" className='bg-[#04091e] text-white px-4 py-2 rounded-md'>Add Facility</button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default FacilityManagement;
