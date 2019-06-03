let words = ["kenny", "kyle", "stan", "cartman", "tweak", "chef",];
let blankArr = [];
let guesses = 9;
let compWord = "";
isOver = false;

let win = {
    score: 0,

    add: function (){
        this.score += 1;
        return this.score;
    }

}
let lose = {
    score: 0,

    add: function (){
        this.score += 1;
        return this.score;
    }
    
}

function reset () {
    var x = Math.floor((Math.random() * words.length));
    compWord = words[x];
    console.log(compWord);
}

function blank() {
    for (i = 0; i < compWord.length; i++){
        blankArr[i] = "_";
    }
    document.getElementById('solution').innerText = blankArr
}

function updateBlank() {
    document.getElementById('solution').innerText = blankArr;
}



reset();
blank();
let el = document.getElementById('solution');
el.textContent = blankArr;

document.onkeyup = function(event){
    let userInput = event.key.toLowerCase();

    if (guesses >= 0 || !isOver){
        for (j = 0; j < compWord.length; j++){
            if(compWord[j] === userInput){
                blankArr[j] = userInput;
                console.log(blankArr);
                updateBlank();
            }
            else{
                guesses--;
                
            }
           
        }
    }
   

   // console.log(userInput);
}
