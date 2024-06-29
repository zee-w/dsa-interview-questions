//Check if an array is sorted.

function solution(A) {
    let counter=1;
    for (let i = 0; i < A.length; i++) {
        for (let j = i+1; j < A.length-1; j++) {
            if(A[i]<A[j]){
                counter=counter+i
            }
        }
    }

    if (counter ===A.length) console.log('Array is sorted')
    else console.log('Array is not sorted');
}


solution([1, 2, 3, 4, 5]);

solution([2, 5, 0, 1, 3]);