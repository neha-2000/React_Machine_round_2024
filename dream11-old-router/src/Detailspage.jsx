import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigation, useParams } from "react-router-dom";
import { MyContext } from "./App";

const Type_Veg="vegi";
const Type_frut="fruit";

const Detailspage=()=>{

    const {state}=useContext(MyContext)
    const [activeTab, setActiveTab] = useState(Type_frut);

  const {did}=useParams();
  const location = useLocation(); // Access the state passed via Link or navigate


    const[data,setdata]=useState([
        { id: 1, name: "Carrot", price: 20, count: 0 ,type:"vegi"},
        { id: 2, name: "Broccoli", price: 30, count: 0 ,type:"vegi"},
        { id: 1, name: "Apple", price: 50, count: 0 ,type:"fruit"},
        { id: 2, name: "Banana", price: 10, count: 0 ,type:"fruit"}
    ])


    const handledataRender=(type)=>{
        console.log(type);
        setActiveTab(type);
    }
    
let totalcnt=data.reduce(function(acc,curVal){
    acc=acc+curVal.count
    return acc
},0)

let vegicnt=data.filter((item)=>item.type==Type_Veg).reduce(function(acc,curVal){
    acc=acc+curVal.count
    return acc
},0)

let fruitscnt=data.filter((item)=>item.type==Type_frut).reduce(function(acc,curVal){
    acc=acc+curVal.count
    return acc
},0)

const updateCnt =(id)=>{
    setdata((prev)=>{
        return prev.map((item)=>{
            if(item.id==id){
                return {count:item.count+1,...item}
            }
           return item
        })
    })

    
}

useEffect(() => {
    handledataRender(Type_frut)
    return () => {
        
    };
}, []);

    return <div>

        <h1>FRom context: {state}</h1>
        <h1>Detailspage page {location.state.message} id:{did}</h1>
        <h2>Total count : {totalcnt}</h2>
        <h2>Vegetables count :{vegicnt}</h2>
        <h2>Fruits count :{fruitscnt}</h2>
        <button style={{border:activeTab==Type_frut ? "1px solid gray":"none"}} onClick={()=>{handledataRender(Type_frut)}}> Fruits</button><button style={{border:activeTab==Type_Veg ? "1px solid gray":"none"}} onClick={()=>{handledataRender(Type_Veg)}}> Vegetables</button>
        <div>
            {
                data.filter((item)=>item.type==activeTab).map((item,index)=>{
                    return <div key={item.id}>
                        <h3>Name: {item.name}</h3>
                        <p>Price: {item.price}</p>
                        <span>Count: {item.count}
                        </span>
                        <button onClick={()=>{updateCnt(item.id)}}>Update cnt</button>
                        <button onClick={()=>{updateCnt(item.id)}}>remove cnt</button>

                    </div>
                })
            }
        </div>
    </div>
}

export default Detailspage