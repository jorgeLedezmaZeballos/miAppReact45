import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import vechicles from './data/vehicles.js';

const routes = [
  { path: "/",
    element: <App />,
  }];
vechicles.forEach((v)=>{
  routes.push({
    path: "/"+v.name,
    element: <div>{v.name}</div>,
  })
})

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

