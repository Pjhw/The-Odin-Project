const sketchBoard = document.querySelector("#sketch-board");
const buttons = document.querySelector("#button-container");

const sketchBoardColor = "#D0F4EA";

const pixelSizes = [4, 5, 10, 20, 25, 50, 100];
let pixelIndex = 3;

const boardSizes = [100, 200, 300, 400, 500, 600, 700];
let boardIndex = boardSizes.length-1;




function drawBoard(boardWidth, squareWidth){
    const squaresPerRow = boardWidth/squareWidth;
    const squaresPerColumn = boardWidth/squareWidth;

    let numberOfSquares = squaresPerRow * squaresPerColumn;


    sketchBoard.style["width"] = "" + boardWidth.toString() + "px";
    sketchBoard.style["height"] = "" + boardWidth.toString() + "px";

    sketchBoard.style["grid-template-columns"] = "repeat(" +
        squaresPerColumn.toString() + ", " + squareWidth.toString() + "px)";

    for(let i = 0; i < numberOfSquares; i++){
        sketchBoard.appendChild(createSquare());
    }
}

function redrawBoard(boardWidth, squareWidth){
    let squares = sketchBoard.querySelectorAll(".sketch-square");

    for(let i = 0; i < squares.length; i++){
        sketchBoard.removeChild(squares[i]);
    }


    drawBoard(boardWidth, squareWidth);
}

function clearBoard(){
    let squares = sketchBoard.querySelectorAll(".sketch-square");

    for(let i = 0; i < squares.length; i++){
        squares[i].style["background-color"] = sketchBoardColor;
    }
}

function createSquare(){
    let newDiv = document.createElement("div");
    newDiv.style.cssText = "background-color: #D0F4EA;";
    newDiv.classList.add("sketch-square");
    newDiv.addEventListener("mouseover", function (e){
        e.target.style["background-color"] = "black";
    });

    return newDiv;
}

function makeButtons(){
    //Clear Button
    const clear = document.createElement("button");
    clear.classList.add("button");
    clear.innerHTML = "Clear";
    clear.addEventListener("click", function(e){
        clearBoard();
    });

    buttons.appendChild(clear);



    //Pixel Size Label and Buttons
    const pixelDecrease = document.createElement("button");
    pixelDecrease.classList.add("button");
    pixelDecrease.style["margin-left"] = "20px";
    pixelDecrease.style["margin-right"] = "5px";
    pixelDecrease.innerHTML = "v";
    pixelDecrease.addEventListener("click", function(e){
        changePixelSize("decrease");
    });
    buttons.appendChild(pixelDecrease);


    const pixelSizeLabel = document.createElement("Label");
    pixelSizeLabel.classList.add("size-label");
    pixelSizeLabel.innerHTML = "Pixel Size";
    buttons.appendChild(pixelSizeLabel);


    const pixelIncrease = document.createElement("button");
    pixelIncrease.classList.add("button");
    pixelIncrease.style["margin-left"] = "5px";
    pixelIncrease.style["margin-right"] = "20px";
    pixelIncrease.innerHTML = "^";
    pixelIncrease.addEventListener("click", function(e){
        changePixelSize("increase");
    });

    buttons.appendChild(pixelIncrease);


    //Board Size Label and Buttons
    
    const boardDecrease = document.createElement("button");
    boardDecrease.classList.add("button");
    boardDecrease.style["margin-left"] = "20px";
    boardDecrease.style["margin-right"] = "5px";
    boardDecrease.innerHTML = "v";
    boardDecrease.addEventListener("click", function(e){
        changeBoardSize("decrease");
    });

    buttons.appendChild(boardDecrease);

    
    const boardSizeLabel = document.createElement("Label");
    boardSizeLabel.classList.add("size-label");
    boardSizeLabel.innerHTML = "Board Size";
    buttons.appendChild(boardSizeLabel);

    
    const boardIncrease = document.createElement("button");
    boardIncrease.classList.add("button");
    boardIncrease.style["margin-left"] = "5px";
    boardIncrease.style["margin-right"] = "20px";
    boardIncrease.innerHTML = "^";
    boardIncrease.addEventListener("click", function(e){
        changeBoardSize("increase");
    });

    buttons.appendChild(boardIncrease);
    
    

}


function changePixelSize(choice){
    
    if(choice === "increase"){
        if(pixelIndex >= pixelSizes.length - 1) {return;}
        pixelIndex++;
    }

    else if(choice === "decrease"){
        if(pixelIndex <= 0){return;}
        pixelIndex--;
    }

    redrawBoard(boardSizes[boardIndex], pixelSizes[pixelIndex]);
    
}

function changeBoardSize(choice){
    
    if(choice === "increase"){
        if(boardIndex >= boardSizes.length - 1) {return;}
        boardIndex++;
    }

    else if(choice === "decrease"){
        if(boardIndex <= 0){return;}
        boardIndex--;
    }

    redrawBoard(boardSizes[boardIndex], pixelSizes[pixelIndex]);
    
}



function bootUp(){
    makeButtons();
    drawBoard(boardSizes[boardIndex], pixelSizes[pixelIndex]);
}




bootUp();

