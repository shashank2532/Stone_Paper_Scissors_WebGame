let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#message");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const genCompChoice=()=>{

    const options=["rock", "paper", "scissors"];
    const randomIndex=Math.floor(Math.random()*3) ;
    return options[randomIndex];
};

const drawGame=(userChoice,compChoice)=>{
   
    msg.innerText=`Its a Draw ${userChoice} draws ${compChoice}`;
    msg.style.backgroundColor= "#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
   
    if(userWin){
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor= "red";
        computerScore++;
        compScorePara.innerText=computerScore;
    }
};

const playGame=(userChoice)=>{
    
    //Now we will generate computer choice
    const compChoice=genCompChoice();
    
    if(userChoice===compChoice){
        drawGame(userChoice,compChoice);
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //Compchoice => paper,scissors
           userWin=compChoice==="paper"?false: true;
        }
        else if(userChoice==="paper"){
            //Compcgoice=> rock, scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //user choice will be scissors
            //then compchoice=>rock, paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{

        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
    });
});
 
