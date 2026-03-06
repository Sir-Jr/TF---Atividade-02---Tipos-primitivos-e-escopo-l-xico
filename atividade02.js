console.log("\n== 1) Tipos primitivos ==");

const minhaString = "Olá";
const meuNumero = 42;
const meuBooleano = true;
let meuIndefinido;
const meuNulo = null;
const meuBigInt = 123456789012345678901234567890n;
const meuSimbolo = Symbol("id");

console.log(typeof minhaString); // string
console.log(typeof meuNumero); // number
console.log(typeof meuBooleano); // boolean
console.log(typeof meuIndefinido); // undefined
console.log(typeof meuNulo); // object (bug histórico do JavaScript!)
console.log(typeof meuBigInt); // bigint
console.log(typeof meuSimbolo); // symbol

console.log("\n== 2) BigInt e Symbol ==");

const numeroGrande = 999999999999999999999n;
console.log("BigInt:", numeroGrande); // BigInt: 999999999999999999999n
console.log("Tipo do BigInt:", typeof numeroGrande); // Tipo do BigInt: bigint

const simbolo1 = Symbol("id");
const simbolo2 = Symbol("id");
console.log("simbolo1 === simbolo2:", simbolo1 === simbolo2); // simbolo1 === simbolo2: false
console.log("Tipo do Symbol:", typeof simbolo1); // Tipo do Symbol: symbol

console.log("\n== 3) Operadores matemáticos, lógicos e comparação ==");

// Exemplos matemáticos
console.log("5 + 3 =", 5 + 3); // 5 + 3 = 8
console.log("10 - 4 =", 10 - 4); // 10 - 4 = 6

// Exemplos lógicos
console.log("verdadeiro && falso =", true && false); // verdadeiro && falso = false
console.log("verdadeiro || falso =", true || false); // verdadeiro || falso = true

// Exemplos de comparação
console.log("5 == '5' =", 5 == "5"); // 5 == '5' = true (com conversão de tipo)
console.log("5 === '5' =", 5 === "5"); // 5 === '5' = false (sem conversão de tipo)
console.log("10 > 5 =", 10 > 5); // 10 > 5 = true

console.log("\n== 4) Concatenação e conversão dinâmica ==");

const resultado1 = 2 + "2";
console.log("2 + '2' =", resultado1); // 2 + '2' = 22 (concatenação de strings)

const resultado2 = 2 + (+"2");
console.log("2 + (+'2') =", resultado2); // 2 + (+'2') = 4 (conversão para número)

const resultado3 = "Valor: " + 100;
console.log("'Valor: ' + 100 =", resultado3); // 'Valor: ' + 100 = Valor: 100 (concatenação)

console.log("\n== 5) Escopo léxico e blocos ==");

// 5.1) {} sozinho cria um bloco
console.log("5.1) Bloco isolado:");
{
  const varBlocoInterno = "só aqui dentro";
  console.log("Dentro do bloco:", varBlocoInterno); // Dentro do bloco: só aqui dentro
}

// 5.2) De dentro pra fora (não acessa)
console.log("\n5.2) De dentro pra fora:");
{
  const varDentro = "interno";
  console.log("Dentro do bloco:", varDentro); // Dentro do bloco: interno
}

// 5.3) De fora pra dentro (acessa sim)
console.log("\n5.3) De fora pra dentro:");
const varFora = "externo";
{
  console.log("Usando variável de fora:", varFora); // Usando variável de fora: externo
}

// 5.4) var vazando do if
console.log("\n5.4) var vazando do if:");
if (true) {
  var varVazada = "vaza para fora";
}
console.log("var após if:", varVazada); // var após if: vaza para fora (var não tem escopo de bloco!)

console.log("\n== 6) Shadowing com const ==");

const bloco = "valor externo";
console.log("Antes do if:", bloco); // Antes do if: valor externo

if (true) {
  console.log("No if, acessando externo:", bloco); // No if, acessando externo: valor externo
  
  {
    const bloco = "outro valor"; // shadowing
    console.log("Dentro do bloco shadowed:", bloco); // Dentro do bloco shadowed: outro valor
  }
  
  console.log("Após bloco shadowed:", bloco); // Após bloco shadowed: valor externo (não foi alterado!)
}

console.log("Após if:", bloco); // Após if: valor externo (const externo preservado!)

console.log("\n== 7) Imutabilidade ==");

const minhaStringImut = "olá";
const resultadoMaiuscula = minhaStringImut.toUpperCase();
console.log("String original após toUpperCase sem reatribuir:", minhaStringImut); // String original após toUpperCase sem reatribuir: olá (não mudou!)

let minhaStringReat = "olá";
minhaStringReat = minhaStringReat.toUpperCase();
console.log("String com reatribuição:", minhaStringReat); // String com reatribuição: OLÁ

console.log("\n== 8) Assincronismo com setTimeout ==");

console.log("Nota: setTimeout entra na fila de eventos e roda depois do código síncrono atual.\n");

console.log("8.1) Exemplo A / setTimeout(B, 0) / C:");
console.log("A"); // A (executa primeiro - síncrono)
setTimeout(() => {
  console.log("B"); // B (executa por último - assíncrono)
}, 0);
console.log("C"); // C (executa segundo - síncrono)

console.log("\n8.2) Exemplo com timeouts diferentes:");
console.log("Síncrono"); // Síncrono (primeiro)
setTimeout(() => {
  console.log("Timeout 0ms"); // Timeout 0ms (segundo - fila de eventos)
}, 0);
setTimeout(() => {
  console.log("Timeout 100ms"); // Timeout 100ms (terceiro - após 100ms)
}, 100);