/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
        output.innerHTML = `You guessed right, your number is ${number}`
    } 
    if (input < number){
        output.innerHTML = 'Your guess is too low!'
    } 
    if (input > number){
        output.innerHTML = 'Your guess is too high!'
    } 
    if ((input <1) || (input > 100)){
        output.innerHTML = 'Please enter a number between 1-100!'
    }
});

// function shuffle(newNumber) {
//     let newNumber = number.length, randomNumber;
//     while (number != 0) {
//         newNumber = number;
//     [number[currentNumber], number[newNumber]] = [
//         number[newNumber], number[currentNumber]];
//     }
//     return newNumber;
//  }
// btn2.addEventListener('click', function(){
//     let hintArray = [this.Number];
//     while (hintArray.length < 10) {
//         
//     }
//  =}

$('#btn2').click(function() {
    let hintArray = [this.Number];
    $('userInput').text('The winning number is either '+hints[0]+', '+hints[1]+', or '+hints[2] + '.');
});
