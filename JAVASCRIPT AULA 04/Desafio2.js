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

const somaIdades = colaboradores.slice().reduce((acumulador, pessoa)=>{
    return acumulador + pessoa.idade;
},0)
console.log(somaIdades);

const cargos = colaboradores.slice().reduce((acumulador, pessoa )=> {
    if (pessoa.cargo == "front-end") {
        return Object.assign(acumulador, {front: acumulador.front +1})
    }
    if (pessoa.cargo == "back-end") {
        return Object.assign(acumulador, {back: acumulador.back +1})
    }
    if (pessoa.cargo == "designer") {
        return Object.assign(acumulador, {designer: acumulador.designer +1})
    }
    if (pessoa.cargo == "estagiario") {
        return Object.assign(acumulador, {estagiario: acumulador.estagiario +1})
    }
}, {front: 0, back:0, designer:0, estagiario:0})

console.log(cargos)

const ordemCrescente = colaboradores.slice().sort((a,b)=>{
    return a.idade - b.idade; 
})


const ordemDecrescente = colaboradores.slice().sort((a,b)=>{
    return b.idade - a.idade; 
})

console.log(ordemCrescente)
console.log(ordemDecrescente)

const cargosPrecedencia =  {
    'estagiario': 1,
    'front-end': 2,
    'back-end': 3,
    'designer': 4
  } 
  
  const ordemCargo = colaboradores.sort((a,b) => {
  if (a.idade - b.idade == 0) {
      return cargosPrecedencia[a.cargosPrecedencia] - cargosPrecedencia[b.cargosPrecedencia];
  }
  return a.idade - b.idade;
  }
  )
  
  console.log(ordemCargo);