import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Componets/Home/Home.jsx'
import FriendDetails from './Componets/FriendDetails/FriendDetails.jsx'
import TimeLine from './Componets/TimeLine/TimeLine.jsx'
import Root from './Componets/Root/Root.jsx'
import Stats from './Componets/Stats/Stats.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      const res = await fetch("/friends.json");
      return res.json();
    },
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: '/frienddetails/:id', Component: FriendDetails },
      { path: '/timeline', Component: TimeLine },
      { path: '/stats', Component: Stats },

    ],
  },
  { path: '*', element: <h1 className='text-5xl font-black text-center mt-[50vh]'>4O4 page!</h1> }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
