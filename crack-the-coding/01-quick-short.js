/* 

						 start
							 |
array = [2,6,5,3,8,7,1,0]  1. choose a pivot (3)
array = [2,6,5,0,8,7,1,3] 2. move pivot at the end

[2,6,5,0,8,7,1,3]
 |-----------|
from left search item larger that pivot = 6
from right sear item smaller that pivot = 1
and swap
result [2,1,5,0,8,7,6,3]

from left search item larger that pivot = 5
from right sear item smaller that pivot = 0
and swap
result [2,1,0,5,8,7,6,3]

from left search item larger that pivot = 5 // stop when index of left > right
from right sear item smaller that pivot = 0
swap left item with our pivot
result [2,1,0,3,8,7,6,5]


----------------------------------------------
right part [8,7,6,5]

1. [8,7,6,5] pivot=7
2. [8,5,6,7]

from left search item larger that pivot = 8
from right sear item smaller that pivot = 6

result. [6,5,8,7]

from left search item larger that pivot = 8
from right sear item smaller that pivot = 5
result. [6,5,7,8]

do the same for left part

----------------------------------------------

How to choose a pivot

 |       |       |
[2,6,5,3,8,7,1,0,4]

// swap
				pivot
 |       |       |
[2,6,5,3,4,7,1,0,8]


Worst = O(n2)
Average = nLog(n)

*/

function selectPivot(array) {
	const pivotIndex = 3;
	return { pivot: array[pivotIndex], pivotIndex }
}

function swapItem(array, index, goto) {
	let indexValue = array[index];
	let gotoValue = array[goto];
	array[index] = gotoValue;
	array[goto] = indexValue;
}

function quickShort(array) {
	console.log(array)

	// 1. select pivot
	let { pivot, pivotIndex } = selectPivot(array);

	// 2. move pivot at end
	swapItem(array, pivotIndex, array.length-1)

	console.log(array);
}

console.log(quickShort([2, 6, 5, 3, 8, 7, 1, 0]))