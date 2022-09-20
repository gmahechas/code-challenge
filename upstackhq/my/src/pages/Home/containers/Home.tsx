import { FC, useEffect } from 'react';
import { connector, PropsFromRedux } from './../store/reducers';

interface IProps extends PropsFromRedux {}
const Home: FC<IProps> = ({ home }) => {
    useEffect(() => {
        console.log(home.resource);
    }, [home]);
    return <div>Home</div>;
};

export default connector(Home);
