import './Login.css';
import image1 from '../../src/assets/login (1).png';
import image2 from '../../src/assets/password.gif';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from '@mui/material';

interface IFormInput {
    email: string;
    password: string;
}

const Login = () => {
    const { control, handleSubmit,formState: { errors }, } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <div className="bg-black w-full h-screen flex mx-auto items-center justify-center">
            <div className='container z-50'>
                <div className="login-cover z-30 p-7 flex items-center justify-between rounded-sm">
                    <div className='flex justify-items-center justify-center h-[70%] w-full'>
                        <img src={image1} alt="" />
                    </div>
                </div>
                <div className="login-main z-0 rounded-sm flex">
                    <div className='h-full w-full flex items-center justify-center'>
                        <img src={image2} className='h-[70%] w-[50%]' alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-9  w-full'>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-4'>
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
                            <button type="submit" className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-500 hover:text-black font-serif'>
                                LOGIN
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
