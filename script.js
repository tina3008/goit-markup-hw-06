// modal window ++++++++++++++
const modalWindow = document.querySelector("#modal-open");
const modalBtn = document.querySelector("#modalBtn");
const openModalBtn = document.querySelector("#open-modal");

modalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalWindow.classList.remove("is-open");
});

openModalBtn.addEventListener("click", (e) => {
  modalWindow.classList.add("is-open");
});

// mobail window ++++++++++++++
const mobileWindow = document.querySelector("#mobail-open");
const mobailBtn = document.querySelector("#mobiail-btn");
const burgerBtn = document.querySelector(".burger");

burgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mobileWindow.classList.toggle("is-open");
});

mobailBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mobileWindow.classList.toggle("is-open");
});

// scroll to portfolio ++++++++++++++

