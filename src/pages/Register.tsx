

import './Register.css'
import image1 from '../../src/assets/signup.png';
import image2 from '../../src/assets/user-page.gif';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from '@mui/material';

import { toast } from 'sonner';
import { useRegisterMutation } from '../redux/features/auth/authApi';

import { NavLink, useNavigate } from 'react-router-dom';

interface IFormInput {
    name:string;
    email: string;
    password: string;
    phone:string;
    address:string;

}

const Register = () => {
    
    const [register] = useRegisterMutation();
    const { control, handleSubmit,formState: { errors }, } = useForm<IFormInput>();
    const navigate=useNavigate()
    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        console.log(data);
        const toastId = toast.loading('Creating Account');
        try{
            const userInformation={
                name:data.name,
                email:data.email,
                password:data.password,
                phone:data.phone,
                role:"user",
                address:data.phone,


            }
            console.log(userInformation)
            const res = await register(userInformation);
            console.log(res)
            if(res.data.success){
                toast.success(res.data.message, { id: toastId, duration: 2000 });


        
         
                navigate(`/login`)

            }
            else{
                console.log("entered",res?.error?.data?.message)
                toast.error(res?.error?.data?.message , { id: toastId, duration: 2000 });

            }
           


        }catch(err){
            
           
            toast.error("something went wrong", { id: toastId, duration: 2000 });

        }
    };

    return (
        <div className="bg-black w-full h-screen flex flex-col mx-auto items-center justify-center gap-6 p-2">
            <div className='container z-50 lg:w-[50%] lg:h-[70%]  md:w-[50%] md:h-[75%] w-[75%] h-[85%]'>
                <div className="login-cover z-30 p-7 flex items-center justify-between rounded-sm">
                    <div className='flex justify-items-center justify-center h-[70%] w-full'>
                        <img src={image1} alt="" />
                    </div>
                </div>
                <div className="login-main z-0 rounded-sm flex">
                   
                    <div className='lg:h-full lg:w-full h-0 w-0 items-center justify-center flex  '>
                            <img src={image2} className='lg:h-[70%] lg:w-[80%]  w-0 h-0 ' alt="" />
                    </div>
                  



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
                            <button type="submit" className='bg-black text-white px-3 py-1 lg:px-4 lg:py-2 md:px-3 md:py-1 rounded-md hover:bg-gray-500 font-semibold hover:text-black font-serif'>
                                SIGN UP
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className=''>
                <p className='font-serif text-[14px] font-semibold text-[#f2ede6]'>Already have an account? <NavLink to='/login'><span className='text-gray-500 font-semibold'>Login Now</span></NavLink></p>

            </div>
        </div>
    );
};

export default Register;




