console.log("\n== 1) Tipos primitivos ==");

// Declaração dos tipos primitivos
let texto = "Olá";
let numero = 42;
let booleano = true;
let indefinido = undefined;
let nulo = null;
let grande = 9007199254740991n;
let simbolo = Symbol("simbolo");

// typeof de cada um
console.log(typeof texto); // string
console.log(typeof numero); // number
console.log(typeof booleano); // boolean
console.log(typeof indefinido); // undefined
console.log(typeof nulo); // object (bug histórico do JavaScript)
console.log(typeof grande); // bigint
console.log(typeof simbolo); // symbol



console.log("\n== 2) BigInt e Symbol ==");

// BigInt
let numeroGrande = 123456789012345678901234567890n;
console.log(numeroGrande); // 123456789012345678901234567890n
console.log(typeof numeroGrande); // bigint

// Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false (cada Symbol é único)
console.log(typeof id1); // symbol



console.log("\n== 3) Operadores matemáticos, lógicos e comparação ==");

// Matemáticos
console.log(5 + 3); // 8
console.log(10 * 2); // 20

// Lógicos
console.log(true && false); // false
console.log(true || false); // true

// Comparação
console.log(5 > 3); // true
console.log(5 == "5"); // true (compara valor)
console.log(5 === "5"); // false (valor igual mas tipo diferente)



console.log("\n== 4) Concatenação e conversão dinâmica ==");

console.log(2 + "2"); // "22" (vira string e concatena)
console.log(2 + (+"2")); // 4 (+"2" converte para number)

console.log("Resultado: " + 10); // "Resultado: 10"



console.log("\n== 5) Escopo léxico e blocos {} ==");

// Bloco isolado
{
  let dentroBloco = "Estou dentro";
  console.log(dentroBloco); // "Estou dentro"
}
// console.log(dentroBloco); // erro se tentar acessar fora

// De fora para dentro
let fora = "Variável externa";

{
  console.log(fora); // "Variável externa"
}

// var vazando do bloco
if (true) {
  var vazou = "var escapou do bloco";
}

console.log(vazou); // "var escapou do bloco"



console.log("\n== 6) Shadowing com const ==");

const bloco = "valor original";

console.log(bloco); // "valor original"

if (true) {
  console.log(bloco); // "valor original"

  {
    const bloco = "outro valor";
    console.log(bloco); // "outro valor"
  }

  console.log(bloco); // "valor original"
}

console.log(bloco); // "valor original"



console.log("\n== 7) Imutabilidade ==");

let palavra = "javascript";

palavra.toUpperCase();
console.log(palavra); // "javascript" (não mudou)

palavra = palavra.toUpperCase();
console.log(palavra); // "JAVASCRIPT"



console.log("\n== 8) Assincronismo com setTimeout ==");
console.log("Explicação: setTimeout entra na fila e executa depois que o código atual termina.");

console.log("A");

setTimeout(() => {
  console.log("B"); // executa depois
}, 0);

console.log("C");

// Ordem real: A, C, B


console.log("\n== Exemplo com dois timeouts ==");

setTimeout(() => {
  console.log("Timeout 0ms"); // executa primeiro
}, 0);

setTimeout(() => {
  console.log("Timeout 100ms"); // executa depois
}, 100);

console.log("Fim do código");

// Ordem real:
// Fim do código
// Timeout 0ms
// Timeout 100ms