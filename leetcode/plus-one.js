function solution(digits) {
	let number = BigInt(digits.join('')) + 1n;
	return number.toString().split('');
}
console.log(solution([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))