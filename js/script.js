function playGame(playerInput){
    clearMessages();
    function getMoveName(MoveID){
        if(MoveID == 1){
            return 'kamień';
        }else if(MoveID == 2){
            return 'papier';
        }else if(MoveID == 3){
            return 'nożyce';
        }else{
            printMessage('Nie znam ruchu o id ' + MoveID +'.');
        return ('nieznany ruch');
            }
    }
        function displayResult(computerMove, playerMove){
        console.log('moves: ', computerMove, playerMove)
        printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

    if( computerMove === playerMove){
        printMessage('Mamy remis!');
        console.log('wykonała się 1 zależność, czyli remis ')
    }else if(computerMove =='kamień' && playerMove == 'nożyce'){
        printMessage('Przegrałeś! Spróbuj raz jeszcze oszukać skrypt :)');
    }else if(computerMove =='kamień' && playerMove =='papier'){
        printMessage('Gratuluje! Wygrałeś');
    }else if(computerMove =='papier' && playerMove == 'kamień'){
        printMessage('Przegrałeś! Spróbuj raz jeszcze oszukać skrypt :)');
    }else if (computerMove =='papier' && playerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }else if(computerMove =='nożyce' && playerMove == 'papier'){
        printMessage('Przegrałeś! Spróbuj raz jeszcze oszukać skrypt :)');
    }else if (computerMove =='nożyce' && playerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }else{
        printMessage('uhuhu! Próbowałeś oszukać Freda, teraz Fred oszuka Ciebie :D');
    }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');*/

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
    console.log(getMoveName('2'));
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
