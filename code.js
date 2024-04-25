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

// this function will validate the form input to make sure it meets our criteria
function validateForm(){
    // get the first name that the user enters on the form
    var firstName = document.getElementById("fname").value;

    // get the last name that the user enters on the form
    var lastName = document.getElementById("lname").value;

    // get the zip code that the user enters on the form
    var zipCode = document.getElementById("zip").value;

    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Zip Code: " + zipCode);

    // create a variable to hold firstname + space + lastName
    var fullName = firstName + " " + lastName;
    console.log("Full Name: " + fullName);

    // do the input validation
    // we will check for more than 20 letters in the first and last names
    // or if no names were entered, the lenght will be 1 becausee of the space we add between first and last name
    if (fullName.length > 20 || fullName.length == 1){
        console.log("Invalid name");
        // let the user know that they did not enter the information in correctly
        alert("Please enter a name that is shorter than 20 letters.");
        // make sure the form does not submit
        return false;
    }
    else if (zipCode.length != 5){
        console.log("Invalid zip code");
        // let the user know that the zip code was not entered correctly
        alert("Zip code was not 5 digits. Please try again.")
        // make sure the form does not submit
        return false;
    }
    else{
        // they passed validation! Release the secret word!
        console.log("We are good to go.");
        alert("Welcome, " + fullName + ". You have unlocked the Alert Achievement.")
        return false;
    }

    return false;

}


// here is the code for moving the meme image around
// track the interval ID 
var intervalId = 0;

// this function will make our image move around

function startImageMove(){
    // create a  variable that points to our HTML meme image
    var meme = document.getElementById("memeImage");

    intervalId = setInterval(function(){
        // create a variable to hold the new x cordinate
        var newX = getRandomCoordinate();
        // create a variable to hold the new y cordinate
        var newY = getRandomCoordinate();

        // let's change the location of our image
        meme.style.left = newX + "px";
        meme.style.top = newY + "px";

        // output the new info to the console for debugging purposes
        console.log("x: " + meme.style.left + " y: " + meme.style.top);

    }, 1000); // the 1000 is time in miliseconds - 1000 is 1 second
    // this code will move the image every 1 second
}

// create the function to stop the image from moving
function stopImageMove(){
    // call the built in javascript function to clear the interval - stop the image from moving
    clearInterval(intervalId);
    console.log("Meme Image Stopped!");
}

// create a function to generate our coordinate randomly
function getRandomCoordinate(){
    // this fucntion will return a random coordinate back to the code that called it
    return Math.floor(Math.random() * 1000);
}
function palindromeFun(){
    //console.log(palindromeTest("radar"));
    //console.log(palindromeTest("Fun stuff"));
    
    // flag variable to test if the user wants to continue
    var bContinue = true;

    do{
        // prompt the user to enter a word
        var userInput = prompt("Enter a word to see if it is a palindrome: ");

        // check to see if the user's word is a palindrome
        var bIsPalindrome = palindromeTest(userInput);

        // create a message for the user
        var message = "";

        // if the word is a palindrome, let the user know
        if (bIsPalindrome){
            // tell the user that their word is a palindrome
            message = userInput + " is a palindrome!";
        }
        else{
            // tell the user their word is NOT a palindrome
            message = userInput + " is not a palindrome!";
        }

        // display message to the user
        alert(message);

        // prompt the user to see if they want to continue
        var answer = prompt("Do you want to continue? (y/n) ");

        // check the answer, if n, exit the loop
        if (answer == "n"){
            // set our boolean loop moniter variable to false so that the loop will stop running when the while condition is tested below
            bContinue = false;
        }
    }
    while(bContinue); // while bContinue is true, the loop will keep running; if bContinue is false, the loop no longer runs
}

// This function will test a string to see if it is the same forwards and backwards
function palindromeTest(strToTest){
    //remove the whitespace from the string
    var strCleaned = strToTest.replace(/\s/g, "").toLowerCase();

    console.log("strCleaned=" + strCleaned);

    // put the string into an arroay so we can easily reverse it
    var strArray = strCleaned.split ("");

    // now let's reverse the ordxer of the letters in the array
    var strReversedArray = strArray.reverse();

    // return the array back into a string
    var strRev = strReversedArray.join("");

    console.log("strRev=" + strRev);

    // test to see if the 2 strings are the same, both forwards and backwards; if the words are the same, the function will return true; if not, the function will become false
    return strRev == strCleaned;
}

// Sound code
function addSound(){
    // Create an audio HTML element in JavaScript that we will add to the HTML page
    var soundElem = document.createElement("audio");

    // Nickname to the play button in the HTML
    var playButton = document.getElementById("btnPlay");

    var pauseButton = document.getElementById("btnPause");

    // set the attributes for our sound elements - for the id, make sure there are no spaces
    soundElem.setAttribute("id", "mySound");
    // specify the sound file
    soundElem.setAttribute("src", "us-lab-background.mp3")

    soundElem.setAttribute("controls", "controls");

    // Add the audio HMTL element to the page
    document.body.appendChild(soundElem);

    console.log("sound element added to the page.")
    // Make the play and pause buttons visible
    playButton.hidden = false;
    pauseButton.hidden = false;
}

function playSound(){
    var audio = document.getElementById("mySound");
    audio.play();
    console.log("soundplayed");
}

function pauseSound(){
    var audio = document.getElementById("mySound");
    audio.pause();
    console.log("soundpaused");
}

// this function will run the user clicks on the button to show the plants
function showPlants(){
// this array will hold all of our plant names - an array is 1 variable that holds multiple values
var plantsArr = ["Spider Plant","Orchid","Pothos","Succulent",  "Lavender","Money Tree","Jasmine","Hibiscus","Fern","Cactus","Lucky Bamboo","Daisy","Geranium"];
            
            
var plantDiv = document.getElementById("plantContainer");

var plantButton = document.getElementById("btnPlants");

//create an unordered list (by default it will have bullet points)
var plantUl = document.createElement("ul");

// add the unordered list to the html page on the div
plantDiv.appendChild(plantUl);

// loop through the plant listt array and create a list item for each plant
// i is the counter variable; the loop should run as long as i is less then the number of items in the array; increase the value of i by 1 each time the loop runs
for (var i=0; i<plantsArr.length; i++){
//create a list item
var plantLi = document.createElement("li");

// add the name of the plant to the text of the list item
plantLi.textContent = plantsArr[i];

// add thee list item to the unordered list
plantUl.appendChild(plantLi);
}

// hide the show plants button
plantButton.remove();
}

function showStats(){
var gameNameArr = [
"Fortnite",
                "Minecraft",
                "Lethal Conpany",
                "Call Of Duty",
                "Helldivers 2"
            ];

            var playTimeArr = [
                "50 hours",
                "60 hours",
                "900 hours",
                "20 hours",
                "500 hours"
            ];

            var statsDiv = document.getElementById("statsContainer");

            var statsButton = document.getElementById("btnStats");

            //create an unordered list (by default it will have bullet points)
            var statsUl = document.createElement("ul");

            // add the unordered list to the html page on the div
            statsDiv.appendChild(statsUl);

            for (var i=0; i<gameNameArr.length; i++){
                var statsLi = document.createElement("li");

                // add the name of the plant to the text of the list item
                statsLi.textContent = gameNameArr[i] + ": " + playTimeArr[i];

                // add thee list item to the unordered list
                statsUl.appendChild(statsLi);
            }
            statsButton.remove();
        }
// Week 12 Laps Code

        // this variable will keep track of the current lap
        // as we add laps, the value will be increased by 1
        var lapCounter = 0;

        // set up an empty array that will hold the lap times
        var lapsArray = [];

        // this function will record a lap - add a lap to the lapsArray each time the button is clicked
        function recordLap(){
            // Use .push to add an item to the end of the array
            // new date() will add the current date and time to the array
            lapsArray.push(new Date());

            // Print out the info to the console
            console.log("Lap " + (lapCounter+1) + " recorded " + lapsArray[lapCounter]);

            // display a message to the user that the lap was recorded
            // create the shortcut/nickname variable that points to the message div
            var divMsg = document.getElementById("messageDiv");

            // display a message based on which lap is being recorded
            if (lapCounter == 0){
                divMsg.innerText = "The first lap was recorded";
            }
            else if (lapCounter == 1){
                divMsg.innerText = "The second lap was recorded";
            }
            else if (lapCounter == 2){
                divMsg.innerText = "The third lap was recorded";
        }
        // catch all else statement - if the counter is greater than 2, print out a generic message
        else{
            divMsg.innerText = "Lap " + (lapCounter+1) + ": was recorded.";
        }
        // increase the lap counter by 1 - it is equivalent to saying lapCounter = lapCounter + 1
        lapCounter++;
    }

    // Create the function to display the lap times to the user
    function displayLaps(){
        // create a variable that is a pointer to the display laps div 
        var divLaps = document.getElementById("lapsDiv");

        // create an unordered list to hold the lap times
        var ulLaps = document.createElement("ul");

        // add the unordered list to the display laps div
        divLaps.appendChild(ulLaps);

        // loop through the laps array to add the lap times to the unordered list
        for (var i = 0; i < lapsArray.length; i++){
            // create a list item that will be added to the unordered list
            var liLap = document.createElement("li");

            // add the lap time to the list item text
            liLap.textContent = "Lap: " + (i+1) + ": " + lapsArray[i];

            // add the listitem to the unordered list
            ulLaps.appendChild(liLap);
        }
    }