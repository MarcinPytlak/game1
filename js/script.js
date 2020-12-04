let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = "kamień";
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
    playerMove = 'kamień';
}else if (playerInput == '2'){
    playerMove = 'papier';
}else if (playerInput == '3'){
    playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove)

if( playerMove == '1' || playerMove == '2' || playerMove == '3'){
}else if( computerMove === playerMove){
    printMessage('Mamy remis!');
}else if(computerMove =='kamień' && playerMove == 'nożyce'){
    printMessage('Przgrałeś! Spróbuj raz jeszcze oszukać skrypt :)');
}else if(computerMove =='kamień' && playerMove =='papier'){
    printMessage('Gratuluje! Wygrałeś');
}else if(computerMove =='papier' && playerMove == 'kamień'){
    printMessage('Przgrałeś! Spróbuj raz jeszcze oszukać skrypt :)');
}else if (computerMove =='papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
}else if(computerMove =='nożyce' && playerMove == 'papier'){
    printMessage('Przgrałeś! Spróbuj raz jeszcze oszukać skrypt :)');
}else if (computerMove =='nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}else{
    printMessage('uhuhu! Próbowałeś oszukać Freda, teraz Fred oszuka Ciebie :D');
} 
