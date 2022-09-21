import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';

const Home = lazy(() => import('../../pages/Home/containers/Home'));
const About = lazy(() => import('../../pages/About'));
const Contact = lazy(() => import('../../pages/Contact'));

const WithRoutes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Suspense fallback={<>...</>}>
                                <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path='about'
                        element={
                            <Suspense fallback={<>...</>}>
                                <About />
                            </Suspense>
                        }
                    />
                    <Route
                        path='contact'
                        element={
                            <Suspense fallback={<>...</>}>
                                <Contact />
                            </Suspense>
                        }
                    />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default WithRoutes;
