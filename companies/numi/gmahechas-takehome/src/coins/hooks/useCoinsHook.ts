import { useState, useEffect } from 'react';
import { ICoin } from 'coins/interfaces/coin.interface';

interface IUseCoinsHook {
	(initialState: ICoin[]): [ICoin[]]
}

const useCoinsHook: IUseCoinsHook = (initialState = []): [ICoin[]] => {
	const [coins, setCoins] = useState<ICoin[]>(initialState);
	const getCoins = async () => {
		const resp = await fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=USD');
		const data = await resp.json();
		setCoins(data.coins);
	};

	useEffect(() => {
		getCoins();
	}, []);

	return [coins];
}

export default useCoinsHook