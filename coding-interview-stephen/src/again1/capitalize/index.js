// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	let newStr = '';
	for (const word of str.split(' ')) {
		newStr += word[0].toUpperCase() + word.slice(1) + ' ';
	}
	return newStr
}

function capitalize2(str) {
	return (str[0].toUpperCase() + str.slice(1)).split(' ').reduce((previous, current) => {
		return previous + ' ' + (current[0].toUpperCase() + current.slice(1));
	});
}

const capitalize3 = (str) => (str[0].toUpperCase() + str.slice(1)).split(' ').reduce((previous, current) => previous + ' ' + (current[0].toUpperCase() + current.slice(1)));

console.log(capitalize3('a short sentence'))
module.exports = capitalize;
