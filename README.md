# Sports Facility Booking Platform

## Table of Contents
- [Introduction](#introduction)
- [Project Description](#project-description)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation Guidelines](#installation-guidelines)
- [Usage](#usage)


## Introduction

This project is a sports facility booking platform designed to provide users with an intuitive interface for booking various sports facilities. The platform offers both user and admin dashboards, enabling users to manage bookings and administrators to manage facilities, bookings, and users.

## Project Description

The Sports Facility Booking Platform integrates frontend and backend systems to deliver a fully functional interface for booking sports facilities. The platform aims to simplify the booking process, enhance user experience, and provide comprehensive management tools for administrators.

## Features

- **Landing Page:** Overview of the platform with a hero section, featured facilities, a "How It Works" guide, customer testimonials, and a video component.
- **User Dashboard:** Manage bookings, view details, and cancel bookings.
- **Admin Dashboard:** Manage facilities, bookings, and users with CRUD operations.
- **Login/Registration:** Access control with error handling.
- **About Us Page:** Mission statement, team bios, and contact information are provided.
- **Contact Us Page:** Contact form and map integration is done.
- **Facility Listing Page:** Search, filters facility through name or location, and displaying facility cards.
- **Facility Details Page:** Detailed view of a specific facility.
- **Booking Page:** Availability checker, booking form, and payment integration.
- **Error Pages:** Custom error pages with navigation options.
- **Responsive Design:** Fully responsive for mobile, tablet, and desktop devices.

## Technology Stack

- **Frontend:** React, Tailwind CSS, Framer Motion, Typescript
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, Typescript
- **Other Tools:** Redux, stripe for payment integration

## Installation Guideline

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation Steps

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/sports-facility-booking.git
   cd sports-facility-booking

   ```
2. Install Dependencies: 

   ```
   npm install
   ```
### Configuration

   
  1. Set up environment. Your .env file should look like this
   ```
   VITE_stripe: your_key
   ```
### Usage
   1. Run the project:
   ```
   npm run dev
   ```

