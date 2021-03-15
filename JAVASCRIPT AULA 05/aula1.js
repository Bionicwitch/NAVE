
let x=10;

const P=new Promise(
    (resolve, reject)=>{
        console.log("iniciou promise")
        
        setTimeout(() => {
            x=20;
            resolve();
        }, 3000);
        
    }
)
console.log(x);

P.then(()=>{
    console.log("exec sucesso", x);
})
    .catch(()=>{
    console.log("exec erro");
})
    .finally(()=>{
    console.log("fim");
})

console.log(x);