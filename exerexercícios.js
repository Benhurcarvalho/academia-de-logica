// Criar uma variável e mostrar o valor dela no console

let nota = 7;
console.log("Primeiro console.log = ", nota);

// Reatribuir valor a variável 

nota = 8;
console.log("Segundo console.log = ", nota);

// Altera variável mediante a operação metemática 

nota = nota + 2;
console.log("Terceiro console.log = ", nota);

// if else 

if (nota >= 7 ){
    console.log("Passou!!");
} else if (nota >= 5 && nota < 7){
    console.log("Você precisa fazer a última prova");
} else {
    console.log("Recuperação");
}

// Recebe um valor Boolean a partir de uma condicional 

let result;
result = nota > 7;
console.log("Result consolelog = ", result);


// Arrays e Loops

const number = [10,8,7,6,5,76,13,1,43,201];

// imprima as estruturas 'index value' de um array e o seu tamanho

console.table(number);
console.log(number.length)
