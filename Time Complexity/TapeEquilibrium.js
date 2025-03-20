function solution(A) {
    // Implement your solution here
    let total = A.reduce((a,b) => a+b,0);
    let begin = 0;
    let end = total;
    let min = Number.MAX_VALUE;

    for(let i=0; i<A.length-1; i++) {
        begin += A[i];
        end -= A[i];

        let result = Math.abs(begin - end);
        if(result < min) min = result;
    }
    return min;
}