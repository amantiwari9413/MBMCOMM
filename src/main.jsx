import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Singin from './component/Singin.jsx'
import Home from './component/Home.jsx'
import Signup from './component/Signup.jsx'
import Profile from './component/Profile.jsx'
import { UserContextProvider } from './context.jsx'
import About from './component/About.jsx'

const router = createBrowserRouter([
  {
    path:"",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/sigup",
        element:<Signup/>
      },
      {
        path:'/sigin',
        element:<Singin/>
        
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  },

 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>  
  </React.StrictMode>,
)
