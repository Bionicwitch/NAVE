const p1 =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("resolve p1");
        }, 3000);
    })
}

const p2 =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject("rejeita p2");
        }, 1000);
    })
}

async function func() {
    const res = await p1();
    //const res = await Promise.all(p1(),p2());
    console.log(res);
}

func(); 