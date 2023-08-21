/* ************    EXERCICIO 1 AO 3!!!

let num1 = 8 ;
let num2 = 9 ;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

if (num1 > num2) {
    console.log('num1 é maior');
}
else if (num1 < num2) {
    console.log('num1 é menor');
}
else {
    console.log('os numeros são iguais');
} */

/* *********    EXERCICIO 4!!!

let lado1 = 60;
let lado2 = 60;
let lado3 = 60;

if (lado1 + lado2 + lado3 === 180){
    console.log(true);
}
else {
    console.log(false);
}; */

/* *********** EXERCICIO 5!!!!
let chessPiece = 'bispo';

    switch (chessPiece.toLowerCase()){
        case 'torre':
            console.log('Torre -> Quantas casas quiser para a horizontal');
        break;
    case 'peao':
        console.log('Peão -> Quantas casas quiser na diagonal');
        break;
     case 'rainha':
        console.log('Rainha -> Anda quantas casas quiser para todos os lados');
        break;
        default:
        console.log('Erro, peça inválida');   
    }; */

    /* ********** EXERCICIO 6!!!!!!
    let num1 = 3;
    let num2 = 4;
    let num3 = 5;
    let numPar = false;

    if ((num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0)) {
    isEven = true;
};

console.log(isEven); */

let aliquotINSS;
let aliquotIR;

let grossSalary = 3000;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
};

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: R$" + (baseSalary - aliquotIR));


