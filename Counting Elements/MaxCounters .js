function solution(N, A) {
    let result = new Array(N).fill(0); 
    let max = 0; 
    let lastMax = 0;

    for (let x = 0; x < A.length; x++) {
        if (A[x] <= N) {
            let index = A[x] - 1;
            result[index] = Math.max(result[index], lastMax);
            result[index]++;

            max = Math.max(max, result[index]);
        } else {
            lastMax = max;
        }
    }

    for (let i = 0; i < N; i++) {
        result[i] = Math.max(result[i], lastMax);
    }

    return result;
}