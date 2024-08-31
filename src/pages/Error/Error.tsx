import { Link } from 'react-router-dom';
import img1 from '../../assets/not-found.gif'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

const Error = () => {
    return (
        <div className=' flex flex-col justify-center items-center bg-white min-h-screen'>
            <div className=' flex justify-center'>
                <img src={img1} className='lg:w-[60%] h-[40%]  md:w-[50%] w-[40%]' alt="" />
            </div>
            <div className=' flex justify-between lg:w-[20%] w-[30%] md:w-[25%]'>
                <Link to='/'>                
                <div className='lg:text-xl md:text-xl text-[14px] font-serif font-semibold flex text-blue-500'>
                <IoMdArrowDropleft className='mt-1'/>
                    Home
                   

                </div> 
                </Link>
                <Link to='/login'> 
                <div className='lg:text-xl md:text-xl text-[14px] font-serif font-semibold flex text-green-400'>
                    Login
                    <IoMdArrowDropright className='mt-1'/>

                </div>
                </Link>
            </div>
            
            
        </div>
    );
};

export default Error;