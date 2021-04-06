import { useHistory } from 'react-router-dom';
import '../styles/Home.css';
import  React  from "react";
//import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import getPosts from '../services/posts';


const Posts=()=>{
    const history=useHistory();
    const [originalPost, setOriginalPost] = useState([]);
    const [post, setPost] = useState([]);
    const [search, setSearch]= useState("");

    const fetchPosts= async ()=>{
        try{
            const { data: post } = await getPosts();
            setOriginalPost(post);
            setPost(post);
            console.log("chamou o getposts");
        }
        catch(error){
            toast.error("oops! I Did It Again");
        }
        
    }
    
    useEffect(()=>{ 
        fetchPosts();
    },[]);

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("enviou");
        const filterPosts=originalPost.filter(post=>{
            return post.title.includes(search)
        })
        console.log(filterPosts);
        setPost(originalPost);
        setPost(filterPosts);
        toast.success("Busca realizada com sucesso");
        //se não encontrar nada buga 
    }
    const onChangeSearchText=(event)=>{
        console.log(event.target.value);
        setSearch(event.target.value);
    }

    const refreshPostList=()=>{
        setSearch("");
        getPosts();
    };
    
    if(post.length ===0){
        return (<h1>POSTS</h1>);
    }
    return(
    <div>
    <h1>POSTS</h1>
    <h3>Buscar Post</h3>
    <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={onChangeSearchText}/>
        <input type="submit" value="Buscar"/>
    </form>
    <p></p>{/*space*/}
    <button onClick={refreshPostList}>Atualizar</button>
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