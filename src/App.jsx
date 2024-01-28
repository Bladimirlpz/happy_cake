import { Route, Routes } from 'react-router-dom';
import './App.css'
import Contacto from './components/Contacto'
import Home from './components/Home'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={"NotFound"} />
      </Routes>
    </>
  )
}

export default App
