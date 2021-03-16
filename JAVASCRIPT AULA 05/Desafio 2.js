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

async function imprime() {
    try {
    const resultado = await Promise.all([um(), dois(), tres()]);
    console.log(resultado);
    } catch (error) {
    console.log(error);
    } 
}

imprime();

