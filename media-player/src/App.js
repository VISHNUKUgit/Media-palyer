import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import WatchHistory from './Pages/WatchHistory';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Watch-History' element={<WatchHistory />} />
      </Routes>
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
