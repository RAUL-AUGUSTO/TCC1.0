function trocar(secao) {

  const secoes = document.querySelectorAll("#inicio, #funcionalidades");

  secoes.forEach(s => {
    s.style.display = "none";
  });

  const atual = document.getElementById(secao);

  if (atual) {
    atual.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
    trocar("inicio");
});