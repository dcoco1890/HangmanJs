let words = ["kenny", "kyle", "stan", "cartman", "tweak", "chef", "jimbo", "garrison"];
let blankArr = [];
let userLetters = [];
let guesses = 10;
let compWord = "";
let isOver = false;
let wordLength = 0;
var ex = document.getElementById('x');

let win = {
    score: 0,

    add: function (){
        this.score += 1;
        document.getElementById('w').innerText = this.score;
        return this.score;
    }

}
let lose = {
    score: 0,

    add: function (){
        this.score += 1;
        document.getElementById('l').innerText = this.score;
        return this.score;
    }
    
}

function reset () {
    var x = Math.floor((Math.random() * words.length));
    compWord = words[x];
    wordLength = compWord.length;
    console.log(compWord);
    console.log(wordLength);
    guesses = 9;
    isOver = false;
    userLetters = [];
    blankArr = [];
    for (i = 0; i < compWord.length; i++){
        blankArr[i] = "_";
        
    }
    document.getElementById('solution').innerText = blankArr.join(" ");
    document.getElementById('left').className = "card-text text-center display-4";
    document.getElementById('left').innerText = guesses;
    document.getElementById('letters').innerText = userLetters;
    document.getElementById('winlose').innerText = "Guesses Remaining";
    ex.innerText = "Letters Picked";
}


//updates blank word array on screen and guess counter
function updateBlank(x) {
    document.getElementById('solution').innerText = blankArr.join(" ");
    var el = document.getElementById('left');

    //Changes guesses left to red if under 5 left
    if (x >= 5){
        el.innerText = guesses;
    }
    else{
        var el2 = el.getAttribute('class');
        el.className = el2 + ' text-danger';
        el.innerText = guesses;
    }
    
}

function pushL (x){
    userLetters.push(x);
    document.getElementById('letters').innerText = userLetters.join(" , ");
}




reset();

let el = document.getElementById('solution');
el.textContent = blankArr.join(' ');

document.onkeyup = function(event){
    let userInput = event.key.toLowerCase();
    
    //only runs when the user letter is not a letter that has already been chosen
    if (!userLetters.includes(userInput)){ 
        pushL(userInput);

        if (guesses >= 1 && wordLength >= 1){

            //decrements guesses on every press (if there are guesses left) BUT gives you a guess back if you get the letter right
            guesses--;
            for (j = 0; j < compWord.length; j++){
                if(compWord[j] === userInput){
                    blankArr[j] = userInput;
                    guesses += 1;  
                    wordLength--;
                } 
            }
            
            if (wordLength === 0){
                document.getElementById('winlose').innerText = "You Win";
                ex.innerText = "Press any key to continue";
                win.add();
                isOver = true;
            }
            else if (guesses === 0){
                document.getElementById('winlose').innerText = "You Lose";
                ex.innerText = "Press any key to continue";
                lose.add();
                isOver = true;
            }

            updateBlank(guesses);
        }
        else if(wordLength === 0){
            win.add();
            reset();

        }
        else {
            lose.add();
            reset();
        }
        


    }
    else if (isOver){
        reset();
    }
    
  
   

   // console.log(userInput);
}
