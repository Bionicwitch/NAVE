//import { useHistory } from 'react-router-dom';
import './App.css';
import  React  from "react";
/*import axios from "axios";
import { useEffect,useState } from "react";
import Posts from './Posts';
*/
const Comment =(post)=>{
    
    return(
        <div key = {post.id}>
            <h3>{post.name}</h3>
            <h3>{post.email}</h3>
            <p>{post.body}</p>
            {console.log(post.id)}
        </div>);
}

export default Comment;