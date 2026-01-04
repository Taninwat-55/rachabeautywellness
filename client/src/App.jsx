import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChristmasBanner from './components/ChristmasBanner';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <>
      <ScrollToTop />
      <ChristmasBanner />
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