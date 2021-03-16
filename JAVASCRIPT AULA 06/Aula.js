const Pessoas =[
    {
        nome: "Amanda",
        idade:{a:22,b:50}
    },
    {
        nome: "Nicolas",
        idade: 23
    },
    {
        nome: "Jessica A",
        idade: 22
    },
    {
        nome: "Jessica D",
        idade: 22
    },
    {
        nome: "Stephanie",
        idade: 21
    },
    {
        nome: "Karina",
        idade: 22
    }
]

/*let idadesSomadas=0;

for (let i = 0; i < Pessoas.length; i++) {
    //const element = array[i];
    idadesSomadas+=
    Pessoas[i].idade
}*/

const [{idade:{a:x,b:z}},{idade:y}] = Pessoas;
console.log(x,y,z);
