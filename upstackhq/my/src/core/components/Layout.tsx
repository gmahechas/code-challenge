import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    children?: ReactNode;
}
export const Layout: FC<IProps> = ({ children }) => {
    return (
        <div>
            <nav>
                <ol>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ol>
            </nav>
            {children}
        </div>
    );
};
