let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score");
let userScore=0;
let compScore=0;
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIndx=Math.floor(Math.random() *3);
    return options[randIndx];
}
const drawGame=()=>{
   msg.innerText="Game was draw. Play again."
   msg.style.backgroundColor="black";

}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscorepara.innerText=userScore;
       msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText=`You loss! ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame= (userChoice) => {
 console.log("user Choice =",userChoice);
 const compChoice=genCompChoice();
 console.log("Computer Choice =",compChoice);
 if (userChoice===compChoice){
    drawGame();
 }
 else {
    let userWin=true;
    if(userChoice==="rock"){
        userWin= compChoice=="paper"? false: true;
    }
    else if(userChoice="paper"){
        userWin= compChoice=="scissor"? false: true;
    }
    else{
        userWin=compChoice=="rock"? false: true;
    }
    showWinner(userWin,userChoice,compChoice);
 }
}
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    let userChoice=choice.getAttribute("id");
    console.log("choice was clicked",userChoice);
    playGame(userChoice);
})
})
