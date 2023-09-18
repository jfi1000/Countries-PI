import './App.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Landing, Form, Home, Detail, Navbar } from './Views';
import NotFound from './Views/Home/NotFound/NotFound';



// import styles from './App.module.css';
import Cards from './components/Cards/Cards';

function App() {
  const { pathname } = useLocation();
  
  return (
    <div>
        {pathname !== '/' ? <Navbar /> : null}

        <Routes>
            {/* <Route path='/' element={<Form login={login} />} /> */}
            <Route path='/' element={<Landing />} />
            <Route path='/form' element={<Form />} />
            <Route path='/home' element={<Home />} />
            <Route path='/Cards' element={<Cards />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

    </div>
  )
}

export default App
