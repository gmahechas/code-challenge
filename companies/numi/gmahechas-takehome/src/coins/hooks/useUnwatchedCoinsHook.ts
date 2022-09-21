import { useState, SetStateAction, Dispatch } from 'react';
import { ICoin } from 'coins/interfaces/coin.interface';

interface IUseUnwatchedCoinsHook {
	(initialState: ICoin[]): [ICoin[], Dispatch<SetStateAction<ICoin[]>>, (coin: ICoin, index: number) => void, (index: number) => void, (dragIndex: number, hoverIndex: number) => void];
}

const useUnwatchedCoinsHook: IUseUnwatchedCoinsHook = (initialState = []) => {
	const [unwatchedCoins, setUnwatchedCoins] = useState<ICoin[]>(initialState);

	const addCoinToUnwatched = (coin: ICoin, index: number) => {
		const newUnwatchedCoins = [...unwatchedCoins];
		newUnwatchedCoins.splice(index, 0, coin);
		setUnwatchedCoins(newUnwatchedCoins);
	}

	const removeCoinFromUnwatched = (index: number) => {
		const newUnwatchedCoins = unwatchedCoins.filter((_, i) => i !== index);
		setUnwatchedCoins(newUnwatchedCoins);
	}

	const reorderUnwatchedCoins = (dragIndex: number, hoverIndex: number) => {
		const newUnwatchedCoins = [...unwatchedCoins];
		const dragCoin = newUnwatchedCoins[dragIndex];
		newUnwatchedCoins.splice(dragIndex, 1);
		newUnwatchedCoins.splice(hoverIndex, 0, dragCoin);
		setUnwatchedCoins(newUnwatchedCoins);
	}
	
	return [unwatchedCoins, setUnwatchedCoins, addCoinToUnwatched, removeCoinFromUnwatched, reorderUnwatchedCoins];
}

export default useUnwatchedCoinsHook