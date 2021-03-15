const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]
/*
console.log(students)
const alf=students.map(estudante => {
    return estudante.id;
    //return indice + " " + estudante.name;
})

console.log(alf)

//find o primeiro que encontra

const resul = students.find(esse => {
    return esse.scholarship;
})

console.log(resul)

//some descobre se existe retrona true

const teste = students.some(aqui =>{
    return !aqui.scholarship;
})

console.log(teste)

//every descobre se TODOS os elementos satisfazem a condição

const outro = students.every(quais =>{
    return quais.scholarship;
})
console.log(outro)

//filter filtra todos que satisfazem
// a condição e aloca em um novo array

const tip = students.filter(xu=>{
    return xu.scholarship;
})

console.log(tip)*/

//reduce

/*const resul= students.reduce((acc, estudante)=>{
    if (estudante.scholarship) {
    return{
        tembolsa: acc.tembolsa +1,
        sembolsa: acc.sembolsa
    }        
    } else {
    return{
        tembolsa: acc.tembolsa,
        sembolsa: acc.sembolsa+1
        } 
    }
}, {tembolsa : 0,
sembolsa : 0})

console.log(resul) */

// SORT

console.log(students)
const resultado = students.slice().sort((a,b)=>{
    //negativo quando a precede b
    //positivo quando b precede a
    //zero quando iguas
    if (a.age<b.age) {
        return +1       
    }
    if (a.age>b.age) {
        return -1
    }
    else{
        return 0
    }
    //return a.age - b.age; //crescente
    //return b.age - a.age; //decrescente
})
console.log(resultado)