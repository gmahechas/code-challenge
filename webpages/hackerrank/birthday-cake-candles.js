function solution(arr) {
	let max = 0;
	let map = {}; 

	for (const number of arr) {
		if(!map[number]) {
			map[number] = 1;
			if(number > map) {
				max = number;
			}
		} else {
			map[number] += 1;
			if(number > max) {
				max = number;
			}
		}
	}
	return map[max];
}
console.log(solution([3, 2, 1, 3]));