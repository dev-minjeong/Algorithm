//문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr)
{
    var answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i+1]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}
