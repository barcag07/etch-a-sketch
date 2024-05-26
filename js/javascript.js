const gridContainer = document.querySelector("div");

// const test = document.createElement("p");
// gridContainer.appendChild(test);

//Create the 16 grids that go into the grid container
for (let i = 0; i < 16; i++) {
     const grid = document.createElement("div");
     gridContainer.append(grid);
}