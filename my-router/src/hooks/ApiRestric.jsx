import { useEffect, useState } from "react"

const useApiRestric=(apiFunction)=>{
    const [data, setdata] = useState(null);
    const [error, seterror] = useState(null);
    const [callout, setcallout] = useState(0);

    useEffect(() => {
        if(callout < 2){
            const fetchData=async()=>{
                try{
                    const result=await apiFunction()
                    setdata(result)
                }
                catch (error){
                    console.log(error)
                    seterror(error)
                }
                
            }

            fetchData()
            setcallout((prev)=>{
                return prev=prev+1
            })
        }

       
        return () => {
            
        };
    }, [callout,apiFunction]);



}

export default useApiRestric