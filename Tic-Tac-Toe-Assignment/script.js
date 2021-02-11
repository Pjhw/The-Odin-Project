const gameBoard = (() => {
    const board = ["","","","","","","","",""];

    const set = (index, icon) =>{
        board[index] = icon;
    }

    const get = (index) =>{
        return board[index];
    }

    const reset = () =>{
        for(let i = 0; i < 9; i++) board[i] = "";
    }

    return{set, get, reset, board};
})();

const display = (() =>{
    let board = document.getElementById("board");
    let resetButton = document.getElementById("reset");
    let humanButton = document.getElementById("human");
    let computerButton = document.getElementById("computer");
    let squares = [];

    for(let i = 0; i<9; i++){
        let square = document.createElement("div");
        if(i%2===0) square.classList.add("white");
        else square.classList.add("gray");
        
        square.classList.add("square");
        square.setAttribute("data-index", (i).toString());

        //Square Event Listener
        square.addEventListener("click", function(e){
            let index = e.target.dataset.index;
            game.takeTurn(index);
        });

        squares.push(square);
        board.appendChild(square);
    }

    resetButton.addEventListener("click", function(e){
        game.reset();
    });

    humanButton.addEventListener("click", function(e){
        game.setOpponent("Human");
    });

    computerButton.addEventListener("click", function(e){
        game.setOpponent("Computer");
    });
    

    const update = () =>{
        for(let i = 0; i < 9; i++){
            squares[i].innerHTML = gameBoard.get(i);
        }
    }

    const changeMessage = (message) =>{
        let messageDiv = document.getElementById("message");
        messageDiv.innerHTML = message;
    }

    return{update, changeMessage};
})();

const game = (() => {
    let turn = "X";
    let versus = "human";

    const takeTurn = (index) => {
        if(gameBoard.get(index) !== "") return;

        gameBoard.set(index, turn);

        let winner = evaluate();

        if(winner !== ""){
            display.changeMessage("Player " + winner + " has won!");
            turn = "";
        }

        else{
            switchTurns();
            display.changeMessage("It's Player " + turn + "'s turn.");
        }

        display.update();
    }

    const switchTurns = () =>{
        if(turn === "X") turn = "O";
        else turn = "X";
    }

    const evaluate = () =>{
        const conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];

        let winner = "";

        conditions.forEach(condition =>{
            let val = check(condition);
            if(val !== "") winner = val;
        });

        return winner;
    }

    const check = (condition) =>{
        let first = gameBoard.get(condition[0]);
        let second = gameBoard.get(condition[1]);
        let third = gameBoard.get(condition[2]);

        if(first === second && first === third) return first;
        else return "";
    }

    const reset = () => {
        turn = "X";
        gameBoard.reset();
        display.update();

        display.changeMessage("It's Player " + turn + "'s Turn.");
    }

    const setOpponent = (opponent) =>{
        versus = opponent;
        reset();
    }

    return {takeTurn, reset, setOpponent};
})();
