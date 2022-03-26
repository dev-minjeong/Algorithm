// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12937

function solution(num) {
    let answer = '';
    (num % 2 ===0) ? answer = "Even" : answer = "Odd";
    return answer;
}
