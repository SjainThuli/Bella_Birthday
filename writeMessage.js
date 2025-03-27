const finishBtn = document.querySelector(".final-step");
const loverName = document.getElementById("name");
const loverMsg = document.getElementById("message");



finishBtn.addEventListener("click", () => {
    localStorage.setItem("loverName", loverName.value.trim());
    localStorage.setItem("loverMsg", loverMsg.value.trim());
    window.location.href = 'renderBouquet.html';
  });