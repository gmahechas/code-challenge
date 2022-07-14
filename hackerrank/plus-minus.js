function solution(arr) {

	let map = {
		positive: 0,
		negative: 0,
		zero: 0,
	};

	for (const number of arr) {
		if (number == 0) {
			map.zero += 1;
		} else if(number > 0) {
			map.positive += 1;
		} else {
			map.negative += 1;
		}
	}

	for (const ratio in map) {
		console.log((map[ratio]/arr.length).toFixed(6));
	}
	return arr;
}
console.log(solution([-4, 3, -9, 0, 4, 1]));
