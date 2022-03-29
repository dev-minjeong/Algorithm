// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    let num = 0;
    const arr = [...x.toString()];
    arr.forEach((item) => { item *= 1; num += item; });
    if(x % num === 0) return true;
    else return false;
}
