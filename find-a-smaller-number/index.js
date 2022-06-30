function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	let newArr = A.filter(x => x >= 1).sort((a, b) => a - b);
	
	let x = 1;
	for (let i = 0; i < newArr.length; i++) {
		// if we find a smaller number no need to continue, cause the array is sorted
		debugger;
		if (x < newArr[i]) {
			return x;
		}
		x = newArr[i] + 1;
		debugger;
	}

	return x
}

console.log(solution([1, 3, 6, 4, 1, 2]));