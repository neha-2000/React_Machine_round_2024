import axios from 'axios'
import PostCard from '../components/PostCard';
import { useLoaderData } from 'react-router-dom';
const Posts=()=>{
    const{data:posts,} =useLoaderData()

    return <div>
        {posts?.map((i,index)=>{
            return <PostCard post={i} key={index}/>
        })}
    </div>
}

export async function postLoader({params}){
    const response=await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=50")
    return response
}
export default Posts


