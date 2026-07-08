const n = document.querySelector("#n");
const result = document.querySelector("#result");

const text = document.querySelector("#text");
const result2 = document.querySelector("#result2");
const result3 = document.querySelector("#result3");
const info = document.querySelector("#info");
const fruit = document.querySelector("#fruit");
const fruits = ["사과", "바나나"];

const person = {
  name: "Alice",
  age: 30,
}
const result4 = document.querySelector("#result4");
const renderPerson = () => {
  result4.textContent = `이름: ${person.name}, 나이: ${person.age}`;
};
renderPerson();

document.querySelector("#up").addEventListener("click", () => {
  person.age++;
  renderPerson();
});
document.querySelector("#rename").addEventListener("click", () => {
  person.name = "Lynn";
  renderPerson();
});

const render = () => {
  result3.textContent = fruits.join(", ");
  info.textContent = `총 ${fruits.length}개의 과일이 있습니다.`;
};
render();

document.querySelector("#add").addEventListener("click", () => {
  if (!fruit.value) { return; }
  fruits.push(fruit.value);
  fruit.value = "";
  render();
});

document.querySelector("#run2").addEventListener("click", () => {
  const value = text.value;
  result2.innerHTML =
    `글자 수(length): ${value.length}` + "<br>" +
    `대문자(toUpperCase): ${value.toUpperCase()}` + "<br>" +
    `소문자(toLowerCase): ${value.toLowerCase()}` + "<br>" +
    `공백 제거(trim): ${value.trim()}` + "<br>" +
    `e->E 바꾸기(replace): ${value.replace("e", "E")}`;
});

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
