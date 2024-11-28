import axios from 'axios'
import { useLoaderData, useNavigate,  } from "react-router-dom";
const Comments=()=>{
    const navigate=useNavigate();
    const[post,comment]=useLoaderData();
  
    return <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        <h3>Comment</h3>
        <p>{comment?.name}</p>
        <button onClick={()=>{navigate(-1)}}>Go back</button>
    </div>

}
 export async function commentLoader({params}){
    try{
        const[postResponse,commentsResponse]=await Promise.all([
            axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
            axios.get(`https://jsonplaceholder.typicode.com/comments/${params.postId}`)
        ])
        return [postResponse.data,commentsResponse.data]

    }catch(Err){
        console.log(Err)
    }
}
export default Comments