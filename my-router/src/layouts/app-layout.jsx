import React, { Suspense } from "react";
import { Outlet ,Link, useNavigation} from "react-router-dom"
// import Header from "../components/Header"
const Header=React.lazy(()=>import("../components/Header"))
const AppLayout=()=>{

   const navigation= useNavigation();
  const isLoading= navigation.state==='loading' ? true : false
    return <div>
        <Suspense fallback={<h1>Loading</h1>}>
        <Header />
        </Suspense>
       
        {/* loading */}
        {isLoading ? "Loading":""}
        {/* pages */}
        <Outlet/>
       
    </div>
}

export default AppLayout