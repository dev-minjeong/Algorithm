// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
    let count = 0;
    while(num !== 1) { 
        num = (num % 2 === 0) ? (num / 2) : (num * 3 + 1);
        count++;
        if(count >= 500) {count = -1; break;} 
    }
    return count;
}
