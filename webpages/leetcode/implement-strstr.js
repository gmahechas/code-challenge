function solution(haystack, needle) {

	if (haystack.length == 1 && needle.length == 1 && haystack[0] == needle[0]) {
		return 0;
	}
	for (let i = 0; i < haystack.length; i++) {
		debugger;
		if (haystack[i] == needle[0] && haystack.slice(i, i + needle.length) == needle) {
			return i;
		}
	}
	return -1
}

console.log(solution("hello", "ll"));