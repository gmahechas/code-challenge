// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function strMapped(str) {
	let strMapped = {};
	for (const letter of str) {
		strMapped[letter] = strMapped[letter] + 1 || 1;
	}
	return strMapped;
}

function anagrams(stringA, stringB) {

	let newStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
	let newStringB = stringB.replace(/[^\w]/g, '').toLowerCase();

	if(newStringA.length != newStringB.length) {
		return false;
	}

	let stringAMapped = strMapped(newStringA);
	let stringBMapped = strMapped(newStringB);

	for (const a in stringAMapped) {
		if(stringAMapped[a] != stringBMapped[a]) {
			return false;
		}
	}

	return true;
}

console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))


module.exports = anagrams;
