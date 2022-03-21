// 문제링크 : https://programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
    var n = 0;
    for(let i = 0; i < seoul.length; i++){
        if(seoul[i].indexOf("Kim") == 0) n = i;
    }
    var answer = "김서방은 "+ n +"에 있다";
    return answer;
}
