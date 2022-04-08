// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42628

function solution(operations) {
    let answer = [];
    operations.forEach((value) => {
        answer.sort((a, b) => a-b);
        if(value.includes("I ")) {
            answer.push(value.slice(2)*1);
        } else if(value.includes("D 1")) {
            answer.pop();
        } else {
            answer.shift();
        }
    } )
    return answer.length === 0 ? [0, 0] : [Math.max(...answer), Math.min(...answer)];
}
