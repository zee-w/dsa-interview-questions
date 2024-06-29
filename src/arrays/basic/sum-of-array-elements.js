//Calculate the sum of all elements in an array.

function solution(A) {
    let sum=0;
    for (let i = 0; i < A.length; i++) {
        sum = sum + A[i];
    }
    return sum;
}


console.log(solution([2, 6, 2]));