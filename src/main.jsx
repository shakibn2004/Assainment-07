import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Componets/Home/Home.jsx'
import FriendDetails from './Componets/FriendDetails/FriendDetails.jsx'
import TimeLine from './Componets/TimeLine/TimeLine.jsx'
import Stats from './Componets/Stats/Stats.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/FriendDetails',
    Component: FriendDetails
  },
  {
    path: '/TimeLine',
    Component: TimeLine
  },
  {
    path: '/Stats',
    Component: Stats
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
