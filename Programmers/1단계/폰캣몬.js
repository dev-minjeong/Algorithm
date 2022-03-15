/* 문제 링크: https://programmers.co.kr/learn/courses/30/lessons/1845 */

function solution(nums) {
    const num = nums.length / 2;
    const filter = nums.filter((a, b) => {
        return nums.indexOf(a) === b;
    });
    return (filter.length >= num) ? num : filter.length;
}
