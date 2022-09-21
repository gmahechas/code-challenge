import { FC } from 'react';
import { ICoin } from 'coins/interfaces/coin.interface';

interface IProps {
    item: ICoin;
}
const CoinCardPrice: FC<IProps> = ({ item }) => {
    return (
        <div>
            {item.symbol}:{' '}
            {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(item.price)}{' '}
            USD
        </div>
    );
};

export default CoinCardPrice;
