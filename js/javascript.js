


const gridContainer = document.querySelector("div");


const squareButton = document.createElement("button");
squareButton.textContent = "CHANGE SQUARES PER SIDE";
squareButton.setAttribute("style", "margin-bottom: 25px; padding: 15px;");
//add event listener to change squares
squareButton.addEventListener("click", function () {
     let numSquares;
     do {
          numSquares = prompt("How many squares would you like per side of the grid?");
          numSquares = Number(numSquares);
     }
     while (isNaN(numSquares) || numSquares < 1 || numSquares > 100);
     alert(numSquares);

     //remove the current grid
     const gridItem = document.querySelectorAll(".grid-item");
     for (let i = 0; i < gridItem.length; i++) {
          gridItem[i].remove();
     }
     
     grid.innerHTML = "";


     //create new grid Items
     for (let j = 0; j < numSquares  * numSquares; j++) {
          const newGridItem = document.createElement("div");
          newGridItem.classList.add("new-grid-item", "new-item-" + j);
          let squareHW = 960 / numSquares;
          newGridItem.style.height = squareHW + "px";
          newGridItem.style.width = squareHW + "px";
          newGridItem.style.outline = "1px solid black";
          // newGridItem.style.backgroundColor = "red";

          //make event listener for when div is hovered over
          newGridItem.addEventListener("mouseover", function() {
               newGridItem.style.backgroundColor = "red";
          });
          grid.appendChild(newGridItem);
     }
     // console.log(numSquares);
});
gridContainer.prepend(squareButton);

const grid = document.createElement("div");
grid.setAttribute("style", "display: flex; flex-wrap: wrap; width: 960px; height: 960px; outline: 3px solid black;");

// const test = document.createElement("p");
// gridContainer.appendChild(test);

//Create the 16 x 16 (256) grid items that go into the grid

for (let i = 1; i <= 256; i++) {
     const gridItem = document.createElement("div");
     gridItem.classList.add("grid-item","item-" + i);
     gridItem.setAttribute ("style", "height: 60px; width: 60px; outline: 1px solid black;");

     //Adding hover event listener to each grid item
     gridItem.addEventListener("mouseover", function() {
          //Specifically target the backgroundColor or else it will mess up if .setAttribute is used
          gridItem.style.backgroundColor = "red";
     });
     grid.appendChild(gridItem);
}


gridContainer.appendChild(grid);