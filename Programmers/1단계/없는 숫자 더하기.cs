/* 문제 링크: https://programmers.co.kr/learn/courses/30/lessons/86051 */

using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        for (int i = 0; i <= 9; i++)
        {
            if(!numbers.Contains(i))
                answer += i;
        }
        return answer;
    }
}
