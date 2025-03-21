function solution(A, B, K) {
    // Implement your solution here
    let includeA = A % K == 0 ? 1 : 0;
    let result = Math.floor(B / K) - Math.floor(A / K);
    return result + includeA;
}