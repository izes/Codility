function solution(A) {
    // Implement your solution here
    let set = new Set();

    for (let i = 0; i < A.length; i++) {
        if (A[i] > A.length || set.has(A[i])) {
            return 0;
        }
        set.add(A[i]);
    }
    return set.size === A.length ? 1 : 0;
}