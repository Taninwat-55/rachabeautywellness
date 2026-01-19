import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <ErrorBoundary>
        <main className='min-h-screen'>
          <Outlet />
        </main>
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;