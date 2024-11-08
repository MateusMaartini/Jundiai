// Filtro de Eventos
document.getElementById("filtrar-btn").addEventListener("click", () => {
  const data = document.getElementById("data-filtro").value;
  const tipo = document.getElementById("tipo-filtro").value;

  document.querySelectorAll(".evento-item").forEach((item) => {
    const itemData = item.dataset.date;
    const itemTipo = item.dataset.type;

    item.style.display =
      (!data || itemData === data) && (!tipo || itemTipo === tipo)
        ? "block"
        : "none";
  });
});
