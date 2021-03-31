import { useEffect } from "react";



const Title= ({text})=>{

    useEffect(()=>{
        console.log("Aqui");
    },[])
    useEffect(()=>{
        console.log("mudou title prop teste");
    },[text])

    return <h1>{text}</h1>
}

export default Title;