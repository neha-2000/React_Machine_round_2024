import { useEffect } from "react"

const Child=()=>{
    console.log("Child component 1")
    useEffect(() => {
        console.log("Child usereffect")
        return () => {
            
        };
    }, []);
    return <div><h1>Child component</h1></div>
}

export default Child