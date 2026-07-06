const n = document.querySelector("#n");
const result = document.querySelector("#result");

document.querySelector("#run").addEventListener("click", () => {
  result.innerHTML = "";
  const count = Number(n.value);
  for (let i = 1; i <= count; i++) {
    const li = document.createElement("li");
    li.textContent = `Number ${i}`;
    result.appendChild(li);
  }
});

document.querySelector("#countdown").addEventListener("click", () => {
  result.innerHTML = "";
  let i = Number(n.value);
  while (i > 0) {
    const li = document.createElement("li");
    li.textContent = i;
    result.appendChild(li);
    i--;
  }
});
