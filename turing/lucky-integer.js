/* 
Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.

 

Example 1:

Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
Example 2:

Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
Example 3:

Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.
*/
function solution(arr) {
	let arrMapped = {};
	for (const number of arr.sort()) {
		arrMapped[number] = arrMapped[number] + 1 || 1;
	}
	
	let lucky = [-1];
	for (const [key, value] of Object.entries(arrMapped)) {
		if (key == value) {
			lucky.push(value);
		}
	}

	return Math.max(...lucky);
}

let lucky = solution([2, 2, 3, 3, 3]);
console.log(lucky);