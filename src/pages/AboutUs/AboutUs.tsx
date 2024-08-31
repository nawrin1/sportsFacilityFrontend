import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { FaBusinessTime, FaStar } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import './AboutUs.css'; // Make sure this file contains scoped CSS
import img1 from '../../assets/markos-mant-F2gTQRAwQ3k-unsplash.jpg';
import img2 from '../../assets/team1.jpg';
import img3 from '../../assets/team2.jpg';
import img4 from '../../assets/team3.jpg';

const AboutUs = () => {
  return (
    <div className=" bg-gradient-to-b from-gray-900 to-black text-white py-10 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
       
       
        <div className="mb-12">
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold' }}
            gutterBottom
            className="text-[#f2ede6]"
          >
            Our Mission
          </Typography>
          <Typography variant="body1" className="text-gray-300 leading-relaxed pt-4">
            Our mission is to offer world-class sports facilities that cater to athletes of all
            levels. We strive to create a vibrant community where dedication and passion drive
            performance, empowering every individual to achieve their best.
          </Typography>
        </div>

       
        <Timeline position="alternate" sx={{ marginBottom: '50px' ,paddingTop:"30px"}}>
         
         
          <TimelineItem >
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="gray"
            >
              2010
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot className="bg-blue-700">
                <FaBusinessTime className="text-white" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" className="text-yellow-500">
                Founded
              </Typography>
              <Typography className="text-gray-300">
                Our journey began with a vision to elevate sports facilities.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          

      
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="gray">
              2015
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <IoPeople className="text-white" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" className="text-yellow-500">
                Growing Community
              </Typography>
              <Typography className="text-gray-300">
                We expanded to serve a growing community of athletes.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="gray"
            >
              2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <FaStar className="text-yellow-500" />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" className="text-yellow-500">
                Achievements
              </Typography>
              <Typography className="text-gray-300">
                Received accolades for our innovative sports facilities.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="gray">
              Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="secondary">
                <IoMdMail className="text-white" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" className="text-yellow-500">
                Stay Connected
              </Typography>
              <Typography className="text-gray-300">
                Contact us for more information or to book our facilities.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
{/* 
        <div className='about-container'>
<div className="aboutover"></div>
  <div>
  <img src={img1} alt="" />
  </div>
  <div className='absolute w-[40%] h-[400px] top-10 left-10  space-y-5 flex items-center'>
    <p className='text-xl font-serif'>"Meet our passionate team of experts, dedicated to delivering excellence in every play. Together, we drive the vision of <span className='text-blue-950 font-serif font-bold'>SPORT EASE</span>, empowering athletes to achieve their best."</p>


</div>
  <div className='absolute w-[50%] h-[420px] top-10 right-10 space-y-5'>
    <div className='flex gap-5 w-full h-[200px]  justify-center '>
      <div className='bg-red-500 w-[30%] h-[80%] rounded-md'>
        <img src={img3} className="rounded-md"alt="" />
        <h2>Howdy Smith, CEO</h2>
       
        
      </div>
      <div className='bg-yellow-500 w-[30%] h-[80%] rounded-md'>
      <img src={img2} className="rounded-md"alt="" />
      <h2>Saily Jen, Manager</h2>

      </div>


    </div>
    <div className='w-full h-[180px] flex justify-center'>
      <div className='bg-purple-700 w-[30%] h-[90%]'>
      <img src={img4} className="rounded-md" alt="" />
      <h2>Adam Burger, Trainer</h2>

      </div>

    </div>
  </div>

</div> */}

<div className="about-container relative lg:h-[100vh] md:h-[50vh] mt-10 ">
  <div className="aboutover h-[100%] lg:h-[100%] "></div>
  <div>
    <img src={img1} alt="" />
  </div>

  {/* Meet Our Team Section */}

<div className="absolute w-full md:w-[50%] lg:w-[40%] lg:h-[400px] md:h-[400px] h-[50px]  top-10  md:left-10 space-y-5 flex items-center">
    <p className="text-base px-2 md:text-xl lg:text-xl text-[7px] font-serif md:px-0">
      "Meet our passionate team of experts, dedicated to delivering excellence in every play. Together, we drive the vision of{" "}
      <span className="lg:text-blue-950 md:text-blue-950 text-white font-serif font-bold">SPORT EASE</span>, empowering athletes to achieve their best."
    </p>
  </div>

  {/* Team Member Grid */}
  <div className="absolute w-full md:w-[45%] h-auto md:h-[400px]  md:top-10 right-5 md:right-10 space-y-5 top-28">
<div className='flex lg:flex-col md:flex-col flex-row gap-2'>
<div className="flex  md:flex-row lg:gap-5 md:gap-5 gap-2 w-full h-auto md:h-[180px] lg:justify-center lg:h-[200px]  items-center md:justify-center justify-end">
      {/* Team Member 1 */}
      <div className="bg-red-500 w-[50px] h-[45px] md:w-[30%] md:h-[50%] lg:h-[80%] rounded-md">
        <img src={img3} className="rounded-md h-full object-cover" alt="Howdy Smith, CEO" />
        <h2 className="text-center text-white lg:mt-2 mt-1 lg:text-[14px] md:text-[14px] text-[5px]">Howdy Smith, CEO</h2>
      </div>
      {/* Team Member 2 */}
      <div className="bg-yellow-500 w-[50px] h-[45px] md:w-[30%] md:h-[50%] lg:h-[80%] rounded-md">
        <img src={img2} className="rounded-md h-full object-cover" alt="Saily Jen, Manager" />
        <h2 className="text-center text-white lg:mt-2 mt-1 lg:text-[14px] md:text-[14px] text-[5px] ">Saily Jen, Manager</h2>
      </div>
    </div>
    <div className="lg:w-full md:w-full w-1/2 h-auto md:h-[150px] lg:h-[180px] flex lg:justify-center md:justify-center justify-start  md:mt-0 border-red-200  ">
      {/* Team Member 3 */}
      <div className="bg-purple-700 w-[50px] h-[45px] md:w-[30%] md:h-[40%] lg:h-[90%] rounded-md">
        <img src={img4} className="rounded-md h-full object-cover" alt="Adam Burger, Trainer" />
        <h2 className="text-center text-white lg:mt-2 mt-1 lg:text-[14px] md:text-[14px] text-[5px]">Adam Burger, Trainer</h2>
      </div>
    </div>
</div>
  </div>

</div>


      </div>

   
      <div style={{ marginTop: '70px', maxWidth: '6xl' }} className=" max-w-6xl  px-4 mx-auto ">
        <Typography variant="h5" gutterBottom className="text-yellow-100">
          Contact Us
        </Typography>
        <Typography variant="body1" className="text-gray-300">
          Office Address: 123 Sports Avenue, Cityville, Country
        </Typography>
        <Typography variant="body1" className="text-gray-300">
          Phone: +123 456 7890
        </Typography>
        <Typography variant="body1" className="text-gray-300">
          Email: info@sportsease.com
        </Typography>
      </div>
    </div>
  );
};

export default AboutUs;



