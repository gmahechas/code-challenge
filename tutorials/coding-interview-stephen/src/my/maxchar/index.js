// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let mapChar = {};
	let max = 0;
	let maxChar = '';

	for (const letter of str) {
		mapChar[letter] = mapChar[letter] + 1 || 1;
		if (mapChar[letter] > max) {
			max = mapChar[letter];
			maxChar = letter;
		}
/* 		if(!mapChar[letter]) {
			mapChar[letter] = 1;
		} else {
			mapChar[letter]++;
		} */
	}

/* 	for (const letter in mapChar) {
		if (mapChar[letter] > max) {
			max = mapChar[letter];
			maxChar = letter;
		}
	} */
	return maxChar;
}

console.log(maxChar('abcccccccd'));
module.exports = maxChar;
