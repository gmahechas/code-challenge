import { FC } from 'react'
import { ICoinWIthHistorical } from 'coins/interfaces/historical-coin.interface';
import CoinChart from './CoinChart';

interface IProps {
    coins: ICoinWIthHistorical[];
}
const CoinsChars: FC<IProps> = ({ coins }) => {
    return (
        <div className='main_padding coins_charts' style={{ width: '100%' }}>
            <p className='coin_column_header'>Charts</p>
            {coins.map((item) => {
                return <CoinChart chart={item} key={item.coinId} />;
            })}
        </div>
    );
};

export default CoinsChars