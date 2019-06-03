let words = ["kenny", "kyle", "stan", "cartman", "tweak", "chef",];
let blankArr = [];
let guesses = 9;


var x = Math.floor((Math.random() * words.length));
var compWord = words[x];
console.log(compWord);

var answer = function blank() {
    for (i = 0; i < compWord.length; i++){
        blankArr[i] = "_";
    }
    blankArr.join(" ");
    return blankArr;
}

function updateBlank() {
    document.getElementById('solution').innerText = blankArr;
}


answer();

let el = document.getElementById('solution');
el.textContent = blankArr;

document.onkeyup = function(event){
    let userInput = event.key.toLowerCase();

    for (j = 0; j < compWord.length; j++){
        if(compWord[j] === userInput){
            console.log(compWord[j]);
            updateBlank();
            console.log(blankArr);
            // blankArr[j] === userInput;
        }
       
    }

   // console.log(userInput);
}
