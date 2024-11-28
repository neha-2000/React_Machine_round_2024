import { useState } from 'react'
import './App.css'
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom"
import Home from './pages/Home'
import AppLayout from './layouts/app-layout'
import Login from './pages/Login'
import Posts, { postLoader } from './pages/Post'
import Comments, { commentLoader } from './pages/Comments'
import Shorts from './pages/Shorts'
import PageNotFound from './components/PageNotFound'

const router=createBrowserRouter([
  {
    element:<Login/>,
    path:"/",
    errorElement:<PageNotFound/>
  },
  {
    element:<AppLayout/>,
    children:[
      {
        path:"/dashboard",
        element:<Home/>,       
      },
      {
        path:"/posts",
        element:<Posts/>,
        loader:postLoader
      },
      {
        path:"/posts/:postId",
        element:<Comments/>,
        loader:commentLoader
      },
      {
        path:"/shorts",
        element:<Shorts/>
      },

    ]
  },
])
function App() {


  return <RouterProvider 
    router={router}
  />

  // return <BrowserRouter>
  // <Header/>
  // <Routes>
  //   <Route path='/login' element={<Login/>}></Route>
  //   <Route path='/dashboard' element={<Home/>}></Route>
  // </Routes>
  // </BrowserRouter>
}

export default App
