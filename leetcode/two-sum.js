/* function solution(nums, target) {
	const retArr = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if ((nums[i] + nums[j]) == target) {
				retArr.push(i, j);
				break;
			}
		}
	}
	return retArr;
}; */

function memoize(fn) {

	const cache = {};

	return function (nums, target, indexOne=0, indexTwo=1) {
		debugger;
		if (cache[`${nums[indexOne]}${nums[indexTwo]}`]) {
			return cache[`${nums[indexOne]}${nums[indexTwo]}`] = 1;
		}

		const result = fn.call(this, nums, target, indexOne, indexTwo);
		cache[`${nums[indexOne]}${nums[indexTwo]}`] = nums[indexOne] + nums[indexTwo];
		return result;
	}

}

function recursive(nums, target, indexOne, indexTwo) {
	debugger;
	if ((nums[indexOne] + nums[indexTwo]) == target) {
		let arrIndex = [indexOne, indexTwo];
		debugger;
		return arrIndex;
	}
	if (indexTwo+1 < nums.length) {
		return twoSum(nums, target, indexOne, indexTwo+1)
	} else {
		return twoSum(nums, target, indexOne+1, indexOne+2)
	}
}

const twoSum = memoize(recursive)
console.log(twoSum([3, 2, 2, 2, 3], 6))
//let sum = solution([2, 7, 11, 15], 9);
