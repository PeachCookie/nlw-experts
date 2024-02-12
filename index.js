const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "vari myVar = 5;",
        "let myVar = 5;",
        "myVar = 5;",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Selecionar múltiplos elementos HTML.",
        "Selecionar um único elemento HTML.",
        "Criar um novo elemento HTML.",
      ],
      correta: 1
    },
    {
      pergunta: "O que significa o termo 'NaN' em JavaScript?",
      respostas: [
        "'Not a Number' - Não é um número.",
        "'New Associated Number' - Novo número associado.",
        "'Negative Absolute Number' - Número absoluto negativo.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador lógico para 'ou' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'addEventListener()' é usado para fazer em JavaScript?",
      respostas: [
        "Remover um ouvinte de evento de um elemento.",
        "Adicionar um ouvinte de evento a um elemento.",
        "Modificar o estilo de um elemento.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "<!-- Este é um comentário de uma linha -->",
        "/* Este é um comentário de uma linha */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
      respostas: [
        "Arredondar um número para o inteiro mais próximo.",
        "Converter uma string em um número inteiro.",
        "Calcular a raiz quadrada de um número.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado de 'typeof null' em JavaScript?",
      respostas: [
        "'object'",
        "'null'",
        "'undefined'",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Verifica se dois valores são iguais em valor e tipo.",
        "Atribui um valor a uma variável.",
        "Verifica se dois valores são iguais em valor, mas não em tipo.",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'map()' faz em JavaScript?",
      respostas: [
        "Altera os elementos de um array original.",
        "Cria um novo array com os resultados de uma função aplicada a cada elemento do array original.",
        "Remove elementos duplicados de um array.",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector ('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) { 
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem)
  }