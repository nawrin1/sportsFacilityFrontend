import { Input } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import img1 from '../../../assets/circle-arrows.png'
import { useCreateAdminMutation } from "../../../redux/features/admin/admin.api";

interface IFormInput {
    name:string;
    email: string;
    password: string;
    phone:string;
    address:string;

}
const CreateAdmin = () => {
    const { control, handleSubmit,formState: { errors }, } = useForm<IFormInput>();
    const [createadmin] = useCreateAdminMutation();
    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        console.log(data);
        const toastId = toast.loading('Creating admin');
        try{
            const adminInformation={
                name:data.name,
                email:data.email,
                password:data.password,
                phone:data.phone,
                role:"admin",
                address:data.phone,


            }
            console.log(adminInformation)
            const res = await createadmin(adminInformation);
            console.log(res)
            
       
            // toast.success('Logged in', { id: toastId, duration: 2000 });
            if(res.data?.success){
               return toast.success(res.data.message, { id: toastId, duration: 2000 });


        
         
                

            }
            if(res.error){
                toast.error(res.error.data.message, { id: toastId, duration: 2000 });

            }
        
         
              

        }catch(err){
            // console.log(err.data.message)
            toast.error(err.data.message, { id: toastId, duration: 2000 });

        }
    };

    return (
        <div className="h-[100vh] flex lg:flex-row md:flex-row flex-col-reverse bg-[#fff4e4] shadow-inner shadow-gray-500 w-full ">
            
            <div className='flex flex-col items-center justify-center  w-full'>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-3 lg:gap-4 md:gap-4'>
                        <div className='flex flex-col'>
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: "This field is required" }}
                                    render={({ field }) => <Input sx={{ width: '230px' }} placeholder='Name..'{...field} />}
                                />
                                 {errors.email && <span className='text-red-600 text-[14px]'>This field is required.</span>}
                            </div>
                            <div className='flex flex-col'>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{ required: "This field is required" }}
                                    render={({ field }) => <Input sx={{ width: '230px' }} placeholder='Email..'{...field} />}
                                />
                                 {errors.email && <span className='text-red-600 text-[14px]'>This field is required.</span>}
                            </div>
                            <div className='flex flex-col'>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => <Input sx={{ width: '230px' }} placeholder='Password..' {...field} />}
                                />
                                {errors.password && <span className='text-red-600 text-[14px]'>This field is required.</span>}
                            </div>
                            <div className='flex flex-col'>
                                <Controller
                                    name="phone"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => <Input sx={{ width: '230px' }} placeholder='Phone Number..' {...field} />}
                                />
                                {errors.password && <span className='text-red-600 text-[14px]'>This field is required.</span>}
                            </div>
                            <div className='flex flex-col'>
                                <Controller
                                    name="address"
                                    control={control}
                                    rules={{ required: "This field is required" }}
                                    render={({ field }) => <Input sx={{ width: '230px' }} placeholder='Address..'{...field} />}
                                />
                                 {errors.email && <span className='text-red-600 text-[14px]'>This field is required.</span>}
                            </div>
                            <button type="submit" className='bg-black text-white px-3 py-1 lg:px-4 lg:py-2 md:px-3 md:py-1 rounded-sm hover:bg-gray-500 font-semibold hover:text-black font-serif'>
                                Create Admin
                            </button>
                        </form>
                    </div>


           
            <div className="  w-full flex flex-row-reverse lg:flex-col md:flex-col  ">
                <div className="lg:h-[30%] md:h-[20%] h-full flex justify-end">
                    <img src={img1} className="lg:h-full md:h-full h-[60%]"alt="" />
                </div>
                <div className="flex items-center lg:justify-center md:justify-center justify-end pr-10 lg:pr-0 md:pr-0  w-full lg:h-[50%] md:h-[50%] 0 ">

                <div className="">
                <h2 className="lg:text-9xl md:text-8xl text-5xl">Create</h2>
                <p className="text-right text-3xl">Admin</p>
                </div>

                </div>

            </div>
            
            
        </div>
    );
};

export default CreateAdmin;