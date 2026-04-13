import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Componets/Home/Home.jsx'
import FriendDetails from './Componets/FriendDetails/FriendDetails.jsx'
import TimeLine from './Componets/TimeLine/TimeLine.jsx'
import Root from './Componets/Root/Root.jsx'





const router = createBrowserRouter([
  {
    path: '/',
    loader: () => fetch("public/friends.json"),
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: '/TimeLine', Component: TimeLine}
    ],
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
