document.addEventListener('DOMContentLoaded', () => {
   
// Caching the DOM 
let userScore = 0;
let computerScore = 0;
const userScore_span=document.getElementById("user-Score");
const computerScore_span=document.getElementById("computer-Score");
const scoreBoard_div= document.querySelector(".score-board");
const result_p= document.querySelector(".result>p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");

//Getting random input from computer
function getComputerChoice(){
	const choices = ["rock","paper","scissors"];
	const randomNumber=Math.floor(Math.random()*3);
	return(choices[randomNumber]);
}

function win(userChoice, computerChoice){
	//console.log("win")
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML =`${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord}. YOU WIN !`;
}

function lose(userChoice, computerChoice){
	//console.log("LOST");
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML =`${userChoice}${smallUserWord} loses to ${computerChoice}${smallCompWord}. YOU LOST !`;
}

function draw(userChoice, computerChoice){
	//console.log("DRAW");
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML =`${userChoice}${smallUserWord} equals ${computerChoice}${smallCompWord}. ITS A DRAW `;
}


//Game 
function game(userChoice){
	const computerChoice= getComputerChoice();
	//console.log(userChoice);
	//console.log(computerChoice);
	switch(userChoice + computerChoice){
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice, computerChoice);
			//console.log("USER WINS.");
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			lose(userChoice, computerChoice);
			//console.log("USER LOSES.");
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice, computerChoice);
			//console.log("ITS A DRAW.");
			break;
	}
}

function main() {

	rock_div.addEventListener('click', function(){
		game("rock");
	})

	paper_div.addEventListener('click', function(){
		game("paper");
	})

	scissors_div.addEventListener('click', function(){
		game("scissors");
	})
}

main();

})