import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [hour, setHour] = useState(10)
  const [mins, setMins] = useState(10)
  const [seconds, setSeconds] = useState(10)
  useEffect(() => {
    
    if(seconds<=0) {
     
      return
    };

    const timerId=setInterval(()=>{
      setSeconds((prev)=>prev-1)
    },1000)
    return () => {
      clearInterval(timerId)
    };
  }, [seconds]);

  let style={fontSize:'20px',outline:"none",border:"none",width:'40px'};

  const convertToSeconds = () => {
    // Normalize seconds and minutes
    const extraMinutes = Math.floor(seconds / 60);
    const normalizedSeconds = seconds % 60;
    const totalMinutes = mins + extraMinutes;

    // Convert to total seconds
    console.log("hour",hour * 3600 + totalMinutes * 60 + normalizedSeconds)
    return hour * 3600 + totalMinutes * 60 + normalizedSeconds;
  };

  return (
    <>
     <h1>Timmer :</h1>
     <h2><input  style={style} />  Hours : <input  style={style} /> minutes : <input value={seconds}  style={style} /> seconds</h2>
  
     <button onClick={convertToSeconds}>Start</button><button>Reset</button>
    </>
  )
}

export default App
