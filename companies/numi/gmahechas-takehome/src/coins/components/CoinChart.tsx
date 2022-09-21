import { FC } from 'react';
import { ICoinWIthHistorical } from 'coins/interfaces/historical-coin.interface';
import ChartShared from 'shared/libraries/ChartShared';

interface IPros {
    chart: ICoinWIthHistorical;
}

const CoinChart: FC<IPros> = ({ chart }) => {
    return (
        <div>
            <p>{chart.coinName}</p>
            <ChartShared data={chart.chart} />
        </div>
    );
};

export default CoinChart;
