import { useRoutes, Navigate } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import PageNotFoundView from './pages/PageNotFoundView';

const App: React.FC = (): JSX.Element => {
  const mainRoutes = [
    {
      path: '/',
      element: <LandingPage />,
    },
  ];
  const notFound = [
    { path: '*', element: <Navigate to="/404" /> },
    { path: '/404', element: <PageNotFoundView /> },
  ];
  const routing = useRoutes([...notFound, ...mainRoutes]);

  return <>{routing}</>;
};

export default App;
