// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    let answer = '';
    for(let i = 0; i < s.length; i++){
        (i%2 === 0) ? answer += s[i].toUpperCase(): answer += s[i].toLowerCase();
    }
    return answer;
}
