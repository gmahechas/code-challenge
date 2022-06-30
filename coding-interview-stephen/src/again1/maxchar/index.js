// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let charMap = {};
	for (let letter of str) {
		if (!charMap[letter]) {
			charMap[letter] = 1;
		} else {
			charMap[letter]++;
		}
	}

	console.log(charMap)
	maxValue = 0;
	maxChard = '';
	for (const [key, val] of Object.entries(charMap)) {
		if(val > maxValue) {
			maxValue = val;
			maxChard = key;
		}
	}
	return maxChard;
}


console.log(maxChar("adsaaadddsseadffdsluyhkn"))
module.exports = maxChar;
