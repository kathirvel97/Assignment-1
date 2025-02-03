var coinFlip = Math.floor(Math.random()*2);
var choice = prompt("Choose 'Heads' or 'Tails':").toLowerCase();
var resultIsHeads = coinFlip === 0 ? true : false;

if (resultIsHeads && choice === "heads") {
    alert("The flip was heads and you chose heads...you win!");
} else if (resultIsHeads && choice === "tails") {
    alert("The flip was heads but you chose tails...you lose!");
} else if (!resultIsHeads && choice === "heads") {
    alert("The flip was tails but you chose heads...you lose!");
} else if (!resultIsHeads && choice === "tails") {
    alert("The flip was tails and you chose tails...you win!");
} else {
    alert("Invalid choice. Please select 'Heads' or 'Tails'.");
}
