import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from './App';
import PageLoader from './components/PageLoader';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const NotFound = lazy(() => import('./pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Suspense fallback={<PageLoader />}><Home /></Suspense> },
      { path: 'om', element: <Suspense fallback={<PageLoader />}><About /></Suspense> },
      { path: 'behandlinger', element: <Suspense fallback={<PageLoader />}><Services /></Suspense> },
      { path: 'kontakt', element: <Suspense fallback={<PageLoader />}><Contact /></Suspense> },
      { path: 'galleri', element: <Suspense fallback={<PageLoader />}><Gallery /></Suspense> },
      { path: '*', element: <Suspense fallback={<PageLoader />}><NotFound /></Suspense> },
    ],
  },
]);

export default router;