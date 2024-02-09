const submitBtn = document.querySelector(".submit-btn");
const ratingContainer = document.querySelector(".container");
const modalContainer = document.querySelector(".modal-container");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const rating = document.querySelector('.user-rating');

submitBtn.addEventListener("click", () => {
  ratingContainer.style.display = "none";
  modalContainer.style.display = "block";
});

const styleChange = (buttonId) => {
  if (buttonId === "one") {
    oneBtn.style.backgroundColor = "#fb7413";
    oneBtn.style.color = "white";
    twoBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    twoBtn.style.color = "#7c8798";
    threeBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    threeBtn.style.color = "#7c8798";
    fourBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    fourBtn.style.color = "#7c8798";
    fiveBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    fiveBtn.style.color = "#7c8798";
  } else if (buttonId === "two") {
    oneBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    oneBtn.style.color = "#7c8798";
    twoBtn.style.backgroundColor = "#fb7413";
    twoBtn.style.color = "white";
    threeBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    threeBtn.style.color = "#7c8798";
    fourBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    fourBtn.style.color = "#7c8798";
    fiveBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    fiveBtn.style.color = "#7c8798";
  } else if (buttonId === "three") {
    oneBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    oneBtn.style.color = "#7c8798";
    twoBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    twoBtn.style.color = "#7c8798";
    threeBtn.style.backgroundColor = "#fb7413";
    threeBtn.style.color = "white";
    fourBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    fourBtn.style.color = "#7c8798";
    fiveBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    fiveBtn.style.color = "#7c8798";
  } else if (buttonId === "four") {
    oneBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    oneBtn.style.color = "#7c8798";
    twoBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    twoBtn.style.color = "#7c8798";
    threeBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    threeBtn.style.color = "#7c8798";
    fourBtn.style.backgroundColor = "#fb7413";
    fourBtn.style.color = "white";
    fiveBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    fiveBtn.style.color = "#7c8798";
  } else if (buttonId === "five") {
    oneBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    oneBtn.style.color = "#7c8798";
    twoBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    twoBtn.style.color = "#7c8798";
    threeBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    threeBtn.style.color = "#7c8798";
    fourBtn.style.backgroundColor = "rgba(40, 49, 62, 0.748)";
    fourBtn.style.color = "#7c8798";
    fiveBtn.style.backgroundColor = "#fb7413";
    fiveBtn.style.color = "white";
  }
};

const buttonClick = () => {
  oneBtn.addEventListener("click", () => {
    styleChange("one");
    rating.innerText = `You selected 1 out 5`
  });

  twoBtn.addEventListener("click", () => {
    styleChange("two");
    rating.innerText = `You selected 2 out 5`
  });

  threeBtn.addEventListener("click", () => {
    styleChange("three");
    rating.innerText = `You selected 3 out 5`
  });

  fourBtn.addEventListener("click", () => {
    styleChange("four");
    rating.innerText = `You selected 4 out 5`
  });

  fiveBtn.addEventListener("click", () => {
    styleChange("five");
    rating.innerText = `You selected 5 out 5`
  });
};

buttonClick();
