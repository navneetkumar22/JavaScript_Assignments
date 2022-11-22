// Creating game function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;



    // Function to start playing game

    const playGame = () => {
        const playerOptions = document.querySelectorAll(".choice img");
        const computerOptions = ['rock', 'paper', 'scissors'];


        playerOptions.forEach(button => {

            button.addEventListener("click", (e) => {

                moves++;

                const playerChoice = e.currentTarget.getAttribute("alt");
                const computerChoice = computerOptions[Math.floor(Math.random() * 3)];

                

                winner(playerChoice, computerChoice);        // function to decide winner

                if (moves == 10) {
                    gameOver();                              // function to run when game is over
                }
            })

        })
    }


    // Funtion to decide winner
    const winner = (player, computer) => {

        const result = document.querySelector("#result-final-stat");
        const playerScoreBoard = document.querySelector("#userScoreVal");
        const computerScoreBoard = document.querySelector("#compScoreVal");
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        document.getElementById("result-user-stat").innerText = "User: " + player;
        document.getElementById("result-comp-stat").innerText = "Computer: " + computer;

        if (player === computer) {
            result.textContent = "Winner: Tie";
        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Winner: Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else {
                result.textContent = 'Winner: You Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'Winner: Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else {
                result.textContent = 'Winner: You Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissors') {
                result.textContent = 'Winner: Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else {
                result.textContent = 'Winner: You Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    // Function to run when game is over
    const gameOver = () => {

        alert("The game is over!");


        const result = document.querySelector("#result-final-stat");

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
    }

    // Calling playGame function inside game funtion
    playGame();

}

// Calling game funtion
game();

