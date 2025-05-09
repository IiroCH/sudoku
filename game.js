function getCellValues() {
    const board = document.getElementById("game-board");

    let values = [];
    for (let supercell of board.childNodes) {
        for (let cell of supercell.childNodes) {
            values.push(cell.innerText);
        }
    }

    return values;
};


const init = () => {
    const board = document.getElementById("game-board");

    for (let i = 0; i < 9; i++) {
        const supercell = document.createElement("div");
        supercell.classList.add("supercell");

        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.innerText = "X";

            supercell.appendChild(cell);
        }
        
        board.appendChild(supercell);
    }
};