//Find the maximum element in an array.


//Find the minimum element in an array.


function findMin(A) {

    let minimum = Infinity;

    for (let i = 0; i < A.length; i++) {
        if (A[i] < minimum) {
            minimum = A[i];
        }
    }
    return minimum;


}

function findMax(B) {

    let maximum = -Infinity;

    for (let i = 0; i < B.length; i++) {
        if (B[i] > maximum) {
            maximum = B[i];
        }
    }
    return maximum;


}


function solution(A) {
    let min = findMin(A);
    let max = findMax(A);

    console.log('Min Element in the Array: ' + min);
    console.log('Max Element in the Array: ' + max);
}


solution([2, 6, 9, 1, 100, 4, 3])