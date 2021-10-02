// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const mapChar = {};

	for (const letter of str) {
		if(!mapChar[letter]) {
			mapChar[letter] = 1
		} else {
			mapChar[letter]++;
		}
	}

	let maxChar = 0;
	let maxCharIndex = '';

	for (const [index, value] of Object.entries(mapChar)) {
		if(value > maxChar) {
			maxChar = value;
			maxCharIndex = index;
		}
	}
	return maxCharIndex;
}

console.log(maxChar('abcccccccd'))
module.exports = maxChar;
