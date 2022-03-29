// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
    let answer = 0;
    arr.forEach((item) => answer += item);
    answer = answer / arr.length;
    return answer;
}
