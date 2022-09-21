import { FC } from 'react';
import { Droppable, DroppableProps } from 'react-beautiful-dnd';

interface IProps extends DroppableProps {}
const DroppableShared: FC<IProps> = ({ children, droppableId }) => {
    return <Droppable droppableId={droppableId}>{children}</Droppable>;
};

export default DroppableShared;
