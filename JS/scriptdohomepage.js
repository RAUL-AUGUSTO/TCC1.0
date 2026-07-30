/* =========================
   TROCA DE ABAS
========================= */

function trocar(secao){

    const secoes = document.querySelectorAll(
        "#inicio, #agendar, #servicos"
    );

    secoes.forEach(secaoAtual => {
        secaoAtual.style.display = "none";
    });

    const secaoSelecionada =
        document.getElementById(secao);

    if(secaoSelecionada){
        secaoSelecionada.style.display = "block";
    }
}

/* =========================
   INICIALIZAÇÃO
========================= */

document.addEventListener("DOMContentLoaded", () => {

    trocar("inicio");

});