function solution(s) {
	let sArr = s.trim().split(' ');
	return sArr[sArr.length - 1].length;
}

console.log(solution("   fly me   to   the moon  "))