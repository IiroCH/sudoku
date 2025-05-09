const init = () => {
    const board = document.getElementById("game-board");

    for (let i = 0; i < 9; i++) {
        const supercell = document.createElement("div");
        supercell.classList.push("supercell");

        const cell = document.createElement("div");
        cell.classList.push("cell");
        cell.innerText = "X";

        supercell.appendChild(cell);
        board.appendChild(supercell);
    }
};