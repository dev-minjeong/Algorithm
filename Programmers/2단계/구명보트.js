// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
    let count = 0;
    people.sort((a, b) => a - b);
    while(people.length) {
    let a = people[0], b = people[people.length-1];
        if(people.length === 1) {
            count++;
            break;
        } else {
            if(a + b <= limit) {
                people.pop();
                people.shift();
                count++;
            } else {
                people.pop();
                count++;
            } 
        }
    }
    return count;
}
