'use strict'

const pessoas = [
    {
        nome: 'Walter White',
        mensagem: 'Vamos cozinhar hoje?',
        quantidade: '2',
        tempo: 'Há 10 minutos',
        foto: 'walter.jpg',
        contato: 'Sr White'
    },
    {
        nome: 'Rick Grimes',
        mensagem: 'Ainda tem zumbis na prisão',
        quantidade: '1',
        tempo: 'Há 5 minutos',
        foto: 'rick.jpg',
        contato: 'Rick'
    },
    {
        nome: 'Tony Soprano',
        mensagem: 'Tome cuidado com suas escolhas',
        quantidade: '3',
        tempo: 'Agora mesmo',
        foto: 'tony.jpg',
        contato: 'Tony Soprano'
    },
    {
        nome: 'Michael',
        mensagem: 'O Lester tem uma nova missão',
        quantidade: '1',
        tempo: 'Há 30 minutos',
        foto: 'Michael.jpg',
        contato: 'Michael'
    }
]

function mostrarCards(pessoas){

    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoas.foto}`
    img.alt = pessoas.nome

    const informacoes = document.createElement('div')
    informacoes.classList.add('informacoes')

    const nomeContato = document.createElement('div')
    nomeContato.classList.add('nomeContato')

    const nomeCtt = document.createElement('h3')
    nomeCtt.classList.add('nomeCtt')
    nomeCtt.textContent = pessoas.nome

    const qtdMensagem = document.createElement('p')
    qtdMensagem.classList.add('qtdMensagem')
    qtdMensagem.textContent = pessoas.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoas.mensagem

    nomeContato.replaceChildren(nomeCtt, qtdMensagem)

    informacoes.replaceChildren(nomeContato, mensagem)

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoas.tempo

    const contato = document.createElement('div')
    contato.classList.add('contato')

    const contato2 = document.createElement('p')
    contato2.textContent = pessoas.contato

    contato.replaceChildren(contato2)

    card.replaceChildren(img, informacoes, tempo, contato)

    container.appendChild(card)

}

pessoas.forEach(mostrarCards)