import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Converter from './pages/Converter';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const App = () => (
  <div className='mx-auto max-w-[1170px]'>
    <Navbar/>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/converter' element={<Converter />} />
      </Routes>
    </Router>
    <Footer/>
  </div>
)

export default App
