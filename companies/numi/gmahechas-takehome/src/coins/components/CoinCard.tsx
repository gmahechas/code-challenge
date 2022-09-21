import { FC } from 'react';

import DraggableShared from 'shared/libraries/DraggableShared';
import CardShared from 'shared/components/CardShared';
import CoinCardPercent from './CoinCardPercent';
import CoinCardHeader from './CoinCardHeader';
import CoinCardPrice from './CoinCardPrice';

import { ICoin } from 'coins/interfaces/coin.interface';

interface IProps {
    item: ICoin;
    index: number;
}

const CoinCard: FC<IProps> = ({ item, index }) => {
    return (
        <DraggableShared key={item.id} draggableId={item.id} index={index}>
            {(provided) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            ...provided.draggableProps.style,
                        }}
                        className='coin_card_wrapper'
                    >
                        <CardShared>
                            <CoinCardHeader item={item} />
                            <CoinCardPrice item={item} />
                            <CoinCardPercent item={item} />
                        </CardShared>
                    </div>
                );
            }}
        </DraggableShared>
    );
};

export default CoinCard;
