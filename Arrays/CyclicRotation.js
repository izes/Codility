function solution(A, K) {
    // Implement your solution here
    let result = [];

    if(A.length == 1 || K == 0){
        return A;
    }

    for(let i=0; i<A.length; i++){
        let newIndex = (i+K) % A.length;
        result[newIndex] = A[i];
    }
    return result;
}