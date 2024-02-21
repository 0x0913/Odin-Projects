"use strict"

let gridSize;

const container = document.querySelector("#grid-container");
const buttons = document.querySelectorAll("button");

const createGrid = ((gridSize = 16) => {
    for(let i = 0; i < gridSize; i++){

        for(let i = 0; i < gridSize; i++){
            let grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.height =  500/(gridSize)+"px";
            grid.style.width = 700/(gridSize)+"px";
            container.appendChild(grid);
        }
    
    }
});

const painter = ( () =>{
    let grid = document.querySelectorAll(".grid");
    grid.forEach(item => {
        item.addEventListener('mouseover',(e) =>{
            e.target.classList.add("xhover");
        });
    });
});


createGrid();

painter();


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


buttons.forEach((button) => {
    button.addEventListener('click',(e) =>{
        switch(button.id){
            case "btnGridSize":

                while(true){
                    gridSize = parseInt(prompt("Enter Grid size 1-100:"));
                    
                    if(gridSize >= 1 && gridSize <= 100){
                        break;
                    }
                }
                removeAllChildNodes(container);
                createGrid(gridSize);
                painter();

                break;
            case "btnReset":

                removeAllChildNodes(container);
                createGrid(gridSize);
                painter();;

                break;
        }
    });

});
