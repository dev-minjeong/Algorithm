// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
    let answer = '';
    const arr = [...phone_number.toString()];
    for(let i = 0; i < arr.length - 4; i++) {
        arr[i] = '*';
    }
    answer = arr.join('');
    return answer;
}
