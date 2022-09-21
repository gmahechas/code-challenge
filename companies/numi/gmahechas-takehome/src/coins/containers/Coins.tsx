import { useEffect, useState } from 'react';
import { DragStart, DragUpdate, DropResult } from 'react-beautiful-dnd';

import useCoinsHook from 'coins/hooks/useCoinsHook';
import useUnwatchedCoinsHook from 'coins/hooks/useUnwatchedCoinsHook';
import useWatchedCoinsHook from 'coins/hooks/useWatchedCoinsHook';
import useHistoricalCoinHook from 'coins/hooks/useHistoricalCoinHook';

import DragDropContextShared from 'shared/libraries/DragDropContextShared';
import CoinColumn from 'coins/components/CoinColumn';
import CoinsChars from 'coins/components/CoinsChars';

const Coins = () => {
    const [coins] = useCoinsHook([]);
    const [
        unwatchedCoins,
        setUnwatchedCoins,
        addCoinToUnwatched,
        removeCoinFromUnwatched,
        reorderUnwatchedCoins,
    ] = useUnwatchedCoinsHook([]);
    const [
        watchedCoins,
        ,
        addCoinToWatched,
        removeCoinFromWatched,
        reorderWatchedCoins,
    ] = useWatchedCoinsHook([]);
    const [historicalCoin, addHistorical, removeHistorical, reorderHistorical] =
        useHistoricalCoinHook([]);
    const [columnClassOnDragDrop, setColumnClassOnDragDrop] = useState({
        possibleCoins: {
            startDrag: false,
            startDrop: false,
        },
        watchList: {
            startDrag: false,
            startDrop: false,
        },
    });
    useEffect(() => {
        setUnwatchedCoins(coins);
    }, [setUnwatchedCoins, coins]);

    const onDragStart = (initial: DragStart) => {
        const { source } = initial;
        if (source.droppableId === 'possibleCoins') {
            setColumnClassOnDragDrop({
                ...columnClassOnDragDrop,
                possibleCoins: { startDrag: true, startDrop: false },
            });
        } else if (source.droppableId === 'watchList') {
            setColumnClassOnDragDrop({
                ...columnClassOnDragDrop,
                watchList: { startDrag: true, startDrop: false },
            });
        }
    };

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;
        if (destination?.droppableId !== source?.droppableId) {
            if (destination?.droppableId === 'watchList') {
                // move to watch list
                addCoinToWatched(
                    unwatchedCoins[source.index],
                    destination.index
                );
                removeCoinFromUnwatched(source.index);
                addHistorical(unwatchedCoins[source.index], destination.index);
            } else if (destination?.droppableId === 'possibleCoins') {
                // move to unwatch list
                addCoinToUnwatched(
                    watchedCoins[source.index],
                    destination.index
                );
                removeCoinFromWatched(source.index);
                removeHistorical(source.index);
            }
        } else {
            // Reorder
            if (destination?.droppableId === 'possibleCoins') {
                reorderUnwatchedCoins(source.index, destination.index);
            } else if (destination?.droppableId === 'watchList') {
                reorderWatchedCoins(source.index, destination.index);
                reorderHistorical(source.index, destination.index);
            }
        }
        setColumnClassOnDragDrop({
            ...columnClassOnDragDrop,
            possibleCoins: { startDrag: false, startDrop: false },
            watchList: { startDrag: false, startDrop: false },
        });
    };

    const onDragUpdate = (initial: DragUpdate) => {
        const { destination, source } = initial;
        if (destination?.droppableId !== source?.droppableId) {
            if (destination?.droppableId === 'watchList') {
                setColumnClassOnDragDrop({
                    ...columnClassOnDragDrop,
                    possibleCoins: { startDrag: false, startDrop: true },
                    watchList: { startDrag: true, startDrop: false },
                });
            } else if (destination?.droppableId === 'possibleCoins') {
                setColumnClassOnDragDrop({
                    ...columnClassOnDragDrop,
                    possibleCoins: { startDrag: true, startDrop: false },
                    watchList: { startDrag: false, startDrop: true },
                });
            }
        } else {
            if (destination?.droppableId === 'possibleCoins') {
                setColumnClassOnDragDrop({
                    ...columnClassOnDragDrop,
                    possibleCoins: { startDrag: true, startDrop: true },
                    watchList: { startDrag: false, startDrop: false },
                });
            } else if (destination?.droppableId === 'watchList') {
                setColumnClassOnDragDrop({
                    ...columnClassOnDragDrop,
                    possibleCoins: { startDrag: false, startDrop: false },
                    watchList: { startDrag: true, startDrop: true },
                });
            }
        }
    };

    return (
        <div className='coin_page'>
            <DragDropContextShared
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragUpdate={onDragUpdate}
            >
                <div className='coin_drag_drop_area'>
                    <CoinColumn
                        droppableId='possibleCoins'
                        coins={unwatchedCoins}
                        columnStartDrag={
                            columnClassOnDragDrop['possibleCoins'].startDrag
                        }
                        columnStartDrop={
                            columnClassOnDragDrop['possibleCoins'].startDrop
                        }
                    >
                        Possible Coins
                    </CoinColumn>
                    <CoinColumn
                        droppableId='watchList'
                        coins={watchedCoins}
                        columnStartDrag={
                            columnClassOnDragDrop['watchList'].startDrag
                        }
                        columnStartDrop={
                            columnClassOnDragDrop['watchList'].startDrop
                        }
                    >
                        Watchlist
                    </CoinColumn>
                </div>
            </DragDropContextShared>
            <CoinsChars coins={historicalCoin} />
        </div>
    );
};

export default Coins;
