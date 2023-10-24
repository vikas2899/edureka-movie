import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Latest from './pages/Latest/Latest';
import MovieDetail from './pages/MovieDetail/MovieDetail';

import './App.css';
import Ticket from './pages/Ticket/Ticket';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/latest' element={<Latest />} />
          <Route path='/movie/:movieID' element={<MovieDetail />} />
          <Route path='/book/movie/:movieId' element={<Ticket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
