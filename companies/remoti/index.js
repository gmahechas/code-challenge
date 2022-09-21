function PageSplitterCheck(items, itemsPerPage, checkItemsOnPage, checkItemBelongsTo) {
	let splitter = new PageSplitter(items, itemsPerPage);
	let solution = [];
	solution[0] = splitter.pageCount();
	solution[1] = splitter.itemCount();
	solution[2] = splitter.pageItemCount(checkItemsOnPage);
	solution[3] = splitter.pageIndex(checkItemBelongsTo);
	return solution;
}
// DO NOT MODIFY THE CODE ABOVE!

class PageSplitter {

	constructor(items, itemsPerPage) {
		this.items = items;
		this.itemsPerPage = itemsPerPage;
	}

	pageCount() {
		let divide = this.items.length / this.itemsPerPage;
		if ((divide % 2 == 0) || (divide % this.itemsPerPage == 0)) {
			return divide;
		} else {
			return Math.floor(divide + 1);
		}
	}

	itemCount() {
		return this.items.length;
	}

	pageItemCount(checkItemsOnPage) {
		let pages = this.pageCount();
		debugger;
		if (checkItemsOnPage < pages - 1) {
			debugger;
			return this.itemsPerPage;
		} else if (checkItemsOnPage >= pages) {
			debugger;
			return -1;
		} else {
			debugger;
			let otherItems = checkItemsOnPage * (pages - 1);
			return this.itemCount() - otherItems;
		}
	}

	pageIndex(checkItemBelongsTo) {
		let findIndex = this.items.findIndex(element => element == checkItemBelongsTo);
		console.log(findIndex);
		console.log(findIndex / this.items.length)
	}

}


let solution = PageSplitterCheck(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 3, 3, "4");
console.log(solution);

