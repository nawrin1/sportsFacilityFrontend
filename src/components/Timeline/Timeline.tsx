
import { BsEmojiSmile } from 'react-icons/bs';

import { FaGenderless } from 'react-icons/fa';

import { IoIosTimer } from 'react-icons/io';

import { MdOutlinePayments, MdWorkOutline } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { TbBrandBooking } from 'react-icons/tb';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Timeline = () => {
    return (
        <div className='relative -z-30 bg-black  pt-20'>

            <h2 className='text-center font-serif font-bold lg:text-6xl md:text-4xl text-2xl text-white pt-10 pb-16'>HOW IT WORKS</h2>
            <VerticalTimeline>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work no-bottom-border"
    contentStyle={{ background: 'none', color: '#fff', borderBottom: 'none' }} 
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="Browse Facilities"
    iconStyle={{ background: 'gray', color: '#fff' }}
    icon={<MdWorkOutline />}
    style={{borderBottom:"none !important"}}
    
    
  >
  
    <p className='font-serif '>
    Explore available sports facilities through an intuitive search or browse function. View details, images, and amenities of each facility.
    </p>
  </VerticalTimelineElement> */}

<VerticalTimelineElement
    className="no-bottom-border"
    contentStyle={{ background: '#222222', color: 'white' }} 
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="Browse Facilities"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<MdWorkOutline />}
>
    <p className='font-serif '>
        Explore available sports facilities through an intuitive search or browse function. View details, images, and amenities of each facility.
    </p>
</VerticalTimelineElement>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Select Date and Time"
    contentStyle={{ background: '#222222', color: 'white' }} 
    
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<IoIosTimer />}
  >
    
    <p className='font-serif '>
    Choose your preferred date and time slot from the available options. The system will display real-time availability.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Confirm Your Booking"
  
    contentStyle={{ background: '#222222', color: 'white' }} 
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<TbBrandBooking />}
  >
   
    <p className='font-serif '>
     
    Review your selection, enter necessary details, and confirm your booking.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Secure Payment"
    contentStyle={{ background: '#222222', color: 'white' }} 
    
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<MdOutlinePayments />}
  >
   
   <p className='font-serif '>
     
   Proceed to payment through secure payment gateways. Various payment methods mobile wallets, are supported.
     </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Manage Your Booking"
    contentStyle={{ background: '#222222', color: 'white' }} 
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<RxDashboard />}
  >

    <p>
    Access your bookings in your user dashboard. Modify or cancel reservations as needed, adhering to the platform’s policies.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Enjoy the Facility"
    contentStyle={{ background: '#222222', color: 'white' }} 
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<BsEmojiSmile/>}
  >

    <p className='font-serif'>
    On the day of your booking, check in at the facility. Present your booking confirmation, and enjoy your session.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: 'yellow', color: 'black' }}
    
    icon={<FaGenderless />}
  />
</VerticalTimeline>
            
        </div>
    );
};

export default Timeline;