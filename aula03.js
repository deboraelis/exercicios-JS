//exercicio calculo média
let nota1 = 7;
let nota2 = 7;
let nota3 = 7;

let mediaFinal = (nota1 + nota2 + nota3) / 3;
console.log(mediaFinal);

if (mediaFinal < 5){
    console.log('Você foi reprovado');
} else if (mediaFinal >=5 && mediaFinal <=7){
    console.log('Você está em recuperação');
} else {
    console.log('Você foi aprovado');
}