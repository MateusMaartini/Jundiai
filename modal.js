const infoButtons = document.querySelectorAll(".info-button");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-button");

infoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetModal = document.querySelector(
      button.getAttribute("data-target")
    );
    targetModal.style.display = "block";
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.parentElement.style.display = "none";
  });
});

window.addEventListener("click", (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
