const buyTicket = document.querySelectorAll(".buy-ticket");
const modal = document.querySelector(".modal");
const close = document.querySelector(".fa-times");
const container = document.querySelector(".modal-container");

for (const i of buyTicket) {
  i.addEventListener("click", openModal);
}

close.onclick = closeModal;

function openModal() {
  modal.classList.remove("close");
}

function closeModal() {
  modal.classList.add("close");
}

function notcloseModal(e) {
  e.stopPropagation();
}

modal.onclick = closeModal;
container.onclick = notcloseModal;
