
const button = document.querySelector("#askButton");
button.onclick = function () {
    document.getElementById("questionArea").innerHTML = "";
    MagicBall()

}

function MagicBall() {

    let question = Math.floor(Math.random() * 19);

    const arr = ['É certo', 'É decididamente assim', 'Sem dúvida', 'Sim - definitivamente', 'Você pode confiar nisso',
        'A meu ver, sim', 'Provavelmente', 'Outlook bom', 'Os sinais apontam para sim', 'Resposta nebulosa, tente novamente',
        'Pergunte novamente mais tarde', 'Melhor não te dizer agora', 'Não é possível prever agora', 'Concentre-se e pergunte novamente',
        'Não conte com isso', 'Minha resposta é não', 'Minhas fontes dizem não', 'Outlook não muito bom',
        'Muito duvidoso.', 'sim', "desculpas isto não estava previsto"];

 
    let newElement = document.getElementById("answerText");
    newElement.textContent = JSON.stringify(arr[question]);
    document.body.appendChild(newElement)
   
}




