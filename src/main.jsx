import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import HeroRegister from './components/HeroRegister/HeroRegister';
// import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>,

      },
      {
        path:'/registerHero',
        element:<HeroRegister></HeroRegister>
      }
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
