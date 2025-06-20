const buttons = document.querySelectorAll("[data-carousel-button]");
const chooseVaseBtn = document.querySelector(".next-step");

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

chooseVaseBtn.addEventListener("click", () => {
  const activeSlide = document.querySelector("[data-active]");
  const vaseSelection = [...activeSlide.parentElement.children].indexOf(activeSlide);
  localStorage.setItem("selectedVase", vaseSelection);
  window.location.href = 'writeMessage.html';
});