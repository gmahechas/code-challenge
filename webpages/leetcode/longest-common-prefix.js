/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
function solution(strs) {
	let i = 0;
	let prefix = '';
	let match = true;

	while (match) {
		let matchLetter = null;
		for (const letter of strs) {
			if (matchLetter == null) {
				matchLetter = letter[i] ? letter[i] : '';
			}
			if (matchLetter != letter[i]) {
				matchLetter = null;
				match = false;
				break;
			}
		}
		prefix += matchLetter != null ? matchLetter : '';
		i++;
	}
	return prefix;
}

console.log(solution([""]))