let email = document.getElementById("e-mail")
let reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;



function valida_form() {
    if (!reg.test(email.value)) {
        alert("Email inválido");
        email.focus();
        return false
    } else {
        alert("Bem Vindo!!")
    }
}


document.getElementById("registro").onclick = function() {

    valida_form()
}