import { useState } from 'react'
import reactLogo from '../../../assets/react.svg'
// import viteLogo from '../../../vite.svg'
// import '../../../App.css'
import styles from './HomePage.module.css'; // Importa el archivo de estilos de módulo
import { Link } from 'react-router-dom';

const HomePage = ()=>{
    return(
        <div className={styles.home}>
            <div>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>COUNTRIES</h1>
            <div className="card">
                <Link to="/searchCountry">
                    <button >Entrar</button>
                </Link>
                <h2>
                PI José Luis Farías Izaguirre
                </h2>
            </div>
        </div>
    )
};

export default HomePage;