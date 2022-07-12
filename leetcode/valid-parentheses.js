/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true


Example 2:

Input: s = "()[]{}"
Output: true


Example 3:

Input: s = "(]"
Output: false
*/

function solution(s) {
	if (s.length == 0 || s.length == 1 || (s.length % 2) !== 0) {
		return false;
	}

	if (s.length == 2) {
		return s == "()" || s == "[]" || s == "{}";
	}

	let sArr = s.split('');
	let valid = true;
	let i = 0;

	let mapOne = {
		"(": ")",
		"[": "]",
		"{": "}",
	};

	let proccesedIndex = [];

	while (i < s.length && valid) {
		debugger;
		if (!proccesedIndex.includes(i)) {
			if (mapOne[sArr[i]] === sArr[i + 1]) {
				debugger;
				proccesedIndex.push(i, i + 1);
				i += 2;
			} else if (mapOne[sArr[i]] === sArr[s.length - i - 1]) {
				debugger;
				proccesedIndex.push(i, s.length - i - 1);
				i += 1;
			} else {
				let pivotValid = false;
				for (let j = i + 1; j < s.length; j++) {
					debugger;
					if (mapOne[sArr[i]] == s[j]) {
						debugger;
						if (s.slice(i + 1, j).length % 2 == 0) {
							pivotValid = true;
							proccesedIndex.push(i, j);
							break;
						}

					}
				}
				valid = pivotValid;
				i += 1;
				debugger;
			}
		} else {
			i += 1;
		}
	}

	return valid;
}

//console.log(solution("(([]()){})"))
//console.log(solution("({}([]()))"))
//console.log(solution("({([][]){}})"));
//console.log(solution("({{}([][])})"));
console.log(solution("({{}()[]([][])})"));
//console.log(solution("[({])}"));