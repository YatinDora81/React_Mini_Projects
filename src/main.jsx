import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AutoComplete from './pages/AutoComplete.jsx'
import Multi_Select_Input from './pages/Multi_Select_Input.jsx'
import Folder_System from './pages/Folder_System.jsx'
import  { Toaster } from 'react-hot-toast';
import Phone_Otp from './pages/Phone_Otp.jsx'
import CartSteper from './pages/CartSteper.jsx'

const router = createBrowserRouter( [
  {
    path : "/",
    element : <App></App>
  },
  {
    path : "/auto-complete",
    element : <AutoComplete></AutoComplete>
  },
  {
    path : "/multi-select-input",
    element : <Multi_Select_Input></Multi_Select_Input>
  },
  {
    path : "/folder-system",
    element : <Folder_System></Folder_System>
  },
  {
    path : "/phone-otp",
    element : <Phone_Otp></Phone_Otp>
  },
  {
    path : "/cartsteper",
    element : <CartSteper></CartSteper>
  }
] )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster></Toaster>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
