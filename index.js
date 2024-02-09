const submitBtn = document.querySelector(".submit-btn");
const ratingContainer = document.querySelector(".container");
const modalContainer = document.querySelector(".modal-container");
const numberBtn = document.querySelector(".number");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");

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
  });

  twoBtn.addEventListener("click", () => {
    styleChange("two");
  });

  threeBtn.addEventListener("click", () => {
    styleChange("three");
  });

  fourBtn.addEventListener("click", () => {
    styleChange("four");
  });

  fiveBtn.addEventListener("click", () => {
    styleChange("five");
  });
};

buttonClick();
