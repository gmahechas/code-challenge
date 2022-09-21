import { FC } from 'react';
import { ICoin } from 'coins/interfaces/coin.interface';

interface IProps {
    item: ICoin;
}
const CoinCardHeader: FC<IProps> = ({ item }) => {
    return (
        <div
            style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
        >
            <img src={item.icon} style={{ height: 24, width: 24 }} alt='coin' />
            <p style={{ paddingLeft: 16 }}>{item.name}</p>
        </div>
    );
};

export default CoinCardHeader;
