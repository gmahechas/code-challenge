function printFirstItemThenFirstHalfThenSayHi100Times(items) {
	console.log(items[0]); // O(1)

	var middleIndex = Math.floor(items.length / 2);
	var index = 0;

	while (index < middleIndex) { // O(n/2)
		console.log(items[index]);
		index++;
	}

	for (var i = 0; i < 100; i++) { // 100
		console.log('hi');
	}
}

// O(1 + n/2 + 100)
// O(n/2 + 101)
// O(n/2 + 1)
// O(n + 1)
// O(n)


function compressBoex(boxes) {
	boxes.forEach(function(box) {
		console.log(box)
	})

	boxes.forEach(function (box) {
		console.log(box)
	})
}

// O(2n)
// O(n)