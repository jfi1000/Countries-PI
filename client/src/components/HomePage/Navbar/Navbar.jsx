import React from 'react';
import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


const Navbar = ({onSearch}) => {
    const { pathname } = useLocation();

    return(
        <>
        {pathname !== '/' ?
        <div className={styles.navbar}>
        <nav>            
            <NavLink to='/'>
                <button>Home</button>
            </NavLink>

            <Link to='/searchCountry'>
                <button>Search Countries  </button>
            </Link>

            <NavLink to='/form'>
                <button>Formulario</button>
            </NavLink>

        </nav></div>
        : "LOGO_ o borrarlo"}
        </>
    )
};
export default Navbar;