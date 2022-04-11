// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
    return (numbers+"").split(",").sort((a, b)=> (b+a)-(a+b)).join("");
}
