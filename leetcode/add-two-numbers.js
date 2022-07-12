function solution(l1, l2) {
	let sumL1 = parseInt(l1.join(''));
	let sumL2 = parseInt(l2.join(''));
	let totalSum = (sumL1 + sumL2) + '';
	return totalSum.split('').reverse();
}

let arr = solution([2, 4, 3], [5, 6, 4]);
console.log(arr);