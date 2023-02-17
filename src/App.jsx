import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Converter from './pages/Converter'

const App = () => {
  return (
    <div className='main flex flex-col min-h-[100vh] justify-between'>
      <div className='navbar max-w-[1170px] mx-auto w-full'>
        <Navbar />
      </div>
      <div className='pages max-w-[1170px] mx-auto w-full'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/converter' element={<Converter />} />
          </Routes>
        </Router>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App