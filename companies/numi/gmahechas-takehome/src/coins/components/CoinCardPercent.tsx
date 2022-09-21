import { FC } from 'react';
import { ICoin } from 'coins/interfaces/coin.interface';

interface IProps {
    item: ICoin;
}
const CoinCardPercent: FC<IProps> = ({ item }) => {
    const priceChange1hClass =
        Math.sign(item.priceChange1h) === 1
            ? 'green_coin_percent'
            : 'red_coin_percent';

    const priceChange1dClass =
        Math.sign(item.priceChange1d) === 1
            ? 'green_coin_percent'
            : 'red_coin_percent';

    const priceChange1wClass =
        Math.sign(item.priceChange1w) === 1
            ? 'green_coin_percent'
            : 'red_coin_percent';
    return (
        <table style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th>1h</th>
                    <th>1d</th>
                    <th>1w</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <span className={priceChange1hClass}>
                            {item.priceChange1h}%
                        </span>
                    </td>
                    <td>
                        <span className={priceChange1dClass}>
                            {item.priceChange1d}%
                        </span>
                    </td>
                    <td>
                        <span className={priceChange1wClass}>
                            {item.priceChange1w}%
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default CoinCardPercent;
