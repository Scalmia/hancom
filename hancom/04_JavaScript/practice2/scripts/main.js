const a = document.querySelector("#a");
const b = document.querySelector("#b");
const operator = document.querySelector("#operator");
const result = document.querySelector("#result");
const flavor = document.querySelector("#flavor");
const flavorResult = document.querySelector("#flavorResult");
const multiply = (x, y) => x * y;

const a2 = document.querySelector("#a2");
const b2 = document.querySelector("#b2");
const functionResult = document.querySelector("#functionResult");

let n = 0;
const eventButton = document.querySelector("#eventButton");
const eventResult = document.querySelector("#eventResult");

const IMG_A = "../../images/God3.png";
const IMG_B = "../../images/God4.jpeg";
const My_image = document.querySelector("#image");

const greet = document.querySelector("#greet");
const nameInput = document.querySelector("#nameInput");
const saved = localStorage.getItem("name");
if (saved) {
  greet.textContent = `Hello, ${saved} !`;
}
document.querySelector("#saveName").addEventListener("click", () => {
  const name = nameInput.value;
  if (!name) { return;}
  localStorage.setItem("name", name);
  greet.textContent = `Hello, ${name} !`;
});
document.querySelector("#resetName").addEventListener("click", () => {
  localStorage.removeItem("name");
  greet.textContent = "Hello !";
});

My_image.setAttribute("src", IMG_A);
My_image.onclick = () => {
  const currentSrc = My_image.getAttribute("src");
  if (currentSrc === IMG_A) {
    My_image.setAttribute("src", IMG_B);
  } else {
    My_image.setAttribute("src", IMG_A);
  }
};

eventButton.addEventListener("mousedown", () => {
  n++;
  eventResult.textContent = `${n}번 눌렀어요.`;
});

document.querySelector("#checkFlavor").addEventListener("click", () => {
  if (flavor.value === "chocolate") {
    flavorResult.textContent = "맛있어요!";
  } else if (flavor.value === "vanilla") {
    flavorResult.textContent = "그냥 그래요.";
  } else {
    flavorResult.textContent = "싫어요!";
  }
});

document.querySelector("#calculate").addEventListener("click", () => {
  const x = Number(a.value);
  const y = Number(b.value);
  let res;
  if (operator.value === "+") {
    res = x + y;
  } else if (operator.value === "-") {
    res = x - y;
  } else if (operator.value === "*") {
    res = x * y;
  } else {
    res = x / y;
  }
  result.textContent = `${x} ${operator.value} ${y} = ${res}`;
});

document.querySelector("#calculateFunction").addEventListener("click", () => {
  functionResult.textContent = `${a2.value} x ${b2.value} = ${multiply(Number(a2.value), Number(b2.value))}`;
});