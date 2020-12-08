{
let computerCount = 0;
let playerCount = 0;
const playGame = function (playerInput){
    console.log(playerInput);
    clearMessages();
    
    const getMoveName = function (MoveID) {
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
    const playerMove = getMoveName(playerInput),
        randomNumber = Math.floor(Math.random() * 3 + 1),
        computerMove = getMoveName(randomNumber);

    console.log(playerMove);
    console.log('Wylosowana liczba to: ' + randomNumber);
    console.log('Gracz wpisał: ' + playerInput);

    const displayResult = function (computerMove, playerMove){
            
    console.log('moves: ', computerMove, playerMove)
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

    if( computerMove === playerMove){
        printMessage('Mamy remis!');
        console.log('wykonała się 1 zależność, czyli remis ')
        countResults(playerCount, computerCount);
    }else if(computerMove =='kamień' && playerMove == 'nożyce'){
        printMessage('Przegrałeś! Spróbuj raz jeszcze oszukać skrypt :)');
        computerCount +=1;
        countResults(playerCount, computerCount);
    }else if(computerMove =='kamień' && playerMove =='papier'){
        printMessage('Gratuluje! Wygrałeś');
        playerCount +=1;
        countResults(playerCount, computerCount);
        console.log('gracz otrzymuje punkt' + playerCount)
    }else if(computerMove =='papier' && playerMove == 'kamień'){
        printMessage('Przegrałeś! Spróbuj raz jeszcze oszukać skrypt :)');
        computerCount +=1;
        countResults(playerCount, computerCount);
    }else if (computerMove =='papier' && playerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
        playerCount +=1;
        countResults(playerCount, computerCount);
    }else if(computerMove =='nożyce' && playerMove == 'papier'){
        printMessage('Przegrałeś! Spróbuj raz jeszcze oszukać skrypt :)');
        computerCount +=1;
        countResults(playerCount, computerCount);
    }else if (computerMove =='nożyce' && playerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
        playerCount +=1;
        countResults(playerCount, computerCount);
    }else{
        printMessage('uhuhu! Próbowałeś oszukać Freda, teraz Fred oszuka Ciebie :D');
    }
    }

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
function countResults(playerCount, computerCount){
    document.getElementById('player').innerHTML = 'Twój wynik: '+ playerCount;
    document.getElementById('computer').innerHTML ='-vs-' + computerCount + ' : Komputer';
}
}