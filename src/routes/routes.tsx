import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs/AboutUs';


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
]);

export default router;