const subtrai = (a, b) => a - b;

const testaZero = (valor) => {
    switch (valor) {
        case 0:
            console.log("é zero");
            break;
        default:
            console.log("não é zero");
            break;
    }
}
function testaSinal(a,b) {
    let resultado;
    resultado=subtrai(a,b);
    if (resultado == 0) {
        console.log("é zero");
    }else if ((a>0 && b<0)||(a<0 && b>0)) {
        console.log("Subtração entre números de sinais diferentes");
    }else{
        console.log("Subtração entre números de mesmo sinal");
    }
}