function solution(A) {
    // Implement your solution here
    var zero = 0;
    var count = 0;

    for (var i = 0; i < A.length; i++) {
        if (A[i] == 0) {
            zero++;
        } else {
            count += zero;
            if (count > 1000000000) return -1;
        }
    }

    return count;
}