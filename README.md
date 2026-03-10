# Atividade - Aula 02 (JavaScript / Node.js)

## 📚 Disciplina

Tecnologias para Front-End / Desenvolvimento Web

## 🎯 Objetivo

Criar um único arquivo em **Node.js** que demonstre, de forma prática e executável, os principais conceitos estudados na aula:

* Tipos primitivos
* Uso do `typeof`
* BigInt e Symbol
* Operadores matemáticos, lógicos e de comparação
* Concatenação e conversão dinâmica de tipos
* Escopo léxico com blocos `{ }`
* Diferença entre `var`, `let` e `const`
* Shadowing de variáveis
* Imutabilidade de tipos primitivos
* Assincronismo com `setTimeout` (Event Loop)

O programa imprime no **console** exemplos de cada conceito com comentários indicando o resultado esperado.

---

## 📂 Estrutura do projeto

```
atividade-aula02.js
README.md
```

---

## ▶️ Como executar

1. Instale o **Node.js** no computador.

2. Clone este repositório ou baixe os arquivos.

3. No terminal, navegue até a pasta do projeto.

4. Execute o comando:

```bash
node atividade-aula02.js
```

O terminal exibirá várias seções numeradas demonstrando os conceitos da aula.

---

## 🧠 Conteúdos demonstrados

### 1️⃣ Tipos primitivos

Declaração de variáveis com tipos:

* string
* number
* boolean
* undefined
* null
* bigint
* symbol

Uso do operador `typeof` para identificar o tipo de cada variável.

---

### 2️⃣ BigInt e Symbol

Demonstração de:

* criação de números grandes com `BigInt`
* criação de identificadores únicos com `Symbol`
* comparação entre símbolos

---

### 3️⃣ Operadores

Exemplos de:

* operadores matemáticos (`+`, `*`)
* operadores lógicos (`&&`, `||`)
* operadores de comparação (`>`, `==`, `===`)

---

### 4️⃣ Concatenação e conversão de tipos

Demonstra como o operador `+` pode:

* somar números
* concatenar strings
* converter tipos dinamicamente

---

### 5️⃣ Escopo léxico

Uso de blocos `{}` para demonstrar:

* variáveis acessíveis apenas dentro do bloco
* acesso de variáveis externas dentro de blocos
* comportamento da palavra-chave `var`

---

### 6️⃣ Shadowing com const

Exemplo de **sombreamento de variáveis**, onde uma variável interna possui o mesmo nome de uma externa sem alterá-la.

---

### 7️⃣ Imutabilidade

Demonstra que **strings são imutáveis** em JavaScript, mostrando que métodos como `toUpperCase()` retornam um novo valor.

---

### 8️⃣ Assincronismo

Exemplo do funcionamento do **Event Loop** usando `setTimeout`, mostrando que funções assíncronas entram na fila de execução.

---

## 👨‍💻 Autor

Atividade desenvolvida para fins acadêmicos utilizando **JavaScript e Node.js**.
