import { FC } from 'react';

import DroppableShared from 'shared/libraries/DroppableShared';
import CoinCard from 'coins/components/CoinCard';
import { ICoin } from 'coins/interfaces/coin.interface';

interface IProps {
    droppableId: string;
    coins: ICoin[];
    columnStartDrag: boolean;
    columnStartDrop: boolean;
}
const CoinColumn: FC<IProps> = ({
    droppableId,
    coins,
    columnStartDrag,
    columnStartDrop,
    children,
}) => {
    return (
        <DroppableShared droppableId={droppableId}>
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className='coin_column_wrapper'
                >
                    <p className='coin_column_header'>{children}</p>
                    <div
                        className={
                            columnStartDrag
                                ? 'coin_column_start_drag'
                                : columnStartDrop
                                ? 'coin_column_start_drop'
                                : ''
                        }
                    >
                        {coins.map((item, index) => {
                            return (
                                <CoinCard
                                    item={item}
                                    index={index}
                                    key={item.id}
                                />
                            );
                        })}
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </DroppableShared>
    );
};

export default CoinColumn;
