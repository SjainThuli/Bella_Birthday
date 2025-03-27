const buttons = document.querySelectorAll("[data-carousel-button]");
const flowersCount = document.getElementById("flowersLeft");
const chooseFlowersBtn = document.querySelector(".next-step");
let flowerCombinations = [];
let i = 0;
flowersCount.innerHTML = i.toString() + "/4";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

chooseFlowersBtn.addEventListener("click", () => {
  if (flowerCombinations.length < 4) {
    const activeSlide = document.querySelector("[data-active]");
    const flowerId = [...activeSlide.parentElement.children].indexOf(activeSlide);

    flowerCombinations.push(flowerId);
    i += 1;
    flowersCount.innerHTML = i.toString() + "/4";
    console.log("Selected flowers:", flowerCombinations);

    if (flowerCombinations.length === 4) {
      localStorage.setItem("selectedFlowers", JSON.stringify(flowerCombinations));
      chooseFlowersBtn.innerHTML = "Go to the next step!";
    }
  } else {
    // Already selected 4, go to next step
    window.location.href = "chooseVase.html";
  }
});
