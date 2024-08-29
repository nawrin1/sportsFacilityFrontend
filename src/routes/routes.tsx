import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import ContactUs from '../pages/ContactUs/ContactUs';
import UserDashboard from '../pages/UserDashboard/UserDashboard';
import ProtectedRoute from '../components/layout/ProtectedRoute';
import MyBooking from '../pages/UserDashboard/MyBooking/MyBooking';
import MyDashboard from '../pages/UserDashboard/MyDashboard/MyDashboard';

import MyBookingDetails from '../pages/UserDashboard/MyBookingDetails/MyBookingDetails';
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard';
import MyAdminDashboard from '../pages/AdminDashboard/MyAdminDashboard/MyAdminDashboard';
import AllBooking from '../pages/AdminDashboard/AllBooking/AllBooking';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
      ,
      {
        path:"/aboutus",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/contactus",
        element:<ContactUs></ContactUs>
      }
    ]
  },

  {
    path: '/login',
    element: <Login/>,
  },

  {
    path: '/register',
    element: <Register/>,
  },
  {
    path:'userdashboard',
    element:<ProtectedRoute role="user"><UserDashboard></UserDashboard></ProtectedRoute>,
    children:[
      {
        path:'mybooking',
        element:<MyBooking></MyBooking>
      },
      {
        path:'mydash',
        element:<MyDashboard></MyDashboard>
      },
      {
        path:`mybooking/:id`,
        element:<MyBookingDetails></MyBookingDetails>
      }
    ]
    
  },
  {
    path:'admindashboard',
    element:<ProtectedRoute role="admin"><AdminDashboard></AdminDashboard></ProtectedRoute>,
    children:[
      {
        path:'allbookings',
        element:<AllBooking></AllBooking>
      },
      {
        path:'mydash',
        element:<MyAdminDashboard></MyAdminDashboard>
      },
      // {
      //   path:`mybooking/:id`,
      //   element:<MyBookingDetails></MyBookingDetails>
      // }
    ]
    
  }
]);

export default router;


// resolvers
// error data in login check res.err
// 404 error page
// provide tahs to avoid relod
