import React from 'react';
import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({onSearch}) => {
    return(
        <>
        <div className={styles.navbar}>
        <nav>            
            <NavLink to='/'>
                <button className={styles.buttonNav}>Landing</button>
            </NavLink>

            <Link to='/home'>
                <button className={styles.buttonNav} >Search Countries  </button>
            </Link>

            <NavLink to='/form'>
                <button className={styles.buttonNav}>Formulario</button>
            </NavLink>
            
        </nav></div>
        </>
    )
};
export default Navbar;