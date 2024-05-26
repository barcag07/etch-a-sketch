const gridContainer = document.querySelector("div");
gridContainer.setAttribute("style", "display: flex; flex-wrap: wrap; width: 400px; height: 400px; outline: 3px solid red;");

// const test = document.createElement("p");
// gridContainer.appendChild(test);

//Create the 16 x 16 (256) grids that go into the grid container

for (let i = 1; i <= 256; i++) {
     const gridItem = document.createElement("div");
     gridItem.classList.add("grid-item","item-" + i);
     // gridItem.textContent = i;
     gridItem.setAttribute ("style", "height: 25px; width: 25px; outline: 1px solid blue;");
     gridContainer.appendChild(gridItem);
}