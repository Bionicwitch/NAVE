function imprimeSeparado(...rest) {
    console.log(rest);
}
imprimeSeparado(1,2,6,4)

const pessoa={
    nome:"Amanda",
    idade: 22,
    profissao: "Dançarina"
}

function imprimeNome({nome:x}) {
    console.log(x);
}

imprimeNome(pessoa)

const endereço={
    rua:"athaualpa dias",
    numero:"186"
}

function combinaObjetos(obj1, obj2) {
    const newObj={...obj1, ...obj2};
    console.log(newObj);
}

combinaObjetos(pessoa,endereço);

const primeiro=[10, 20, 30];
const segundo=[90, 80, 70];

function concatenaArrays(array1, array2) {
    const newArray= [...array1,...array2] 
    return newArray;
}

const resultado=concatenaArrays(primeiro, segundo);
console.log(resultado);