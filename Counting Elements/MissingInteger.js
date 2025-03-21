function solution(A) {
    // Implement your solution here
    let set = new Set(A);

    for(let i=1; i<set.size+2; i++){
        if(!set.has(i)){
            return i;
        } 
    }
    return 1;
}