function solution(A) {
    // Implement your solution here
    let total = 0;
    let arraySum = 0;
    
    for(let x=0; x<=A.length; x++){
        total += (x+1);
        if(A[x]) arraySum+=A[x];
    }
    return total - arraySum;
}