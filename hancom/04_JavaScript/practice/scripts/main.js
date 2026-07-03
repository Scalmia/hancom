const title = document.querySelector("#title");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  title.style.color = "red";
//   title.style.fontSize = "3rem";
  title.style.textShadow = "0 0 10px #3cc6f0, 0 0 20px #3cc6f0, 0 0 30px #3cc6f0, 0 0 40px #8b5cf6, 0 0 50px #8b5cf6, 0 0 60px #8b5cf6, 0 0 70px #8b5cf6";
  title.textContent = "Nice to see you!";
});