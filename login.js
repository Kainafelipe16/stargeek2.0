const formulario = document.getElementById("formulario");
const mensagem = document.querySelector(".mensagem");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));

    dados.forEach((elemento) => {
        if (elemento.email === email.value && elemento.senha === senha.value) {
            evento.preventDefault();
            let dados = JSON.parse(sessionStorage.getItem("loagdo")) || [];
            dados.push(
                {
                    email : email.value
                }
            )
            sessionStorage.setItem("logado", JSON.stringify(dados));
            mensagem.innerHTML = "<h1> Login efetuado com Sucesso !!! </h1>";
            return true;
        }

        else{
            mensagem.innerHTML = "<h1> E-mail ou senha incorretas </h1>";
            evento.preventDefault();
        }
    });
}