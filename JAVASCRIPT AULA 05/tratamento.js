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
            resolve("resolve p2");
        }, 1000);
    })
}

async function func() {
    //const res = await p1();
    try {
        const res = await Promise.all([p1(),p2()]);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
    finally{
        console.log("resolveu tudoh")
    }
}

func(); 