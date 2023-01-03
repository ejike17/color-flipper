const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //Generate a function that will return a hex color
  let colorHex = hexColor(hex);
  document.body.style.backgroundColor = colorHex;
  color.textContent = colorHex;
});

//The function that generates the hex for color selection
function hexColor(arr) {
  let colorSelection = "#";
  for (let i = 0; i < 6; i++) {
    let randomArr = Math.floor(Math.random() * arr.length);
    colorSelection += arr[randomArr];
  }
  return colorSelection;
}
