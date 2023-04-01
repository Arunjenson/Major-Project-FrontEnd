
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar';
import './App.scss'
import Signup from './components/Signup/Signup';

function App() {
  return (
    <section className='container'>
      <NavBar />

      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </section>
  );
}

export default App;
