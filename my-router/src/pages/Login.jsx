import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Login=()=>{

    const navigate=useNavigate()

    const [count, setcount] = useState(0);
    useEffect(() => {
       console.log("logiign")
      }, [count]);
      

    return <div>Login
        {count}
        <button onClick={()=>{navigate({pathname:"/dashboard"})}}>Login please</button>
        <button onClick={()=>{setcount((prev)=>{
            return prev=prev+1
        })}}>++</button>
    </div>
}

export default Login