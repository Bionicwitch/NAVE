const um=()=>{
    return new Promise ((resolve, reject)=>{
    setTimeout(() => {
        //console.log("entrou no primeiro")
        resolve("Ahazou passou no primeiro");
    }, 1000);
})}
const dois=()=>{
    return new Promise ((resolve, reject)=>{
    setTimeout(() => {
        reject("putz não passou");
    }, 2000);
})}
const tres=()=>{
    return new Promise ((resolve, reject)=>{
    setTimeout(() => {
        resolve("Ahazou passou no terceiro");
    }, 3000);
})}

Promise.all([um(), dois(), tres()]).then(()=>{
    console.log("deu tudo certo");

}).catch(()=>{
    console.log("algo deu errado");
})
