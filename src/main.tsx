import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from './App';

import Home from "./components/pages/Home.tsx";
import Resume from "./components/pages/Resume.tsx";
import Project1 from "./components/pages/Project1.tsx";
import Project2 from "./components/pages/Project2.tsx";
import Project3 from "./components/pages/Project3.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <div>404 not found go back pls :(</div>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/resume',
        element: <Resume/>
      },
      {
        path: '/projects/1',
        element: <Project1/>
      },
      {
        path: '/projects/2',
        element: <Project2/>
      },
      {
        path: '/projects/3',
        element: <Project3/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
