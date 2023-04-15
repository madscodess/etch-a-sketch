console.log("hello i am working")
let x = 16;
let y = 16;
let clear = document.querySelector("button");
let container = document.querySelector(".container"); 

for (i = 1; i <= (x*y); i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);

    console.log(i);
    box.textContent = i;
    console.log("hello grid created")
}


// //reset the grid & give user a prompt for new grid
// function resetGrid() {

// }

// //create grid with prompt from user
// function createGrid (size){
//     console.log("CGG hello i am working")
// }

// //clear grid on click - turns background black
// function clearGrid (){
//     console.log("clearGrid")
// }

// createGrid();