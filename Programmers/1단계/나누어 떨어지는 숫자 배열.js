//문제 링크: https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    var answer = [];
    var temp = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0){
            temp.push(arr[i]);
        }
    }
    answer = temp.sort(function(a, b){return a - b;});
    if(temp.length === 0){
        answer.push(-1);
    }
    return answer;
}
