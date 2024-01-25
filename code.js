// single line comment
/* multi line comment */

// this function will let us play a dice game
function playCraps(){
    //we are going to narrate what the function does through the console
    console.log("playCraps function was called")

    // role a die
    var die1 = rollDIe();
    console.log("The first die roll is: " + die1);

    // role a second die
    var die2 = rollDIe();
    console.log("The second die roll is: " + die2);

    // add the rolls together
    var sum = die1 + die2;
    console.log("The sum of the dice rolls is " + sum);

    // output the dice rolls tot he html page
    document.getElementById("die1Result").innerHTML = "Die 1 is: " + die1;
    document.getElementById("die2Result").innerHTML = "Die 2 is: " + die2;
    document.getElementById("sumResult").innerHTML = "The sum is: " + sum;

    // Let's code the rules of the dice game
    // if the sum is 7 or the sum is 11, we lost
    // || means or
    // == checks if the values are the same
    if (sum == 7 || sum == 11){
        document.getElementById("crapsResults").innerHTML = "You lose";

    }
    // now let's check if we win by rolling 2 even numbers that match
    // first we check if the dice are the same numbers 
    // then we check the modulus (remainder) is 0 when the die roll is divided by 2
    // or in other words, was the die roll an even number
    else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsResults").innerHTML = "You win!";
    }
    // if neither of the previous if, or else if statements were true, then this catch-all
    // else statement will be executed
    else{
        document.getElementById("crapsResults").innerHTML = "You pushed (you tied)!";

    }

}

// create a function that generates a die roll - a random number between 1 and 6
function rollDIe(){
    // generate a random number
    // Math.random gives us a number between 0 and 1
    var die = Math.random() * 6;
    // we will get a rounded whole number that will be returned to whatever code calls this function
    return Math.ceil(die);
}