
// Check for numbers in the user input
document.getElementById("submitButton").addEventListener("click", charCheck);
function charCheck() {
    var testString =  document.getElementById("userText").value;
    var okInput = /^[a-zA-Z ]+$/;
    for (var i = 0; i < testString.length; i++) {
        if (testString[i].match(okInput)) {
            continue;
        } else {
            alert("Please input only letters, no numbers or puctuation!");
            location.reload();
        }
    }
}

// Reverse the string on click
document.getElementById("submitButton").addEventListener("click", reversal);
function reversal() {
    var testString =  document.getElementById("userText").value;
    var reverseString = "";
    for (var i = testString.length - 1; i >= 0; i--) {
        reverseString += testString[i];
    }
    document.getElementById("reversal").innerHTML = "Reversal:</h4><br><h2>" + reverseString;
    return reverseString;
}

// Alphabetize the string on click
document.getElementById("submitButton").addEventListener("click", alphabits);
function alphabits() {
    var testString =  document.getElementById("userText").value;
    var lowerTestString = testString.toLowerCase(); //make all char's lowercase
    var condensedString = lowerTestString.replace(/ +/g, ""); // remove spaces
    var splitString = condensedString.split("");
    var alphabetize = splitString.sort();
    var joinedSplits = alphabetize.join("");
    document.getElementById("alphabits").innerHTML = "In alphabetical order:</h4><br><h2>" + joinedSplits;
}

// Check for a palindrome
document.getElementById("submitButton").addEventListener("click", palindrome);
function palindrome() {
    var testString =  document.getElementById("userText").value;
    var lowerTestString = testString.toLowerCase(); //make all char's lowercase
    var condensedString = lowerTestString.replace(/ +/g, ""); // remove spaces
    var reverseCondensed = "";                                // reverse it
    for (var i = condensedString.length - 1; i >= 0; i--) {
        reverseCondensed += condensedString[i];
    }
    console.log(condensedString, reverseCondensed);
    if (reverseCondensed ===  condensedString) {
        document.getElementById("palindrome").innerHTML = "Your text is a PALINDROME!";
    }
}

// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);

//Return key === "submit" button click

document.getElementById("userText").onkeypress=function(e){
    if(e.keyCode==13){
        e.preventDefault();
        var pressedEnter = document.getElementById("submitButton").click();
    }
}

