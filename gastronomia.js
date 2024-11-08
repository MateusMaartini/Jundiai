// Filtra restaurantes pelo tipo de culinária e faixa de preço
document.getElementById("filtrar-btn").addEventListener("click", () => {
  const tipo = document.getElementById("tipo-filtro").value;
  const preco = document.getElementById("preco-filtro").value;

  document.querySelectorAll(".restaurante-card").forEach((card) => {
    const cardTipo = card.getAttribute("data-type");
    const cardPreco = card.getAttribute("data-price");

    card.style.display =
      (tipo === "" || cardTipo === tipo) &&
      (preco === "" || cardPreco === preco)
        ? "block"
        : "none";
  });
});

// Adiciona um comentário
document.querySelectorAll(".comentario-form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const textarea = form.querySelector("textarea");
    const comentario = textarea.value;
    const comentariosDiv = form.previousElementSibling;

    if (comentario.trim()) {
      const novoComentario = document.createElement("p");
      novoComentario.innerHTML = `<strong>Você:</strong> ${comentario}`;
      comentariosDiv.appendChild(novoComentario);
      textarea.value = ""; // Limpa o campo
    }
  });
});
