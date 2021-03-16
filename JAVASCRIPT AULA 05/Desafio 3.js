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

async function func() {
    try {
    const resultado1 = await Promise.all([um(), tres()]);
    //const resultado2 = await tres();
    //não entendi pq quando coloco a que rejeita ele para
    console.log(resultado1);
    //console.log(resultado2);

    } catch (error) {
    console.log(error);
    } finally{
        console.log("Fim da execução")
    }
}

func();