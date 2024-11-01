// script.js
// Navegação Suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Filtro de Eventos
document.getElementById('filtrar-btn').addEventListener('click', () => {
  const data = document.getElementById('data-filtro').value;
  const tipo = document.getElementById('tipo-filtro').value;

  document.querySelectorAll('.timeline-item').forEach((item) => {
    const itemData = item.dataset.date;
    const itemTipo = item.dataset.type;

    item.style.display =
      (!data || itemData === data) && (!tipo || itemTipo === tipo)
        ? 'block'
        : 'none';
  });
});

// Formulário de Contato
document.getElementById('formContato').addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome && email && mensagem) {
    alert("Mensagem enviada com sucesso!");
    e.target.reset


    // Scroll Suave para o Botão "Explorar"
document.getElementById("explorar-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#atracoes").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Scroll Suave para Todos os Links Internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href");
    if (targetID && targetID.length > 1) {  // Ignora links inválidos
      document.querySelector(targetID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});




