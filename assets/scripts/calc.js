let reachSum = 0;
var slider = document.getElementById("reachRange");
var output = document.getElementById("reachValue");
let playerCount = 0;
let selectionCount = 0;
let previous;
let current;
let reachArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let factionArray = [
  "cat",
  "duchy",
  "eyrie",
  "vagabond",
  "otter",
  "mouse",
  "crow",
  "lizard",
  "vagabond2",
];

// Update the current slider value (each time you drag the slider handle)
output.innerHTML = slider.value; // Display the default slider value
playerCount = slider.value;
playerCount = parseInt(playerCount);
slider.oninput = function () {
  output.innerHTML = this.value;
  playerCount = this.value;
  playerCount = parseInt(playerCount);
  updateDisplay();
  evaulateReach(reachSum, playerCount, selectionCount);
};

// Finds the sum of reach from reducing array values
function updateDisplay() {
  reachSum = reachArray.reduce(function (a, b) {
    return a + b;
  }, 0);
  document.getElementById("reach_display").innerHTML = reachSum;
}

function reset() {
  for (i = 0; i < reachArray.length; i++) {
    reachArray[i] = 0;
    this.document.getElementById(factionArray[i]).src =
      "assets/img/notselected.png";
  }
  selectionCount = 0;
  updateDisplay();
  evaulateReach(reachSum, playerCount, selectionCount);
}

function evaulateReach(reachSum, playerCount, selectionCount) {
  let req_meet = false;
  if (selectionCount === playerCount) {
    switch (playerCount) {
      case 2:
        if (reachSum >= 17) {
          req_meet = true;
        } else {
          req_meet = false;
        }
        break;
      case 3:
        if (reachSum >= 18) {
          req_meet = true;
        } else {
          req_meet = false;
        }
        break;
      case 4:
        if (reachSum >= 21) {
          req_meet = true;
        } else {
          req_meet = false;
        }
        break;
      case 5:
        if (reachSum >= 25) {
          req_meet = true;
        } else {
          req_meet = false;
        }
        break;
      case 6:
        if (reachSum >= 17) {
          req_meet = true;
        } else {
          req_meet = false;
        }
        break;
      default:
        break;
    }
    if (req_meet === true) {
      document.getElementById("reach_req").innerHTML =
        "Meets Reach Requirements";
    } else {
      document.getElementById("reach_req").innerHTML = "Below Reach value";
    }
  } else {
    document.getElementById("reach_req").innerHTML = "";
  }
}

function isSelected(select, faction) {
  if (select === true) {
    this.document.getElementById(faction).src = "assets/img/checked.png";
    current = faction;
    if (current != previous) {
      selectionCount++;
      previous = current;
    }
    switch (faction) {
      case "cat":
        reachArray[0] = 10;
        break;
      case "duchy":
        reachArray[1] = 8;
        break;
      case "eyrie":
        reachArray[2] = 7;
        break;
      case "vagabond":
        reachArray[3] = 5;
        break;
      case "otter":
        reachArray[4] = 5;
        break;
      case "mouse":
        reachArray[5] = 3;
        break;
      case "crow":
        reachArray[6] = 3;
        break;
      case "lizard":
        reachArray[7] = 2;
        break;
      case "vagabond2":
        reachArray[8] = 2;
        break;
      default:
        break;
    }
    updateDisplay();
    evaulateReach(reachSum, playerCount, selectionCount);
  } else {
    this.document.getElementById(faction).src = "assets/img/notselected.png";
    current = faction;
    if (current != previous) {
      selectionCount = selectionCount - 1;
      previous = current;
    }
    switch (faction) {
      case "cat":
        reachArray[0] = 0;
        break;
      case "duchy":
        reachArray[1] = 0;
        break;
      case "eyrie":
        reachArray[2] = 0;
        break;
      case "vagabond":
        reachArray[3] = 0;
        break;
      case "otter":
        reachArray[4] = 0;
        break;
      case "mouse":
        reachArray[5] = 0;
        break;
      case "crow":
        reachArray[6] = 0;
        break;
      case "lizard":
        reachArray[7] = 0;
        break;
      case "vagabond2":
        reachArray[8] = 0;
        break;
      default:
        break;
    }
    updateDisplay();
    evaulateReach(reachSum, playerCount, selectionCount);
  }
}
