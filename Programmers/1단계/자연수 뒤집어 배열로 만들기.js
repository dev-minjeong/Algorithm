// 문제 랑크 : https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    let answer = [];
    const num = (n+'').split('');
    for(let i = 0; i < num.length; i++){
        num[i] *= 1;
    }
    answer = num.reverse();
    return answer;
}
