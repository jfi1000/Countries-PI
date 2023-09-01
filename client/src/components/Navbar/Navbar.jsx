import React from 'react';
import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({onSearch}) => {
    return(
        <>
        <div className={styles.navbar}>
        <nav>            
            <NavLink to='/'>
                <button>Landing</button>
            </NavLink>

            <Link to='/home'>
                <button>Search Countries  </button>
            </Link>

            <NavLink to='/form'>
                <button>Formulario</button>
            </NavLink>

        </nav></div>
        </>
    )
};
export default Navbar;