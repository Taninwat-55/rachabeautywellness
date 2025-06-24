import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'om', element: <About /> },
      { path: 'behandlinger', element: <Services /> },
      { path: 'kontakt', element: <Contact /> },
      { path: 'galleri', element: <Gallery /> },
    ],
  },
]);

export default router;
