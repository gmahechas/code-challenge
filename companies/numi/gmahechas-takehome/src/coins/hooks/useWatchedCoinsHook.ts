import { useState, SetStateAction, Dispatch } from 'react';
import { ICoin } from 'coins/interfaces/coin.interface';

interface IUseWatchedCoinsHook {
	(initialState: ICoin[]): [ICoin[], Dispatch<SetStateAction<ICoin[]>>, (coin: ICoin, index: number) => void, (index: number) => void, (dragIndex: number, hoverIndex: number) => void];
}

const useWatchedCoinsHook: IUseWatchedCoinsHook = (initialState = []) => {
	const [watchedCoins, setWatchedCoins] = useState<ICoin[]>(initialState);

	const addCoinToWatched = (coin: ICoin, index: number) => {
		const newWatchedCoins = [...watchedCoins];
		newWatchedCoins.splice(index, 0, coin);
		setWatchedCoins(newWatchedCoins);
	}

	const removeCoinFromWatched = (index: number) => {
		const newWatchedCoins = watchedCoins.filter((_, i) => i !== index);
		setWatchedCoins(newWatchedCoins);
	}

	const reorderWatchedCoins = (dragIndex: number, hoverIndex: number) => {
		const newWatchedCoins = [...watchedCoins];
		const dragCoin = newWatchedCoins[dragIndex];
		newWatchedCoins.splice(dragIndex, 1);
		newWatchedCoins.splice(hoverIndex, 0, dragCoin);
		setWatchedCoins(newWatchedCoins);
	}

	return [watchedCoins, setWatchedCoins, addCoinToWatched, removeCoinFromWatched, reorderWatchedCoins];
}

export default useWatchedCoinsHook