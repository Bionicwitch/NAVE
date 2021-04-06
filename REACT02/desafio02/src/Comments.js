import { useHistory } from 'react-router-dom';
import './App.css';
import  React  from "react";
import Comment from "./Comment";
import axios from "axios";
import { useEffect,useState } from "react";

const Comments=()=>{
    const history=useHistory();
    const [post, setPost] = useState([]);
    
    const getPosts= async ()=>{
        const { data: post } = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setPost(post);
        console.log("chamou o getposts")
    };
    
    useEffect(()=>{ 
        getPosts();
    },[]);

    if(post.length ===0){
        return (<h1>Comments</h1>);
    }
    return(
    <div>
        <h1>Comments</h1>
        <button onClick={()=>history.push("/")}>HOME</button>
        {post.map((post)=>{
            return (<div key={post.id}>{Comment(post)}</div>);
        })}
    </div>

    )
}

export default Comments;