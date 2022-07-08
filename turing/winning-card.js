/* 
In a card game, each player will be given a set of random cards. Players will throw on the table their one winning card, the player with the highest card wins.
A winning card is the card that only exists once in the set of cards, and the highest one.
Given an array of sets of integers cards, return the card of the winning player. Return -1 If no such card is found.

Example 1:
Input: cards = [[5,7,3,9,4,9,8,3,1], [1,2,2,4,4,1], [1,2,3]]
Output: 8

Example 2:
Input: cards = [[5,5], [2,2]]
Output: -1

Constraints:

1 <= cards.length <= 2000
0 <= cards[i] <= 1000
*/
function solution(cards) {
	let highestCards = [];

	for (const cardSet of cards) {
		let mapCardSet = {};
		let mapMinNumber = {};

		for (const card of cardSet) {
			mapCardSet[card] = mapCardSet[card]+1 || 1;
			if (mapCardSet[card] == 1) {
				mapMinNumber[card] = 1;
			} else {
				delete mapMinNumber[card];
			}
		}
		
		let minCard = -1;
		for (const key in mapMinNumber) {
			if(key > minCard) {
				minCard = key;
			}
		}

		highestCards.push(minCard);
		
	}
	return Math.max(...highestCards);
}

let max = solution([[5, 7, 3, 9, 4, 9, 8, 3, 1], [1, 2, 2, 4, 4, 1], [1, 2, 3]])
//let max = solution([[5, 5], [2, 2]])
console.log(max)