function loginBackend(usuario, senha) {
    fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, senha })
    })
    .then(response => response.json())
    .then(data => {
        if (data.sucesso) {
            mensagemErro.style.color = "green";
            mensagemErro.textContent = "Login realizado com sucesso!";
            window.location.href = "/HTML/principal.html";
        } else {
            mensagemErro.style.color = "red";
            mensagemErro.textContent = data.mensagem || "Usuário ou senha incorretos!";
        }
    })
    .catch(error => {
        mensagemErro.style.color = "red";
        mensagemErro.textContent = "Erro na conexão com o servidor!";
        console.error(error);
    });
}
