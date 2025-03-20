function solution(A) {
    // Implement your solution here
    let result = 0;

    for(var i=0; i<A.length; i++){
        result ^=A[i]
    }
    
    return result;
}