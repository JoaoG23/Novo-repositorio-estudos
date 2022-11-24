// iniciar minhas variaveis
// Ela será resposável por gerenciar todos os estados do jogo.

let board = ['','','','','','','','',''];
let playTimer = 0;
let symbols = ['o','x'];

function handleMove(position){

    if(board[position]==''){
    board[position] = symbols[playTimer];
    if (playTimer == 0) {
        playTimer = 1;
    }else{
        playTimer = 0;
    }
}
}