// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    let answer = 0;
    const num = (n+'').split('');
    for(let i = 0; i < num.length; i++){
        num[i] *= 1;
    }
    answer = num.sort().reverse().join('');
    return answer*1;
}
