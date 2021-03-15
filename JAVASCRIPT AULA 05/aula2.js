const p1 =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, 3000);
    })
}

const p2 =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject();
        }, 1000);
    })
}

const p3 =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, 2000);
    })
}
/*
Promise.all([p1(), p2(), p3()]).then(()=>{
    console.log("todas as promisses deram certo")
}).catch(()=>{
    console.log("alguma promise deu erro")
})*/

/*
p1().then(()=>{
    console.log("resolveu p1")
    p2().then(()=>{
        console.log("resolveu p2")
        p3().then(()=>{
            console.log("resolveu p3")
        }).catch(()=>{
            console.log("rejeitou p3")
        })
    })
})*/
Promise.race([p1(), p2(), p3()]).then(res=>{
    console.log("sucesso", res)
}).catch(err=>{
    console.log("alguma promise deu erro", err)
})