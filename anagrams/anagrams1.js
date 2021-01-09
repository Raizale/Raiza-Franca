const button = document.getElementById("findButton");
button.onclick = function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);

}

function getAnagramsOf(text) {
    let arr = []
    text = alphabetize(text)
    for (let index = 0; index < palavras.length; index++) {
        let currentWord = alphabetize(palavras[index])

        if (text === currentWord) {
            arr.push(palavras[index])
        }
    } 
    
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(arr);
    document.body.appendChild(newElement)

}


function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();

}










//transforma em minusculo
//Divide um objeto string em substrings
//coloca em ordem
//transforma o array em string
//remove os espaços em branco

// for para percorrer palavras
//verificar se o que tiver nessa posição atual de palavras for igual a typedtext
// atribui o na tela com o Dom



//comparar duas strings
