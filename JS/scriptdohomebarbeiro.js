/* =========================
   TROCA DE ABAS
========================= */
function trocar(secao) {

  const secoes = document.querySelectorAll("#inicio, #agendamentos, #servicos");

  secoes.forEach(s => {
    if (s) s.style.display = "none";
  });

  const atual = document.getElementById(secao);
  if (atual) {
    atual.style.display = "block";
  }

  // inicializa agendamento só quando abrir a aba
  if (secao === "agendamentos") {
    setTimeout(() => {
      inicializarAgendamentos();
    }, 50);
  }
}