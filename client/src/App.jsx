import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import SearchCountry from './components/SearchCountry/SearchCountry';
import FormPage from './components/FormPage/FormPage';
import HomePage from './components/HomePage/HomePage/HomePage';
import Navbar from './components/HomePage/Navbar/Navbar';
import styles from './App.module.css'; // Importa el archivo de estilos de módulo
import Cards from './components/Cards/Cards';


function App() {
  const { pathname } = useLocation();
  const [count, setCount] = useState(0)
  
  return (
    <div className={styles.container}>
        <Navbar />
        {/* {pathname === '/' ? "LOGO_ o borrarlo" : <Navbar />} */}

        <Routes>
            {/* <Route path='/' element={<Form login={login} />} /> */}
            <Route path='/' element={<HomePage />} />
            <Route path='/searchCountry' element={<SearchCountry />} />
            {/* <Route path='/detail/:id' element={<Detail />} /> */}
            <Route path='/Cards' element={<Cards />} />
            <Route path='/form' element={<FormPage />} />
        </Routes>

    </div>
  )
}

export default App
