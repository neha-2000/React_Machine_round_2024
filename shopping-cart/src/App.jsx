
import './App.css'
import { createBrowserRouter,RouterProvider,Routes } from 'react-router-dom';
import AppLayout from './components/app-layout';
import Home from './pages/home';
import Context from './context/context';
import Login from './pages/login';

function App() {

  const router=createBrowserRouter([
    {
      element:<Login/>,
      path:"/"
    },
    {
      element:<AppLayout/>,
      children:[
        {
          path:'/home',
          element:<Home/>
        }
      ]
    }
  ]);


  return (
    <Context >
      <RouterProvider router={router}   />
    </Context>
   
  )
}

export default App
