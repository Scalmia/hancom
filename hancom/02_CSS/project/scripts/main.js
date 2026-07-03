const toTopBtn = document.querySelector("#toTopBtn");

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
