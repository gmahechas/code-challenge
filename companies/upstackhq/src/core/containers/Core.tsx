import WithRoutes from '../router/WithRouter';
import WithStore from '../store/WithStore';

const Core = () => {
    return (
        <WithStore>
            <WithRoutes />
        </WithStore>
    );
};

export default Core;
