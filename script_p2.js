// variables
const image = document.getElementById("image");
const button = document.getElementById("submit");
const holdButton = document.getElementById("hold");
const p1score = document.getElementById("score1");
const p2score = document.getElementById("score2");
const p1zone = document.getElementById("areaP1");
const p2zone = document.getElementById("areaP2");
const comment = document.getElementById("comment");
let currentPlayer = 1;
let tally = 0;  // for keeping track of the score on current turn
let startAgain = false;
let player1 = 0;
let player2 = 0;

// main content
const randNum = () => {
    return (Math.floor(Math.random() * 6) + 1);
}

// checks if score needs to be reset after a win or loss condition
const resetScore = () => {
    // tally = 0;
    // comment.textContent = "0";
    if(startAgain == true){
        p1score.textContent = 0;
        p2score.textContent = 0;
        player1 = 0;
        player2 = 0;
        //comment.textContent = "0";
        tally = 0;
        // updateScore();
        startAgain = false;
        // switchPlayer();
    }
}

const switchPlayer = () => {
    console.log("Switch Player");
    if(currentPlayer == 1){
        currentPlayer = 2;
        p1zone.style.backgroundColor = "darkgray";
        p2zone.style.backgroundColor = "crimson";
    }else{
        currentPlayer = 1;
        p1zone.style.backgroundColor = "crimson";
        p2zone.style.backgroundColor = "darkgray";
    }
    tally = 0;
    //comment.textContent = "0";
}

// checks for winning condition after 'Hold' button clicked
const checkWin = () => {
    player1 = parseInt(p1score.textContent);
    player2 = parseInt(p2score.textContent);
    if(player1 > 19  || player2 > 19){ 
        comment.textContent = `Player ${currentPlayer} has won!!`;
        startAgain = true;
        submit.textContent = "Start again!";

    }else{
        comment.textContent = "0";
        submit.textContent = "Roll";
    }
}

holdButton.addEventListener("click", () => {
    if(currentPlayer == 1){  // which player
        p1score.textContent = parseInt(p1score.textContent) + tally;
        console.log(typeof(parseInt(p1score.textContent)));
    }else{
        p2score.textContent = parseInt(p2score.textContent) + tally;
        console.log(typeof(parseInt(p1score.textContent)));
    }
    console.log(`Player ${currentPlayer} held`)
    checkWin(); // checks winning condition when a player holds
    switchPlayer();
//  resetScore();
});

submit.addEventListener("click", () => {
    resetScore();
    let rolled = randNum();
    console.log(`Player ${currentPlayer} rolled a ${rolled}`);
    for(let i = 1; i < 7; i++){
        if(rolled == i && i == 1){
            image.src = `img/dice1.png`;
            comment.textContent = "Sorry! Next Player!";
            submit.textContent = "Start";
            switchPlayer();
        }else if(rolled == i){
            image.src = `img/dice${i}.png`;
            tally += rolled;
            comment.textContent = tally;
            submit.textContent = "Roll";
            // updateScore();
        }
    }
})


// NOT NEEDED??

// const updateScore = () => {
//     comment.textContent = tally;
// }

