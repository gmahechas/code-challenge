export interface ICoin {
	id: string;
	availableSupply: number;
	icon: string;
	marketCap: number;
	price: number;
	name: string;
	symbol: string;
	priceChange1h: number;
	priceChange1d: number;
	priceChange1w: number;
}