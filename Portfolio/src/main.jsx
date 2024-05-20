import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BaseLayout } from './components/BaseLayout';
import { About } from './routes/About.jsx'
import { Home } from './routes/Home.jsx'
import { Contact } from './routes/Contact.jsx'
import { Projects } from './routes/Projects.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/projects', element: <Projects /> },
      { path: '*', element: <h1>404</h1> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
