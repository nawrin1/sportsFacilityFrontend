import { Parallax } from "react-scroll-parallax";
import img1 from '../../assets/p1.jpg';
import img2 from '../../assets/p2.jpg';
import img3 from '../../assets/p3.jpg';
import img4 from '../../assets/p4.jpg';

const Feature = () => {
    return (
        <div className="bg-black lg:h-[900px] md:h-[600px] h-[300px] relative -z-20">
            <div className='flex w-full h-[900px] relative'>
              
            <div className='w-1/2 lg:h-[900px] md:h-[600px] h-[300px] bg-blue-400 flex justify-center items-center'>
            <div>
            
            <img src={img1} alt="" className="max-w-full max-h-full " />


            </div>
          </div>

              
              <div className='w-1/2 lg:h-[900px] md:h-[600px] h-[300px]  text-white'>
                <div className='h-full flex flex-col '>
                <Parallax speed={5}>
                    <div className='w-full lg:h-[300px] md:h-[200px] h-[100px] bg-blue-800 flex'>
                      <div className="border-2 border-black flex-1 flex items-center" >
                          <p className="lg:text-xl md:text-[14px] text-[8px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, est id, repellendus fugit similique expedita maxime illum sunt dolores, error molestias vel soluta esse deleniti adipisci aliquid. Labore, excepturi iure!</p>


                      </div>
                      <div className="border-2 border-black flex-1 flex items-center ">
                        <div>
                        <img src={img2} alt="" className="max-w-full max-h-full " />
                        </div>


                      </div>
                      
                    </div>
                  </Parallax>
                  
                  <Parallax speed={10}>
                    <div className='w-full lg:h-[300px] md:h-[200px] h-[100px] bg-red-800 flex'>
                      <div className="border-2 border-black flex-1 flex items-center" >
                          <p className="lg:text-xl md:text-[14px] text-[8px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, est id, repellendus fugit similique expedita maxime illum sunt dolores, error molestias vel soluta esse deleniti adipisci aliquid. Labore, excepturi iure!</p>


                      </div>
                      <div className="border-2 border-black flex-1 flex items-center ">
                        <div>
                        <img src={img3} alt="" className="max-w-full max-h-full " />
                        </div>


                      </div>
                      
                    </div>
                  </Parallax>
                  <Parallax speed={15}>
                    <div className='w-full lg:h-[300px] md:h-[200px] h-[100px] bg-yellow-200 flex'>
                      <div className="border-2 border-black flex-1 flex items-center" >
                          <p className="lg:text-xl md:text-[14px] text-[8px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, est id, repellendus fugit similique expedita maxime illum sunt dolores, error molestias vel soluta esse deleniti adipisci aliquid. Labore, excepturi iure!</p>


                      </div>
                      <div className="border-2 border-black flex-1 flex items-center ">
                        <div>
                        <img src={img4} alt="" className="max-w-full max-h-full " />
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
