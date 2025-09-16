const botaoDoacoes = document.getElementsByClassName("btn-secondary");
const botaoAdocao = document.getElementsByClassName("btn-primary");

botaoDoacoes.addEventListener("click", function(event) {
    window.location.href = "Doações-Patas-Do-Bem.html"
});

botaoAdocao.addEventListener("click", function(event) {
    window.location.href = "Adocao.html"
});