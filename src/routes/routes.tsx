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
      }
    ]
    
  }
]);

export default router;