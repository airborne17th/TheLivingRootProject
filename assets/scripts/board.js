let boardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let boardSelection = [1, 2, 3, 4];
let clearingArray = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
let resetArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let selection = 0;



function randomize() {
    for (let i = clearingArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = clearingArray[i];
        clearingArray[i] = clearingArray[j];
        clearingArray[j] = temp;
    }
    for (i = 0; i < clearingArray.length; i++) {
        switch (clearingArray[i]) {
            case 1:
                this.document.getElementById(i).src = "assets/img/board/clearing-fox.png";
                break;
            case 2:
                this.document.getElementById(i).src = "assets/img/board/clearing-bunny.png";
                break;
            case 3:
                this.document.getElementById(i).src = "assets/img/board/clearing-mouse.png";
                break;
            default:
                console.log(clearingArray[i]);
                break;
        }

    }
}

function selectMap(value) {
    for (i = 0; i < resetArray.length; i++) {
        this.document.getElementById(i).src =
            "assets/img/board/clearing-blank.png";
    }
    switch (boardSelection[value - 1]) {
        case 1:
            this.document.getElementById("displayMap").src = "assets/img/board/map-fall.png";
            break;
        case 2:
            this.document.getElementById("displayMap").src = "assets/img/board/map-winter.png";
            break;
        case 3:
            this.document.getElementById("displayMap").src = "assets/img/board/map-lake.png";
            break;
        case 4:
            this.document.getElementById("displayMap").src = "assets/img/board/map-mountain.png";
            break;
        default:
            break;
    }

}