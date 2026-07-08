class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return `${this.name} says Woof!`;
  }
}

const result = document.querySelector("#result");

const leo = new Dog("Leo");
const max = new Dog("Max");

document.querySelector("#bark").addEventListener("click", () => {
  result.textContent = `${leo.bark()} ${max.bark()}`;
});

const price = 1000;
const count = 3;
console.log(`가격: ${price}원`);
console.log(`총 가격: ${price * count}원`);
console.log(price, count, "확인");

console.log(typeof price);
console.log(typeof "3");

const sum = price + count;
debugger;
console.log(`총 합계: ${sum}원`);

const buyBtn = document.querySelector("#buy");
buyBtn.addEventListener("click", () => {});

