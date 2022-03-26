// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    let answer = [];
    if(arr.length <= 1) answer = [-1];
    else{
        let temp = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(temp > arr[i]){
                temp = arr[i];
            }
        }
        let n = arr.filter((element) => element !== temp);
        answer = n;
    }
    return answer;
}
