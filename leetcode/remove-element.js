function solution(nums, val) {
	if (nums.length == 0) {
		return nums;
	}

	let i = 0;
	while (i < nums.length) {
		debugger;
		if(nums[i] == val) {
			nums.splice(i,1);
		} else {
			i++;
		}

	}

	console.log(i);
	return i;
	return nums;
}

console.log(solution([3, 2, 2, 3], 3));