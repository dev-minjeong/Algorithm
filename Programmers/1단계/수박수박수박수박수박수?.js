// 문제링크 : https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
    var answer = "";
    for(let i = 1; i <= n; i++){
        (i % 2 === 1) ? answer += '수' : answer += '박';
    }
    return answer;
}
