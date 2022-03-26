// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    let answer = 0;
    for(let i = 1; i<= n; i++){
        if(i*i === n) {
            answer = (i+1)*(i+1);
            break;
        }
    }
    if(answer === 0) answer = -1;
    return answer;
}
