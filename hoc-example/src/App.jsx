import { startTransition, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import withRoleDropdown from './withRoleDropdown';
import Dropdown from './Dropdown'
import './App.css'
import Child from './Child'


const RoleBasedDropdown = withRoleDropdown(Dropdown);

function App() {

  const userRole = 'admin';  
  // const userRole = 'vendor';  
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);


  const handleClick = () => {
    startTransition(() => {
      setCount(count + 1);
    });
    setCount1(count1 + 1);
  };



  return (
    <>
    
       <h1>Role-Based Dropdown Example</h1>
       <button onClick={handleClick}>Count: {count}</button>;
       <button >count1: {count1}</button>;
      <RoleBasedDropdown role={userRole} />
    </>
  )
}

export default App
