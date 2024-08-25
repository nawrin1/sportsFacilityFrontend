import './Login.css';
import image1 from '../../src/assets/login (1).png';
import image2 from '../../src/assets/password.gif';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { toast } from 'sonner';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { verifyToken } from '../utils/verifyToken';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { NavLink, useNavigate } from 'react-router-dom';

interface IFormInput {
    email: string;
    password: string;
}

const Login = () => {
    const dispatch=useAppDispatch()
    const [login] = useLoginMutation();
    const { control, handleSubmit,formState: { errors }, } = useForm<IFormInput>();
    const navigate=useNavigate()
    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        console.log(data);
        const toastId = toast.loading('Logging in');
        try{
            const userInfo={
                email:data.email,
                password:data.password

            }
            const res = await login(userInfo).unwrap();
            console.log(res.token)

            const user = verifyToken(res.token) as TUser;

            console.log(user)
            dispatch(setUser({ user: user, token: res.token }));
            toast.success('Logged in', { id: toastId, duration: 2000 });
        
         
              navigate(`/`)

        }catch(err){
            toast.error(err.message, { id: toastId, duration: 2000 });

        }
    };

    return (
        <div className="bg-black w-full h-screen flex flex-col mx-auto items-center justify-center gap-6">
            <div className='container z-50 lg:w-[50%] lg:h-[60%]  md:w-[50%] md:h-[60%] w-[75%] h-[70%]'>
                <div className="login-cover z-30 p-7 flex items-center justify-between rounded-sm">
                    <div className='flex justify-items-center justify-center h-[70%] w-full'>
                        <img src={image1} alt="" />
                    </div>
                </div>
                <div className="login-main z-0 rounded-sm flex">
                   
                    <div className='lg:h-full lg:w-full h-0 w-0 items-center justify-center flex  '>
                            <img src={image2} className='lg:h-[70%] lg:w-[60%]  w-0 h-0 ' alt="" />
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
            <div className=''>
                <p className='font-serif text-[14px] font-semibold text-[#f2ede6]'>Don't have an account? <NavLink to='/register'><span className='text-gray-500 font-semibold'>Register Now</span></NavLink></p>

            </div>
        </div>
    );
};

export default Login;
