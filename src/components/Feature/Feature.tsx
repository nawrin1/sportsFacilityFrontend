import { Parallax } from "react-scroll-parallax";
import img1 from '../../assets/p1.jpg';
import img2 from '../../assets/p2.jpg';
import img3 from '../../assets/p3.jpg';
import img4 from '../../assets/p4.jpg';
import { Divider } from "@mui/material";
import './Feature.css'

const Feature = () => {
    return (
        <div className="bg-black lg:h-[900px] md:h-[600px] h-[300px] relative -z-20 pb-40">
            <div className='flex w-full h-[900px] relative'>
              
            <div className='w-1/2 lg:h-[900px] md:h-[600px] h-[300px] image-container  flex justify-center items-center relative '>
            <div>
            
            <img src={img1} alt="" className="max-w-full max-h-full p-2 " />
            <div className="overlay"></div>


            </div>
            <div className="absolute lg:top-[20%] lg:left-[20%] md:top-[25%] md:left-[17%] top-[20%]">
              <h1 className="text-white lg:text-4xl md:text-2xl text-[14px] text-center font-serif font-semibold">TAKE A LOOK AT OUR <br /> POPULAR FACILITIES
              </h1>

            </div>
            <div  className="absolute top-[60%] lg:left-[5%] md:left-[6%] md:w-[85%] w-[70%] lg:w-[90%]">
              <p className="text-white lg:text-xl md:text-[12px] text-[10px] text-center font-serif ">"Discover the most sought-after facilities, where every game reaches new heights. Experience unmatched quality and elevate your play at the best venues around."</p>
            </div>
          </div>

              
              <div className='w-1/2 lg:h-[900px] md:h-[600px] h-[300px]  text-white'>
                <div className='h-full flex flex-col '>
                <Parallax speed={5}>
                <div className="w-full lg:h-[300px] md:h-[200px] h-[100px] flex">
  <div className="flex-1 flex flex-col justify-center items-end p-2">
    <h1 className="lg:text-2xl font-semibold md:text-[16px] text-[10px] mb-1 font-serif lg:mb-2 lg:pb-2 ">
      Gymnasium
    </h1>
    <p className="lg:text-[15px] md:text-[12px] text-[8px] font-serif text-right">
      Our gymnasium is equipped with the latest technology and is perfect for
      athletes of all levels.
    </p>
  </div>
  <div className="flex-1 flex items-center rounded-xl">
    <img src={img2} alt="Gymnasium" className="max-w-full max-h-full p-2 rounded-xl" />
  </div>
</div>

                    <Divider sx={{ 
                borderColor: "white", 
                "&::before, &::after": {
                  borderColor: "white",
                },
                color: "white",
                fontSize:'10px'
              }} variant="middle">SPORTEASE</Divider>

                  </Parallax>
                             
                  
                  <Parallax speed={10}>
                    <div className='w-full lg:h-[300px] md:h-[200px] h-[100px]  flex'>
                    <div className="flex-1 flex flex-col justify-center items-end p-2">
    <h1 className="lg:text-2xl font-semibold md:text-[16px] text-[10px] mb-1 font-serif lg:mb-2 lg:pb-2 ">
    Sports Courts
    </h1>
    <p className="lg:text-[15px] md:text-[12px] text-[8px] font-serif text-right">
    Our versatile courts are tailored for a range of sports, including basketball, tennis, and volleyball for competitive play.
    </p>
  </div>
                      <div className="  flex-1 flex items-center ">
                        <div className="rounded-xl">
                        <img src={img3} alt="" className="max-w-full max-h-full p-2 rounded-xl" />
                        </div>


                      </div>
                      
                    </div>
                    <Divider sx={{ 
                borderColor: "white", 
                "&::before, &::after": {
                  borderColor: "white",
                },
                color: "white",
                fontSize:'10px'
              }} variant="middle">SPORTEASE</Divider>
                  </Parallax>

                  
                  <Parallax speed={15}>
                    <div className='w-full lg:h-[300px] md:h-[200px] h-[100px]  flex'>
                    <div className="flex-1 flex flex-col justify-center items-end p-2">
    <h1 className="lg:text-2xl font-semibold md:text-[16px] text-[10px] mb-1 font-serif lg:mb-2 lg:pb-2 ">
    Coaching Programs
    </h1>
    <p className="lg:text-[15px] md:text-[12px] text-[8px] font-serif text-right">
    Our expert trainers provide tailored workout and training plans designed to meet your specific goals, ensuring you achieve peak performance.
    </p>
  </div>
                      <div className="  flex-1 flex items-center  ">
                        <div className="rounded-xl">
                        <img src={img4} alt="" className="max-w-full max-h-full p-2 rounded-xl " />
                        </div>


                      </div>
                      
                    </div>
                  </Parallax>
                  

                </div>
              </div>

            </div>
        </div>
    );
};

export default Feature;


{/* <div className="bg-black h-[800px] relative -z-20">
<div className='flex w-full h-[800px] relative'>
  
  <div className='w-1/2 h-full bg-blue-400 flex justify-center items-center'>
    <h2 className='text-white'>hello</h2>
  </div>
  
  <div className='w-1/2 h-[900px] '>
    <div className='h-full flex flex-col gap-20'>
      <Parallax speed={-10}>
        <div className='w-full h-[300px] bg-red-500'>
          }
        </div>
      </Parallax>
      
      <Parallax speed={-15}>
        <div className='w-full h-[300px] bg-red-800'>
          }
        </div>
      </Parallax>
      
      <Parallax speed={-30}>
        <div className='w-full h-[300px] bg-yellow-300'>
         
        </div>
      </Parallax>
    </div>
  </div>

</div>
</div> */}
