let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function rockPaperScissors() {
    let getHand = Math.floor(Math.random() * 3);
    return hands[getHand];
}

console.log(rockPaperScissors());
