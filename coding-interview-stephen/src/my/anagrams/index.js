// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* function buildMap(str) {
	let map = {};
	for (const letter of str.replace(/[^\w]/g, "").toLowerCase()) {
		map[letter] = map[letter] + 1 || 1;
	}
	return map;
}

function anagrams(stringA, stringB) {
	let mapA = buildMap(stringA);
	let mapB = buildMap(stringB);

	if (Object.keys(mapA).length != Object.keys(mapB).length) {
		return false;
	} else {
		for (const letter in mapA) {
			if(mapA[letter] != mapB[letter]) {
				return false;
			}
		}
		return true;
	}
} */

function anagrams(stringA, stringB) {
	let newStringA = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
	let newStringB = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');

	return newStringA == newStringB;
}

console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))

module.exports = anagrams;
