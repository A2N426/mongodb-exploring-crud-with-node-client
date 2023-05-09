import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateTea from './components/updateTea.jsx';
import TeaAdd from './components/TeaAdd.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/teas')
  },
  {
    path:'addTea',
    element:<TeaAdd></TeaAdd>
  },
  {
    path:'updateTea/:id',
    element:<UpdateTea></UpdateTea>,
    loader:({params})=>fetch(`http://localhost:5000/teas/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
    </RouterProvider>
  </React.StrictMode>,
)
