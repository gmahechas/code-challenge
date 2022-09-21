import { FC } from 'react';
import { CardProps } from '@mui/material/Card';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
interface IProps extends CardProps {}

const CardShared: FC<IProps> = ({ children }) => {
    return (
        <Card variant='outlined'>
            <CardContent>{children}</CardContent>
        </Card>
    );
};

export default CardShared;
