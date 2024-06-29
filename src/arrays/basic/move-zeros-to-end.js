// leetcode 283
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.


function solution(A) {

    let left = 0

    for (let right = 0; right < A.length; right++) {

        //move non zeros to the left
        if (A[right] !== 0) {
            [A[right], A[left]] = [A[left], A[right]]
            left++
        }
    }
    return A;
}


console.log(solution([0, 1, 0, 3, 12]));

