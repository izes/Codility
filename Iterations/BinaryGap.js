function solution(N) {
    // Implement your solution here
    let count = 0;
    let max_count = 0;
    let bin = N.toString(2);

    for(let i=0; i<bin.length; i++){
        {
            if(bin[i] === '0'){
                count++;
            } else {
                max_count = Math.max(count, max_count)
                count = 0;
            }
        }
    }
    
    return max_count;
}