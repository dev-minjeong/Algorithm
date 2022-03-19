// 문제 링크: https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
    var answer = [];
    var input = [...dartResult];
    for(let i = 0; i < input.length; i++) {
        if(input[i] === "S") {
            input[i-2] === "1" ? answer.push(10) : answer.push(input[i-1]);
        } else if(input[i] === "D") {
            input[i-2] === "1" ? answer.push(10 ** 2) : answer.push(input[i-1] ** 2);
        } else if(input[i] === "T") {
            input[i-2] === "1" ? answer.push(10 ** 3) : answer.push(input[i-1] ** 3);
        } else if(input[i] === "*") {
            if(answer[answer.length] === 1) {
                answer[answer.length-1] *=  2;
            } else {
                answer[answer.length-1] *=  2;
                answer[answer.length-2] *=  2;
            }
        } else if(input[i] === "#") {
            answer[answer.length-1] *= -1;
        }
    }
    let result = 0;
    for(let i = 0; i < answer.length; i++) {
        answer[i] *= 1;
        result += answer[i];
    }
    return result;
}
