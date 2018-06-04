const stephen = document.querySelector(".clickme");
const audio = new Audio('sound.mp3');

stephen.addEventListener("click", (event) => {
  audio.play();
});
