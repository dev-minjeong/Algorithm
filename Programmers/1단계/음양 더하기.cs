/* 문제 링크: https://programmers.co.kr/learn/courses/30/lessons/76501 */

using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public int solution(int[] absolutes, bool[] signs) {
        int answer = 0;
        for(int i  = 0; i < absolutes.Length; i++)
        {
            if(signs[i] == true)
            {
                answer += absolutes[i];
            }
            else if(signs[i] == false)
            {
                answer -= absolutes[i];
            }
        }
        return answer;
    }
}
