import { useState } from 'react'

import './App.css'

// id,uname,address,email,mobile,DOB
function App() {

  const[formData,setformData]=useState({
    username:"",
    email:"",
    address:""

  })

  const[data,setdata]=useState([
    // {id:Date.now(),imgurl:"",uname:"neha",address:"Puen",email:"neha@gmail.com",}
  ])


  function handleChange(e){
    const{name,value}=e.target;
    setformData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }



  function addData(){
    setdata((prev)=>[...prev,formData])
    setformData({
      address:"",
      email:"",
      username:""
    })    
  }
  return (
    <div className='h-screen	w-screen p-11'>

    <div className='flex justify-between '>
    <h1 className='text-xl'>Employee Database management</h1>
    {/* <button className='bg-slate-300 p-4 w-100 '>Add New</button> */}
    </div>
   <h1>Form</h1>
   <input placeholder='name' name='username' onChange={handleChange} value={formData.username}/>
   <input placeholder='address' name='address' onChange={handleChange}  value={formData.address}/>
   <input placeholder='email' name='email' onChange={handleChange}  value={formData.email}/>
    <button className='bg-slate-300 p-4 w-100 ' onClick={addData}>Add</button>

   <div className='flex '>
    <div>
    <h1>Employ list</h1>
    <ol>
    {
      data?.map((i)=>{
        return <li key={i.id}>
            {i.username}   {i.email}
        </li>
      })
    }
    </ol>
    
    </div>
    
    <div>
    <h1>Employ Description</h1>
    </div>
    
   </div>
    </div>
  )
}

export default App


