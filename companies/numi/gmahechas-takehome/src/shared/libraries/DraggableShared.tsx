import { FC } from 'react';
import { Draggable, DraggableProps } from 'react-beautiful-dnd';

interface IProps extends DraggableProps {}
const DraggableShared: FC<IProps> = ({ children, ...props }) => {
    return <Draggable {...props}>{children}</Draggable>;
};

export default DraggableShared;
