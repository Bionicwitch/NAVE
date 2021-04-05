import { useHistory } from 'react-router-dom';
import './App.css';
import  React  from "react";

const Sobre =()=>{
const history=useHistory();

const handleNavigation1=()=>{
    history.push("/");
};
    return(
    <div>
    <h1>SOBRE</h1>
    <button onClick={handleNavigation1}>HOME</button>
    </div>
    );
};
export default Sobre;