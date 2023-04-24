const text = document.getElementById("text");
const rem = document.getElementById("number2");
const totalChar = document.getElementById("number1");
let number = prompt("Koliko karaktera maksimalno zelite da unesete?");
rem.innerText = number;
let count = number;
let total = 0;
text.maxLength = number;
console.log(text.maxLength);
text.addEventListener("keydown", (e) => {
  if (e.key !== "Backspace" && total < number && count > 0) {
    total++;
    count--;
    totalChar.innerText = total;
    rem.innerText = count;
  }
  if (e.key === "Backspace" && total > 0 && count < number) {
    count++;
    total--;
    totalChar.innerText = total;
    rem.textContent = count;
  }
});
