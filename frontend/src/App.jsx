import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import '@styles/App.css'
import Home from './pages/Home';

const App = () => {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
