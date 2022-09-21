// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let strMapped = {};
	let maxChar = '';
	let max = 0;
	for (const letter of str) {
		strMapped[letter] = strMapped[letter] + 1 || 1;
		if(strMapped[letter] > max) {
			maxChar = letter;
			max = strMapped[letter];
		}
	}
	console.log({ maxChar, max})
	return strMapped;
}

console.log(maxChar('abcccccccd'))

module.exports = maxChar;
