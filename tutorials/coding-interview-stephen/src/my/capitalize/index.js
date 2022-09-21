// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/* function capitalize(str) {
	return str.charAt(0).toUpperCase().concat(str.slice(1)).split(' ').reduce((acc, curr) => {
		return acc.concat(' ',curr.charAt(0).toUpperCase(), curr.slice(1));
	});
} */

/* function capitalize(str) {
	let strArr = [];
	for (const word of str.split(' ')) {
		strArr.push(word.charAt(0).toUpperCase().concat(word.slice(1)))
	}
	return strArr.join(' ');
} */

function capitalize(str) {
	let result = str[0].toUpperCase();
	for (let index = 1; index < str.length; index++) {
		if(str[index-1] === ' ') {
			result += str[index].toUpperCase();
		} else {
			result += str[index];
		}
	}
	return result;
}

console.log(capitalize('a short sentence'))

module.exports = capitalize;
