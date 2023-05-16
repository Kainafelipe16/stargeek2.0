const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.onsubmit = (evento) => {
    if (email.value == "") {
        evento.preventDefault();
        mensagem.innerHTML = "<h1> Digite seu E-mail! </h1>";
        email.focus();
        return null;
    }

    if (senha.value == "") {
        evento.preventDefault();
        mensagem.innerHTML = "<h1> Digite sua senha! </h1>";
        senha.focus();
        return null;
    }

    let dados = JSON.parse(localStorage.getItem("dados")) || [];
    dados.push({
        email : email.value,
        senha : senha.value
    })

    localStorage.setItem("dados", JSON.stringify(dados));
    evento.preventDefault();
    mensagem.innerHTML = "<h1> Parabéns Cadastro feito com sucesso! </h1>"

    setTimeout(() => {
        window.location.assign("login.html")
    }, 3000);
}