import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import './Testimonial.css';

// import required modules
import { EffectCreative } from 'swiper/modules';





import img1 from '../../assets/man.png'

import img2 from '../../assets/user.png'

import img3 from '../../assets/woman.png'

import img4 from '../../assets/woman.png'

import img5 from '../../assets/profile.png'






const Testimonial = () => {

    return (
        <div className="relative z-10 flex flex-col-reverse lg:flex-row md:flex-row bg-black px-4 pt-20">
<div className="flex justify-center  lg:w-[60%]  ">
<div className="lg:w-[70%] w-[80%] lg:pt-20">
<Swiper
        grabCursor={true}
        effect={'creative'} 
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="main ">
                <div className=" w-[100px] h-[100px] rounded-full bg-slate-400  relative -top-10 border-2">
                    <img src={img1}alt="" />

                </div>
                <div className="test w-full h-[150px] text-center flex pt-5 px-2">
                    <p className="text-[15px] text-center">"The service was extremely good and the staffs were very helpful"<br />- John Johnson</p>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="main ">
                <div className=" w-[100px] h-[100px] rounded-full bg-slate-400 border-2 relative -top-10">
                    <img src={img2}alt="" />

                </div>
                <div className="test w-full h-[150px] pt-5 px-2">
                    <p className="text-[15px] text-center">"Absolutely fantastic service! Exceeded all my expectations." <br />- John Doe</p>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="main ">
                <div className=" w-[100px] h-[100px] rounded-full bg-slate-400 border-2 relative -top-10">
                    <img src={img3}alt="" />

                </div>
                <div className="test w-full h-[150px] pt-5 px-2">
                    <p className="text-[15px] text-center">"Superb quality and friendly staff. Highly recommend!" <br />- Emily Johnson
                    </p>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="main ">
                <div className=" w-[100px] h-[100px] rounded-full bg-slate-400 border-2 relative -top-10">
                    <img src={img4}alt="" />

                </div>
                <div className="test w-full h-[150px] pt-5 px-2">
                    <p className="text-[15px] text-center"> "A wonderful experience from start to finish. Five stars!" <br />- Ema Watt</p>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="main ">
                <div className=" w-[100px] h-[100px] rounded-full bg-slate-400 border-2 relative -top-10">
                    <img src={img5}alt="" />

                </div>
                <div className="test w-full h-[150px] pt-5 px-2">
                    <p className="text-[15px] text-center">"Loved the experience! Will definitely return." <br /> - Sean John</p>

                </div>
            </div>
        </SwiperSlide>
        
      
      </Swiper>

</div>
<div className="lg:w-[30%] flex items-center w-0">
<div style={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative' }}>
  <iframe
    src="https://giphy.com/embed/9366IYNrJIFZeEyiwt"
    width="100%"
    height="100%"
    style={{ position: 'absolute' }}
    frameBorder="0"
    className="giphy-embed"
    allowFullScreen
    title="giphy-embed"
  ></iframe>
</div>
<p>
  <a href="https://giphy.com/stickers/transparent-setahospedin-9366IYNrJIFZeEyiwt">via GIPHY</a>
</p>



</div>

</div>
<div className="lg:w-[40%] md:w-[50%] lg:pr-4 flex text-center items-center justify-center ">
    <p className="lg:text-5xl text-white font-serif font-bold text-center text-2xl ">SWIPE TO EXPLORE <br />CUSTOMER REVIEWS</p>


</div>


            
        </div>




    );
};

export default Testimonial;


