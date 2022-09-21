import { FC } from 'react';
import { DragDropContext, DragDropContextProps } from 'react-beautiful-dnd';

interface IProps extends DragDropContextProps {}
const DragDropContextShared: FC<IProps> = ({
    children,
    onDragStart,
    onDragEnd,
    onDragUpdate,
}) => {
    return (
        <DragDropContext
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragUpdate={onDragUpdate}
        >
            {children}
        </DragDropContext>
    );
};

export default DragDropContextShared;
