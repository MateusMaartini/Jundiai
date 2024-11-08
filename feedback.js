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
