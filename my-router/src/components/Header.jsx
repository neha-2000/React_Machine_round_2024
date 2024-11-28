import { Link, NavLink } from "react-router-dom"

const Header=()=>{

    return <div className="header">
        {/* <Link to="/posts" >Posts</Link> */}
        
        <NavLink className="default-link" to="/posts" 
            // className={({isActive,isPending,isTransitioning})=>{[
            //     isPending ? "pending":"",
            //     isActive ? "active":"",
            //     isTransitioning ? "transitioning":"",            
            // ].join(" ")
            // }}

            // style={({isActive,isPending,isTransitioning})=>{
            //     return {
            //         fontWeight:isActive ? "bold" :"",
            //         color:isPending ? "red":"white",
            //         viewTransitionName:isTransitioning ?"slide":""
            //     }
            // }}
         >Posts</NavLink>
        <NavLink className="default-link" to="/shorts" >Video Shorts</NavLink>


    </div>
}

export default Header