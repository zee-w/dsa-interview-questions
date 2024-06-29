// Reverse the elements in an array.
 
function solution(A) {
    let B=[];
    let ALength=A.length
    for (let i = 1; i <= A.length; i++) {
        B[i-1]=A[ALength-i]
    }
    return B
}


console.log(solution([7,8,9,20,23]));