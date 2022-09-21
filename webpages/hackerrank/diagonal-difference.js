function solution(arr) {
	let firstDiagonal = 0;
	let secondDiagonal = 0;

	for (let row = 0; row < arr.length; row++) {
		for (let column = row; column < arr[row].length; column++) {
			firstDiagonal += (arr[row][column]);
			break;
		}

		for (let column = arr[row].length - row - 1; column >= 0; column--) {
			secondDiagonal += arr[row][column];
			break;
		}
	}
	return Math.abs(firstDiagonal - secondDiagonal);
}
console.log(solution([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))