let words = ["kenny", "kyle", "stan", "cartman", "tweak", "chef", "jimbo", "garrison", "manbearpig", "craig", "jesus", "butters", "token", "fishsticks"];
let blankArr = [];
let userLetters = [];
let guesses = 9;
let compWord = "";
let isOver = false;
let wordLength = 0;
var w = document.getElementById('w');
var l = document.getElementById('l');
var x = document.getElementById('x');
var letterInWord = false;

let win = {
    score: 0,


    add: function (){
        this.score += 1;
        return this.score;
    },
    update: function(){
        w.innerText =this.score;
    }

}
let lose = {
    score: 0,

    add: function (){
        this.score += 1;
        return this.score;
    },
    update: function(){
        l.innerText = this.score;
    }
    
}

//called at the start and after a win or lose. resets all elements to starting positions and picks a new word.
function reset () {
    var x = Math.floor((Math.random() * words.length));
    compWord = words[x];
    wordLength = compWord.length;
    // console.log(compWord);
    // console.log(wordLength);
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
    document.getElementById('winlose').innerText = "Guesses Remaining"
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
    if (!userLetters.includes(userInput) && isOver === false){ 
        pushL(userInput);

        if (guesses >= 1 && wordLength >= 1){

            

            //decrements guesses on every press (if there are guesses left) BUT gives you a guess back if you get the letter right
            guesses--;
            for (j = 0; j < compWord.length; j++){
                if(compWord[j] === userInput){
                    blankArr[j] = userInput;
                    letterInWord = true; 
                    wordLength--;
                }
            }

            //added so guesses did not increment twice for a double letter word
            if(letterInWord){
                guesses+=1;
                letterInWord = false;
            }
            // for every right letter, the wordlength variable is decremented. This checks to see if it's zero, which indicates a win
            if (wordLength === 0){
                document.getElementById('winlose').innerText = "You Win";
                win.add();
                win.update();
                isOver = true;
                x.innerText = "Press a key to play again";
            }
            else if (guesses === 0){
                document.getElementById('winlose').innerText = "You Lose";
                lose.add();
                lose.update();
                isOver = true;
                x.innerText = "Press a key to play again";
            }

            updateBlank(guesses);
        }
        
        


    } 
    else if (isOver){
        x.innerText = "Letters Picked";
        reset();
    }
    
  
   

   // console.log(userInput);
}
