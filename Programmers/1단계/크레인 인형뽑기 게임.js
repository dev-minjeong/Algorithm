//문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
    var answer = 0;
    var x = 0;
    var temp = [];
    var count = 0;
    for(let i = 0; i < moves.length; i++) {
        x = 0;
        const order = moves[i] - 1;
        while(x < board.length) {
            if(board[x][order] !== 0) {
                temp.push(board[x][order]);
                board[x][order] = 0;
                if(temp[temp.length-1] === temp[temp.length-2]) {
                    temp.length -= 2;
                    count += 2;
                }
                break;
            } else x++;
        }
    }
    return count;
}
