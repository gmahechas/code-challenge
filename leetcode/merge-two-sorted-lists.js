/* 
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

/* 
function solution(list1, list2) {
  let maxList = list1.length > list2.length ? list1.length : list2.length;
	let listMerged = [];
	for (let i = 0; i < maxList; i++) {
		debugger;
		if (list1[i] || list1[i] == 0) {
			listMerged.push(list1[i]);
			debugger;
		}
		if (list2[i] || list2[i] == 0) {
			listMerged.push(list2[i]);
			debugger;
		}
	}
	return listMerged;
}
*/
function solution(list1, list2) {

	let newList = list2;
	for (let i = 0; i < newList.length; i++) {
		debugger;
		if ((list1[i] || list1[i] == 0) && list1[i] <= newList[i+1]) {
			newList.splice(i + 1, 0, list1[i]);
		} else {
			list1.splice(i,0,0)
		}
	}

	console.log(newList);
	return newList;
}

console.log(solution([1, 2, 4], [1, 3, 4]))