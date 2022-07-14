/* function solution(nums, target) {
	let index = 0;
	for (let i = 0; i < nums.length; i++) {
		debugger;
		if (nums[i] == target) {
			return i;
		} else if (!nums[i - 1] && nums[i] < target) {
			index = i + 1;
		} else if (nums[i] < target) {
			index = i + 1;
		}
	}
	return index;
} */

function solution(nums, target) {
	let index = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == target) {
			return i;
		} else if ((!nums[i - 1] && (nums[i] < target)) || (nums[i] < target)) {
			index = i + 1;
		}
	}
	return index;
}

console.log(solution([1, 3, 5, 6], 7));