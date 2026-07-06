const title = document.querySelector("#title");
const btn = document.querySelector(".btn");
const nameInput = document.querySelector("#nameInput");
const out = document.querySelector("#out");
const show = (value) => {
  const shown = (typeof value === "object" && value !== null) ? JSON.stringify(value) : value;
  out.textContent = `${shown} (type: ${typeof value})`;
}

let empty;

document.querySelector("#strBtn").addEventListener("click", () => show("Hello, World!"));
document.querySelector("#numBtn").addEventListener("click", () => show(42));
document.querySelector("#boolBtn").addEventListener("click", () => show(true));
document.querySelector("#nullBtn").addEventListener("click", () => show(null));
document.querySelector("#undefBtn").addEventListener("click", () => show(empty));
document.querySelector("#arrBtn").addEventListener("click", () => show([1, 2, 3]));
document.querySelector("#objBtn").addEventListener("click", () => show({ name: "Alice", age: 30 }));

btn.addEventListener("click", () => {
  title.style.color = "red";
//   title.style.fontSize = "3rem";
  title.style.textShadow = "0 0 10px #3cc6f0, 0 0 20px #3cc6f0, 0 0 30px #3cc6f0, 0 0 40px #8b5cf6, 0 0 50px #8b5cf6, 0 0 60px #8b5cf6, 0 0 70px #8b5cf6";
  title.textContent = "Nice to see you!";
});

document.querySelector("#greetBtn").addEventListener("click", () => {
    let name = nameInput.value;
    out.textContent = `Hello, ${name}!`;
});