import React from 'react';
import { Input, Button, Typography } from '@mui/material';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactUs = () => {
  // Animation variants for smooth entrance effects
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white py-12">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Typography
          variant="h4"
          gutterBottom
          className="text-center text-[#f2ede6] mb-8"
          component={motion.h2}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </Typography>

        {/* Main container with responsive layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <motion.form
            className="bg-white/15 backdrop-blur-sm opacity-70 p-6 rounded-lg shadow-md space-y-4 flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 gap-4">
              <Input
                placeholder="Name..."
                sx={{
                  '&:before': {
                    borderBottom: '1px solid gray',
                  },
                  '&:hover:not(.Mui-disabled):before': {
                    borderBottom: '1px solid gray',
                  },
                  '&:after': {
                    borderBottom: '1px solid gray',
                  },
                  width: '100%',
                  color: 'white',
                }}
              />
              <Input
                placeholder="Email..."
                sx={{
                  '&:before': {
                    borderBottom: '1px solid gray',
                  },
                  '&:hover:not(.Mui-disabled):before': {
                    borderBottom: '1px solid gray',
                  },
                  '&:after': {
                    borderBottom: '1px solid gray',
                  },
                  width: '100%',
                  color: 'white',
                }}
              />
            </div>
            <Input
              placeholder="Subject..."
              sx={{
                '&:before': {
                  borderBottom: '1px solid gray',
                },
                '&:hover:not(.Mui-disabled):before': {
                  borderBottom: '1px solid gray',
                },
                '&:after': {
                  borderBottom: '1px solid gray',
                },
                width: '100%',
                color: 'white',
              }}
            />
            <Input
              placeholder="Message..."
              sx={{
                '&:before': {
                  borderBottom: '1px solid gray',
                },
                '&:hover:not(.Mui-disabled):before': {
                  borderBottom: '1px solid gray',
                },
                '&:after': {
                  borderBottom: '1px solid gray',
                },
                width: '100%',
                color: 'white',
              }}
            />
            <div className="flex justify-center">
              <Button
                type="submit"
                variant="contained"
                className="w-[50%] py-3"
                sx={{
                  backgroundColor: '#f2ede6',
                  color: '#000',
                  '&:hover': { backgroundColor: '#414141' },
                  fontWeight: 'bold',
                }}
              >
                Submit
              </Button>
            </div>
          </motion.form>

          {/* Map Integration */}
          <motion.div
            className="flex-1 h-72 rounded-md shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <iframe
              className="w-full h-full rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354344709025!2d144.95373531531393!3d-37.81720997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771c34a5caca58!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1615981917848!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              title="Office Location"
            ></iframe>
          </motion.div>
        </div>

        {/* Contact Details */}
        <motion.div
          className="mt-12 text-center space-y-4"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2">
            <FaPhone className="text-yellow-500" />
            <Typography className="text-gray-300">+123 456 7890</Typography>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-yellow-500" />
            <Typography className="text-gray-300">info@sportsease.com</Typography>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-yellow-500" />
            <Typography className="text-gray-300">
              123 Sports Avenue, Cityville, Country
            </Typography>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
