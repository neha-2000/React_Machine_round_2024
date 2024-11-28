import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Landingpage=()=>{
    let navigate=useNavigate()
    const gotoDetail=()=>{
        navigate('/details/123', { state: { message: "Hello from Landingpage", productId: 123 } });
    }
    return <div>
        <h1>Landing page</h1>
        <h1>Welcome to the Store</h1>
        <Link to={"/details"}>
        <button >Go to details</button>
        </Link>
        <button onClick={()=>{gotoDetail()}} >Go to details</button>
      
    </div>
}

export default Landingpage