// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    var answer = 0;
    if(a<b){
        for(let i = a; i <= b; i++){
            answer += i;
        }
    }
    else if(a>b){
        for(let i = b; i <= a; i++){
            answer += i;
        }
    }
    else if(a===b){
        answer = a;
    }
    return answer;
}
