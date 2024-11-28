import { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Router,Route} from "react-router-dom";
import Landingpage from './Landingpage';
import Detailspage from './Detailspage';

export const MyContext=createContext();

const MyContextProvider=({children})=>{
  const [state, setstate] = useState("This is state");
  return <MyContext.Provider value={{state}}>
    {children}
  </MyContext.Provider>
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <MyContextProvider>
    <Routes>
      <Route element={<Landingpage/>}  path='/'/>
      <Route element={<Detailspage/>} path='/details/:did'/>
    </Routes>
    </MyContextProvider>
   
    
    </BrowserRouter>
  )
}

export default App
