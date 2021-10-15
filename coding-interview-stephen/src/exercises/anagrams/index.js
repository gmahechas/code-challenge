// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function cleanString(str) {
	return str.replace(/[^\w]/g, "").toLowerCase();
}

function stringToMap(str) {

	const mapString = {};

	for (const letter of str) {
		mapString[letter] = mapString[letter]++ || 1
	}

	return mapString;

}

function anagrams(stringA, stringB) { // solution 1

	const stringACleaned = cleanString(stringA);
	const stringAMapped = stringToMap(stringACleaned);
	
	const stringBCleaned = cleanString(stringB);
	const stringBMapped = stringToMap(stringBCleaned);

	if(Object.keys(stringAMapped).length !== Object.keys(stringBMapped).length) {
		return false;
	}

	for (const charA in stringAMapped) {
		if(stringAMapped[charA] !== stringBMapped[charA]) {
			return false;
		}
	}

	return true;
}

/* ############### solution 2 */
function cleanString2(str) {
	return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

function anagrams2(stringA, stringB) { // solution 2
	return cleanString2(stringA) == cleanString2(stringB);
}

console.log(anagrams('rail safety', 'fairy tales'))
module.exports = anagrams2; // test with solution 2
