/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]


Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
*/


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
