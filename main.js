let A1 = [
["Товар 1", "Товар 2", "Товар 3", "Товар 4"],
["Товар 5", "Товар 6", "Товар 7", "Товар 8"],
["Товар 9", "Товар 10", "Товар 11", "Товар 12"],
["Товар 13", "Товар 14", "Товар 15", "Товар 16"],
["Товар 13", "Товар 14", "Товар 15", "Товар 16"],
["Товар 17", "Товар 18", "Товар 19", "Товар 20"]
];

let A2 = [
["Вещь 1", "Вещь 2", "Вещь 3", "Вещь 4"],
["Вещь 5", "Вещь 6", "Вещь 7", "Вещь 8"],
["Вещь 9", "Вещь 10", "Вещь 11", "Вещь 12"],
["Вещь 13", "Вещь 14", "Вещь 15", "Вещь 16"]
];



function CellChanger(cell, cellName) {
    Clear(cellName);

    let arrL = cell.length;
    let text;

    for (let i = 0; i < arrL; i++) {
        let num = i + 1;
        text = "<span>Полка " + num + "</span>";
        Code(text);
        for (let j = 0; j < cell[i].length; j++) {
            text = '<div class="shelf__item">' + cell[i][j] + '</div>';
            Code(text);
        }
    }
}


function Code(text) {
    document.getElementById("cell-info").insertAdjacentHTML('beforeend', text);
}

function Clear(cell) {
    let text = '<div class="block__header" id="cell-header">Сектор ' + cell + '</div><div class="block__text" id="cell-info"></div>';
    document.getElementById("cell-info").remove();
    document.getElementById("cell-header").remove();
    document.getElementById("cell-info__wrapper").insertAdjacentHTML('beforeend', text);
}
