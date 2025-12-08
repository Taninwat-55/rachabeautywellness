import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChristmasBanner from './components/ChristmasBanner'; 

function App() {
  return (
    <>
      <ScrollToTop />
      <ChristmasBanner /> 
      <Navbar />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;