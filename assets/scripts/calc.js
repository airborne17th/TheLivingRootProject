var theNum = 0;
var resultNum = 0;
var a = 0;
var display = document.getElementById("display");
var b = false;
var c = 0;

function setNum(a) {
    theNum = a;
    resultNum = resultNum + theNum;
    if (resultNum < 0) {
        resultNum = 0;
    }
    display.innerHTML = resultNum;
    console.log(theNum, resultNum);
}

function isSelected(b, c) {
    if (b === true) {
        this.document.getElementById(c).src = 'assets/img/checked.png';
    } else {
        this.document.getElementById(c).src = 'assets/img/notselected.png';
    }
}