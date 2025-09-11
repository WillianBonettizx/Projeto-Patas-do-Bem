// Captura elementos do HTML
const inputUsuario = document.getElementById("usuario-login");
const inputSenha = document.getElementById("senha-login");
const botaoLogin = document.getElementById("botao-login");
const mensagemErro = document.getElementById("mensagem-erro");

// Adiciona evento de clique no botão
botaoLogin.addEventListener("click", function(event) {
    event.preventDefault(); // impede envio do formulário
    mensagemErro.textContent = ""; // limpa mensagem de erro anterior

    const usuario = inputUsuario.value.trim();
    const senha = inputSenha.value.trim();

    if (usuario === "" || senha === "") {
        mensagemErro.style.color = "red";
        mensagemErro.textContent = "Por favor, preencha todos os campos!";
        return;
    }


    if (usuario === "willian bonetti" && senha === "Youarezx04") {
        window.location.href = "principal.html";
    } else {
        mensagemErro.style.color = "red";
        mensagemErro.textContent = "Usuário ou senha incorretos!";
    }
});
