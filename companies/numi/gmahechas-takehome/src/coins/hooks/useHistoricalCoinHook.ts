import { useState } from 'react'
import { ICoinWIthHistorical } from 'coins/interfaces/historical-coin.interface'
import { ICoin } from 'coins/interfaces/coin.interface';

interface IUseChartHook {
	(initialState: ICoinWIthHistorical[]): [ICoinWIthHistorical[], (coin: ICoin, index: number) => void, (index: number) => void, (dragIndex: number, hoverIndex: number) => void];
}

const useHistoricalCoinHook: IUseChartHook = (initialState = []) => {
	const [historical, setHistorical] = useState<ICoinWIthHistorical[]>(initialState);

	const getHistorical = async (coin: ICoin) => {
		const resp = await fetch(`https://api.coinstats.app/public/v1/charts?period=1y&coinId=${coin.id}&currency=USD`);
		const data = await resp.json();
		return data.chart;
	};

	const addHistorical = async (coin: ICoin, index: number) => {
		const newHistorical = [...historical];
		const chart = await getHistorical(coin);
		const chartMap = chartMapped(chart);
		const coinWithHistorical: ICoinWIthHistorical = Object.assign({}, { coinId: coin.id, coinName: coin.name, chart: chartMap });
		newHistorical.splice(index, 0, coinWithHistorical);
		setHistorical(newHistorical);
	}

	const removeHistorical = (index: number) => {
		const newHistorical = historical.filter((_, i) => i !== index);
		setHistorical(newHistorical);
	}

	const reorderHistorical = (dragIndex: number, hoverIndex: number) => {
		const newHistorical = [...historical];
		const dragCoin = newHistorical[dragIndex];
		newHistorical.splice(dragIndex, 1);
		newHistorical.splice(hoverIndex, 0, dragCoin);
		setHistorical(newHistorical);
	}
	const chartMapped = (chart: [[number, number]]) => {
		const retChart = chart.map(([time, price]) => {
			const date = new Date(time * 1000);
			return {
				date: date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
				price: parseFloat(price.toFixed(2))
			}
		});
		return retChart;
	}

	return [historical, addHistorical, removeHistorical, reorderHistorical];
}

export default useHistoricalCoinHook