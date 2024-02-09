const submitBtn = document.querySelector(".submit-btn");
const ratingContainer = document.querySelector(".container");
const modalContainer = document.querySelector(".modal-container");

submitBtn.addEventListener("click", () => {
  ratingContainer.style.display = "none";
  modalContainer.style.display = "block";
});
