export interface ICoinWIthHistorical {
	coinId: string;
	coinName: string;
	chart: { date: string, price: number }[];
}