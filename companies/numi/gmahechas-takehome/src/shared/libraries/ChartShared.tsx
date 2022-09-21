import { FC } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

interface IProps {
    data: { date: string; price: number }[];
}
const ChartShared: FC<IProps> = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height={400}>
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 5,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='date' />
                <YAxis />
                <Tooltip
                    formatter={(price: number) =>
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        }).format(price)
                    }
                />
                <Area
                    type='monotone'
                    dataKey='price'
                    stroke='#8884d8'
                    fill='#8884d8'
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default ChartShared;
