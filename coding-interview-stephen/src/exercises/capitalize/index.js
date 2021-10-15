// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	let words = [];
	for (const word of str.split(' ')) {
		words.push(word[0].toUpperCase() + word.slice(1))
	}
	return words.join(' ');
}

function capitalize2(str) {
	return (str[0].toUpperCase() + str.slice(1)).split(' ').reduce((pre, cur) => {
		return pre + ' ' + (cur[0].toUpperCase() + cur.slice(1));
	});
}

console.log(capitalize2('a short sentence'))
module.exports = capitalize2;
