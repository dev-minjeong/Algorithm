// 문제링크 : https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
    var answer = true;
    let pcnt = 0, ycnt = 0;
    const temp = [...(s.toLowerCase())];
    for(let i = 0; i < s.length; i++) {
        if(temp[i] === "p") pcnt++;
        else if(temp[i] === "y") ycnt++;
    }
    pcnt === ycnt ? answer = true : answer = false
    return answer;
}
