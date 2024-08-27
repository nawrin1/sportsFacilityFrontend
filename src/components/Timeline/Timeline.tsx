
import { CiStar } from 'react-icons/ci';
import { IoSchool } from 'react-icons/io5';
import { MdWorkOutline } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Timeline = () => {
    return (
        <div className='relative -z-30 bg-black  pt-20'>
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
    icon={<MdWorkOutline />}
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
    icon={<MdWorkOutline />}
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
    icon={<MdWorkOutline />}
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
    icon={<IoSchool />}
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
    icon={<IoSchool />}
  >

    <p className='font-serif'>
    On the day of your booking, check in at the facility. Present your booking confirmation, and enjoy your session.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<CiStar />}
  />
</VerticalTimeline>
            
        </div>
    );
};

export default Timeline;