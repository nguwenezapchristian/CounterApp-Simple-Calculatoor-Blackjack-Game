// counterApp
var count = 0;
let counter = document.getElementById("counter");
let increBtn = document.getElementById("increment");
let decreBtn = document.getElementById("decrement");
let entry = document.getElementById("entries");
entry.textContent = "Previous Entries:  ";

function increment() {
        count++;
        counter.textContent = count;
}
function decrement() {
    count--;
    counter.textContent = count;
}
function save() {
    let entryString = count + " , ";
    entry.textContent += entryString
    count = 0;
    counter.textContent = count;
}
// Simple calculatorApp
let num1 = document.getElementById("num_1");

let num2 = document.getElementById("num_2");

let total = document.getElementById("total");



function multiply() {
    const added = num1.value * num2.value;
    console.log(added)
    total.textContent = "Total = " + added;

}
function subtract() {
    const subtracted = num1.value - num2.value;
    console.log(subtracted)
    total.textContent = "Total = " + subtracted;

}
function add() {
    //const added = +num1.value + +num2.value; you can also use parseInt to convert string into a number
    let number1 = parseFloat(num1.value);
    console.log(number1);
    let number2 = parseFloat(num2.value);
    const added = number1 + number2;
    console.log(added)
    total.textContent = "Total = " + added;

}
// Blackjack Game
let messageToPlayer = document.getElementById("msg_user");
let cardsOwnByPlayer = document.getElementById("all_cards");
let sumOfCards = document.getElementById("sum");
let myPoints = document.getElementById("points");
let points = 0;
let allCards = [];

let firstCard = Math.floor(Math.random() * 12) + 1;
    allCards.push(firstCard);
let secondCard = Math.floor(Math.random() * 12) + 1;
    allCards.push(secondCard);
    
    console.log(allCards)

let sum = 0;
function play() {    
        function sumOfAllCards(allCards) {
            return allCards.reduce((a, b) => a + b, 0);     
        } 
        sum = sumOfAllCards(allCards);
        console.log(sumOfAllCards(allCards));
        if(sum < 21) {
            cardsOwnByPlayer.textContent = "Cards: " + allCards;
            sumOfCards.textContent = "SUM: " + sum;
            messageToPlayer.textContent = "You got: " + sum + ", pick another card! to get 21 and Win The Game";  
            if (sum >= 18) {
                messageToPlayer.textContent = "You got: " + sum + ", Good move! add another card to win";
            }
        } else if (sum === 21) {
            messageToPlayer.textContent =  "You got: " + sum + ", Wow you Won! Congratulation. Play again to increase your points";
            sumOfCards.textContent = "SUM: " + sum;
            // we restart the game 
            allCards = []; // i need to make a restart button
            // add points
            points += 1;
            myPoints.textContent = "MY POINT: " + points;
        } else {
            messageToPlayer.textContent =  "You got: " + sum + "! Sorry, You lost the Game! Restart the Game";
            sumOfCards.textContent = "SUM: " + sum;
            // We restart the Game, array back to empty
            allCards = [];
    }
}
// here we will make a function to add a card to an array
function addCard() {
    let anotherCard = Math.floor(Math.random() * 12) + 1;
    allCards.push(anotherCard);
    cardsOwnByPlayer.textContent = "Cards: " + allCards;
    console.log(allCards)

}
function restart() {
    cardsOwnByPlayer.textContent = "Cards: Add new cards";
    sumOfCards.textContent = "SUM: ...";
    messageToPlayer.textContent = "Play Again!";
    allCards = [];
}
