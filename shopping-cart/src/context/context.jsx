import { createContext, useContext, useEffect, useReducer } from "react";
import { ShoppingCartReducer } from "./reducer";

const ShoppingCart=createContext();

const Context=({children})=>{
    // products state

    const[state,dispatch]=useReducer(ShoppingCartReducer,{
        products:[],
        user:null
    });

   
    const fetchProduts=async()=>{
        try{
            // https://dummyjson.com/products
            // const data= await (await fetch("/products.json")).json()
            const data= await (await fetch("https://dummyjson.com/products?limit=100")).json()

            console.log("data",data)
            if(data && data.products){
               dispatch({
                   type:'FETCH_PRODUCTS',
                   payload:data.products
               })
            }
        }
        catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        
        fetchProduts()
    }, []);

    return <ShoppingCart.Provider value={{state,dispatch}} >
        {children}
    </ShoppingCart.Provider>
}


// wrapper function
export const ShoppingCartState=()=>{
    return useContext(ShoppingCart)
}
export default Context