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
import ChefContainer from './Components/ChefContainer/ChefContainer';
import Chef from './Components/Chef/Chef';
import Layout from './Layout/Layout';
import ViewChef from './Components/ViewChef/ViewChef';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Layout></Layout>
      },
      {
        path:'chef-recipies/:id',
        element:<ViewChef></ViewChef>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    >
    </RouterProvider>
  </React.StrictMode>,
)
