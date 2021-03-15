const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]

console.log(colaboradores)

const um = colaboradores.filter(nome=>{
        return nome.name;
})
console.log(um)

const dois = colaboradores.filter(esse=>{
    if (esse.cargo=="front-end") {
        return esse        
    }
})

console.log(dois)

const primeiro=colaboradores.find(prim=>{
    return prim.idade>23;        
})

console.log(primeiro)

colaboradores.find(maior=>{
    if (maior.idade>18) {
        console.log(maior);
    }
})

const estagiarios = colaboradores.some(teste=>{
   return teste.cargo=="estagiario"
})

console.log(estagiarios)