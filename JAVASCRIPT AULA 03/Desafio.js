const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
      rua: 'Rua central',
      numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
  }
  

console.log(user.nome)
console.log(user.endereco.rua)
console.log(user.projetos[1])

// colchetes

console.log(user["nome"])
console.log(user.endereco["rua"])
console.log(user.projetos[1])

// variaveis

let {endereco: {numero}} = user;
console.log(numero)


//ARRAYS


const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]

students.forEach(item => console.log(item.name))
students.forEach(item =>{
    if (item.age>20) {
        console.log(item.age)
    }
})

const Bolsas = [];
students.forEach(item=>{
    if (item.scholarship==true) {
        Bolsas.push(item);
}});
console.log(Bolsas)

