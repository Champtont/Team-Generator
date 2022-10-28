//gather the things
//for getting mem name added to list
const memName = document.getElementById("memname");
const addButton = document.getElementById("add");
const waitList = document.getElementById("waitinglist");
//for calculating how many teams
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
let numInput = document.getElementById("numofteams");
//for adding/removing team cards
const boxRight = document.getElementById("boxright");
//for clearing the page
const resetButton = document.getElementById("reset");

//add name to waiting list
const addName = () => {
  const newName = document.createElement("p");
  newName.classList.add("pstyle");
  newName.innerText = memName.value;
  waitList.appendChild(newName);
};

addButton.addEventListener("click", addName);
//display number of teams
let count = 0;
numInput.value = count;
numInput.innerText = numInput.value;

console.log(numInput);

const increaseNum = () => {
  count++;
  numInput.value = count;
  numInput.innerText = numInput.value;
  addTeam();
  return;
};
plusButton.addEventListener("click", increaseNum);
const decreaseNum = () => {
  if (count >= 1) {
    count--;
    numInput.value = count;
    numInput.innerText = numInput.value;
    removeTeam();
    return;
  } else if (count === 0) {
    alert("can't decrease further");
    return;
  }
};
minusButton.addEventListener("click", decreaseNum);
//adding and removing Cards
const addTeam = () => {
  //create the things
  bigCard = document.createElement("div");
  const h2 = document.createElement("h2");
  const smallCard = document.createElement("div");
  //make it work
  bigCard.classList.add("bcard");
  boxRight.appendChild(bigCard);
  h2.innerText = `Team ${count}`;
  bigCard.appendChild(h2);
  smallCard.classList.add("scard");
  bigCard.appendChild(smallCard);
};

const removeTeam = () => {
  boxRight.removeChild(bigCard);
};
//reset button
const clearForm = () => {
  count = 0;
  numInput.value = count;
  numInput.innerText = numInput.value;
  memName.value = null;
  waitList.innerHTML = null;
};
resetButton.addEventListener("click", clearForm);
