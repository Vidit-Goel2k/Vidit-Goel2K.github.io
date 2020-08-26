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
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML =`${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord}. YOU WIN ! 🔥`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},500);
}

function lose(userChoice, computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML =`${userChoice}${smallUserWord} loses to ${computerChoice}${smallCompWord}. YOU LOST ! 💩`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},500);
}

function draw(userChoice, computerChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML =`${userChoice}${smallUserWord} equals ${computerChoice}${smallCompWord}. ITS A DRAW .`;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},500);
}


//Game 
function game(userChoice){
	const computerChoice= getComputerChoice();
	switch(userChoice + computerChoice){
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice, computerChoice);
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			lose(userChoice, computerChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice, computerChoice);
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