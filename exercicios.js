/**
 * EXERCÍCIOS - Tipos Primitivos e Escopo Léxico
 * Resolva os exercícios abaixo
 */

console.log("=== EXERCÍCIO 1: Tipos Primitivos ===");
// 1. Declare variáveis de todos os tipos primitivos (string, number, boolean, undefined, null, bigint, symbol)
// 2. Use console.log e typeof para exibir cada um


console.log("\n=== EXERCÍCIO 2: Diferença entre == e === ===");
// 1. Compare "10" == 10 e "10" === 10
// 2. Explique por que os resultados são diferentes


console.log("\n=== EXERCÍCIO 3: Operadores Lógicos ===");
// 1. Declare duas variáveis booleanas: ativo = true, premium = false
// 2. Use && para verificar se ambas são verdadeiras
// 3. Use || para verificar se pelo menos uma é verdadeira
// 4. Use ! para negar o valor de ativo


console.log("\n=== EXERCÍCIO 4: Conversão de Tipos ===");
// 1. Converta a string "123" para número
// 2. Multiplique por 2
// 3. Converta o resultado de volta para string e concatene com " reais"


console.log("\n=== EXERCÍCIO 5: Escopo Léxico ===");
// 1. Declare uma constante fora do bloco: mensagem = "externa"
// 2. Crie um bloco {} e acesse a variável externa dentro dele
// 3. Declare uma nova constante com o mesmo nome dentro do bloco (shadowing)
// 4. Compare os valores antes e depois do bloco


console.log("\n=== EXERCÍCIO 6: BigInt ===");
// 1. Crie um número muito grande: 123456789012345678901234567890
// 2. Some 1 a este número
// 3. Divida por 2
// 4. Use typeof para confirmar que é bigint


console.log("\n=== EXERCÍCIO 7: Symbol ===");
// 1. Crie dois símbolos com a mesma descrição
// 2. Compare se são iguais (===)
// 3. Explique por que são diferentes


console.log("\n=== EXERCÍCIO 8: var vs let vs const ===");
// 1. Use var, let e const para declarar três variáveis dentro de um bloco if
// 2. Tentar acessá-las fora do bloco
// 3. Observe qual "vaza" e qual não sai do escopo


console.log("\n=== EXERCÍCIO 9: Assincronismo ===");
// 1. Use console.log para imprimir "Primeiro"
// 2. Use setTimeout com callback que imprime "Segundo" (0ms)
// 3. Use console.log para imprimir "Terceiro"
// 4. Qual será a ordem de execução?


console.log("\n=== EXERCÍCIO 10: Imutabilidade ===");
// 1. Declare uma string: texto = "javascript"
// 2. Use .toUpperCase() SEM reatribuir
// 3. Imprima a variável e veja que não mudou
// 4. Agora reatribua e veja a diferença
