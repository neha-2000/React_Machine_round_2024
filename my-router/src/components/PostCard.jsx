import {Link} from "react-router-dom"
const PostCard=({post})=>{
    return <div className="post-container" >
        <h1 className="text-wrap"> {post.title}</h1>
        <p className="text-wrap"> {post.body}</p>
        <Link to={`${post.id}`}> View Cpmment</Link>
    </div>
}

export default PostCard;