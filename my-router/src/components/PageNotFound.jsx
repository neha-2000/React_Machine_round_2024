import { Link, useRouteError } from "react-router-dom"

const PageNotFound=()=>{
   let error= useRouteError();
    console.log(error)
    return <div>
        <h1>Something went wrong</h1>
        <p>{error?.data || error.message} </p>
        <Link to={-1}>Go back</Link>
    </div>
}

export default PageNotFound