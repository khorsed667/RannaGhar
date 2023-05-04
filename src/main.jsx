import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Main from './Layout/MAin.jsx';
import Banner from './Components/Banner/Banner';
import Footers from './Components/Footer/Footers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Banner></Banner>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
    router={router}
    >
    </RouterProvider>
  </React.StrictMode>,
)
