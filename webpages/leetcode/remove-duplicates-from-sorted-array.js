function solution(nums) {

	if(nums.length == 0) {
		return nums;
	}

	let i = 0;
	while (i+1 < nums.length ) {
		debugger;
		if (nums[i] == nums[i + 1]) {
			nums.splice(i+1, 1)
		} else {
			i++;
		}
	}
	console.log(i+1)
	/* return i + 1; // for leetcode */
	return nums;
}

console.log(solution([-1, 0, 0, 0, 0, 3, 3]));