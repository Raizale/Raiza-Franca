//criação dos discos
let currentPlayer = "black"
let nextPlayer = "red"
let novoDisco = ""

let redDiscs = []
let blackDiscs = []
let collumnsHeight = [0, 0, 0, 0, 0, 0, 0]

let blackDisc = document.getElementsByClassName('black')
let redDisc = document.getElementsByClassName('red')
const newDiv = document.getElementById("base")
let base = document.getElementById("base")
let reset = document.getElementById("reset")

function criaDisc() {

    const newDisc = document.createElement("div")
    newDisc.className = currentPlayer
    return newDisc
}



//criação da tabela


function criaTabela() {
    for (V = 0; V < 7; V++) {
        let pilar = document.createElement("div")
        pilar.className = `Pilar${V}`
        for (H = 0; H < 6; H++) {
            let block = document.createElement("div")
            block.className = "Block"
            pilar.appendChild(block)
        }
        base.appendChild(pilar)
    }
}
criaTabela()
    // adicionando os handles de clicks nas colunas

const collumns = document.querySelectorAll("#base > div")

function clicks() {

    for (let w = 0; w < 7; w++) {

        collumns[w].addEventListener('click',
            function(event) {

                const index = Number(collumns[w].className.split("Pilar")[1])

                if (!limiteDeDiscos(index)) {

                    novoDisco = criaDisc()

                    const cell = collumns[w].children;
                    let boxHeight = collumnsHeight[index]
                    let cellIndex = [index, boxHeight]

                    collumnsHeight.splice(index, 1, boxHeight + 1)

                    jogadorAtual(cellIndex)
                    limiteDeDiscos()

                    cell[boxHeight].appendChild(novoDisco)

                    if (currentPlayer == "black") {
                        check(redDiscs)
                    } else {
                        check(blackDiscs)
                    }
                }
            })
    }
}
clicks()


// adição dos discos no tabuleiro
function limiteDeDiscos(ind) {
    if (collumnsHeight[ind] === 6) {
        return true
    }
    return false
}


//Troca de turno das cores
function jogadorAtual(cellIndex) {
    //anota nas seleções dos jogadores qual quadrado foi selecionado e passa o turno para o proximo jogador

    if (currentPlayer == "black") {
        nextPlayer = "red"
        playerSelections = blackDiscs;
    } else {
        nextPlayer = "black"
        playerSelections = redDiscs;
    }
    playerSelections.push(cellIndex)
    currentPlayer = nextPlayer;
}

//condições de vitórias
function check(player) {

    for (discs in player) {
        // //contagem de vitorias verticais e horizontais
        // let horizontalMatches = 0
        // let verticalMatches = 0
        // let diagonalUpMatches = 0
        // let diagonalDownMatches = 0

        //salvando o numero vertical e horizontal do disco sendo analizado
        let discColumn = player[discs][0]
        let discHeight = player[discs][1]
            //passando por cada um dos discos novamente para compara-los com o primeiro sendo usado
        if (horizontalWin(player, discColumn, discHeight) === 4 ||
            verticalWin(player, discColumn, discHeight) === 4 ||
            diagonalUpWin(player, discColumn, discHeight) === 4 ||
            diagonalDownWin(player, discColumn, discHeight) === 4) {
            // console.log("true")
            return win() + resetarPagina()

        }
    }
    return false
}
// }//condição de empate
function checkTie() {

    let count = 0

    for (Heights in collumnsHeight) {

        if (collumnsHeight[Heights] === 6) {
            count++
        }

    }

    if (count === 7) {

        return true
    }

    return false
}
//condição de vitoria horizontal 
function horizontalWin(player, discColumn, discHeight) {
    let verticalMatches = 0
    for (d in player) {
        //se o numero vertical for mesmo do original, começar contagem
        if (player[d][0] === discColumn) {
            for (i = 0; i < 4; i++) {

                if (player[d][1] === discHeight + i) {
                    verticalMatches++
                }
            }
        }
    }
    return verticalMatches
}
//condição de virotia vertical
function verticalWin(player, discColumn, discHeight) {
    let horizontalMatches = 0
    for (d in player) {
        //se o numero horizontal for mesmo do original, começar contagem
        if (player[d][1] === discHeight) {
            for (i = 0; i < 4; i++) {

                if (player[d][0] === discColumn + i) {
                    horizontalMatches++
                }
            }
        }
    }
    return horizontalMatches
}
//condição de vitoria diagonal crescente
function diagonalUpWin(player, discColumn, discHeight) {
    let diagonalUpMatches = 0
    for (d in player) {
        for (i = 0; i < 4; i++) {
            if (player[d][0] === discColumn + i && player[d][1] === discHeight + i) {
                diagonalUpMatches++
            }
        }
    }
    return diagonalUpMatches
}
//condição de vitoria diagonal descendente 
let win1 = [
    [0, 3],
    [1, 2],
    [2, 1],
    [3, 0]
]

function diagonalDownWin(player, discColumn, discHeight) {
    let diagonalDownMatches = 0
    for (d in player) {
        for (i = 0; i < 4; i++) {
            if (player[d][0] === discColumn + i && player[d][1] === discHeight - i) {
                diagonalDownMatches++
            }
        }
    }
    return diagonalDownMatches
}

function win() {

    let fraseVenceu = document.createElement("div")
    let venceufraseVenceu = document.createTextNode("Parabéns você Venceu!!!")
    fraseVenceu.appendChild(venceufraseVenceu)
    let destinoTitulo = document.getElementById("vitoria")
    destinoTitulo.appendChild(fraseVenceu)
}

function resetarPagina() {
    let botaoReset = document.createElement("button")
    let textoBotao = document.createTextNode("Jogar novamente")
    botaoReset.appendChild(textoBotao)
    let destinoBotao = document.getElementById("botao")
    destinoBotao.appendChild(botaoReset)
    let blocks = document.getElementsByClassName("Block")
    destinoBotao.onclick = function(){
        for(block in blocks){
    
            blocks[block].innerHTML = " "
        }
    
        collumnsHeight = [0, 0, 0, 0, 0, 0, 0]
        redDiscs = []
        blackDiscs = []
        currentPlayer = "black"
        nextPlayer = "red"
        novoDisco = ""
        let destinoTitulo = document.getElementById("vitoria")
        destinoTitulo.innerHTML = ""
        let destinoBotao = document.getElementById("botao")
        destinoBotao.innerHTML = ""
    }
}


