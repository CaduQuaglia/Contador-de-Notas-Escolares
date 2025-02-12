notas = [8,10,5];
var maior = 0;
var menor = 0;

media = (notas[0] + notas[1] + notas[2])/3;

if (media >= 7) {
    resultado = "APROVADO"
} else {
    resultado = "REPROVADO"
}

for(let i=0; i<=2; i++){
    if (notas[i] >= notas[0] && notas[i] >= notas[1] && notas[i] >= notas[2]){
        maior = notas[i];
    }
    if (notas[i] <= notas[0] && notas[i] <= notas[1] && notas[i] <= notas[2]){
        menor = notas[i];
    }
}

console.log('Nota 1: ' + notas[0])
console.log('Nota 2: ' + notas[1])
console.log('Nota 3: ' + notas[2])
console.log('Média: ' + media)
console.log(resultado)
console.log('Maior nota: ' + maior)
console.log('Menor nota: ' + menor)
