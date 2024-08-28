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


const AboutUs = () => {
  return (

<div className=' bg-black'>
<div style={{ padding: '20px',  margin: '0 auto' }} className='bg-black text-white max-w-6xl mx-auto'>
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>

      {/* Mission Statement */}
      <div style={{ marginBottom: '40px' }}>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1">
          Our mission is to provide top-tier sports facilities for athletes of all levels,
          fostering a community where passion meets performance.
        </Typography>
      </div>

      {/* Timeline */}
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2010
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
            <FaBusinessTime  className='text-blue-950'/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Founded
            </Typography>
            <Typography>Our journey began with a vision to elevate sports facilities.</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            2015
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
            <IoPeople />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Growing Community
            </Typography>
            <Typography>We expanded to serve a growing community of athletes.</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
            <FaStar />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Achievements
            </Typography>
            <Typography>Received accolades for our innovative sports facilities.</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
            <IoMdMail />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Stay Connected
            </Typography>
            <Typography>Contact us for more information or to book our facilities.</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      {/* Contact Information */}
      <div style={{ marginTop: '40px' }}>
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1">
          Office Address: 123 Sports Avenue, Cityville, Country
        </Typography>
        <Typography variant="body1">
          Phone: +123 456 7890
        </Typography>
        <Typography variant="body1">
          Email: info@sportsease.com
        </Typography>
      </div>
    </div>
</div>
  );
};

export default AboutUs;
