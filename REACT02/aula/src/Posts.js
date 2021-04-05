import { useHistory } from 'react-router-dom';
import './App.css';
import  React  from "react";
import axios from "axios";
import { useEffect, useState } from "react";


const Posts=()=>{
    const history=useHistory();
    const [post, setPost] = useState([]);

    const getPosts= async ()=>{
        const { data: post } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPost(post);
        console.log("chamou o getposts")
    };
    
    useEffect(()=>{ 
        getPosts();
    },[]);
    
    if(post.length ===0){
        return (<h1>POSTS</h1>);
    }
    return(
    <div>
    <h1>POSTS</h1>
    <button onClick={getPosts}>Atualizar</button>
    {
        post.map((post)=>{
            return(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ) 
        })
    }
    <button onClick={()=>history.push("/")}>HOME</button>
    </div>
    );
}
export default Posts;
