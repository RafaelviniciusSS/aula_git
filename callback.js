// let meucallback = () => {//Callback function definida
//     console.log('executando a função meuCallback')
// }

// setTimeout(meucallback,6000); 

const somar= ( numero1,  numero2) => numero1 + numero2; 

let calculadora= (numero1, numero2,  operacao) =>{
    return operacao(numero1, numero2);  
}
console.log(calculadora(19,5,somar))




