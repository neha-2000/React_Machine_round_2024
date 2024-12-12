import {Router,useNavigate} from 'react-router-dom'
const Login=()=>{
    
    const navigate=useNavigate()
    return <div>

    <h1>Login</h1>
    <button onClick={()=>{
        navigate("/home")
    }}>Go to home</button>

    </div>
}

export default Login