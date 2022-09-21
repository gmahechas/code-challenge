import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from './index';

interface IProps {
    children?: ReactNode;
}

const WithStore: FC<IProps> = ({children}) => {
    return <Provider store={store}>{children}</Provider>;
};

export default WithStore;
