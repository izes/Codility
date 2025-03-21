function solution(S, P, Q) {
    // Implement your solution here
	let sequence = '';
	let result = [];

	for (let i=0; i<P.length; i++) {
		sequence = S.slice(P[i], Q[i] + 1);

		if (sequence.indexOf('A') !== -1) {
			result.push(1)
		} else if (sequence.indexOf('C') !== -1) {
			result.push(2)
		} else if (sequence.indexOf('G') !== -1) {
			result.push(3)
		} else {
			result.push(4)
		}
	}
	return result;
}
