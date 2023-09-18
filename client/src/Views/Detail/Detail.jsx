import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';
import { getCountry } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const country = useSelector(state => state.country);

    useEffect(() => {
        dispatch(getCountry(id));
    }, []);
    console.log(country);


    let durationIcons = [];
    if (country.Activities && country.Activities[0] && country.Activities[0].duracion) {
        for (let i = 0; i < country?.Activities[0].duracion; i++) {
            durationIcons.push(<span key={i}>⌛</span>);
        }
    }
    let difficultyIcons = [];
    if (country.Activities && country.Activities[0] && country.Activities[0].dificultad) {
        for (let i = 0; i < country?.Activities[0].dificultad; i++) {
            difficultyIcons.push(<span key={i}>💥</span>);
        }
    }
    console.log(difficultyIcons);

    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.rowAlignCenter}>

                    <div className={styles.columnLeft}>
                        <img src={country?.flagImage} />

                        <h1>{country?.name}</h1>
                        <h2>Capital: {country?.capital}</h2>
                        <h2>Continent: {country?.continent}</h2>
                        <h2>Population: {country?.population?.toLocaleString('es-MX')}</h2>
                        <h2>Subregion:{country?.subregion}  </h2>

                    </div>

                    <div className={styles.columnRight}>
                        <table className={styles.tabla}>
                            <thead>
                                <tr>
                                    <th>Season</th>
                                    <th>Activity</th>
                                    <th>Duration</th>
                                    <th>Difficulty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {country.Activities && country.Activities.length > 0 ? (
                                    country.Activities.map((activity, index) => (
                                        <tr key={index}>
                                            <td>{activity.temporada || 'Valor predeterminado'}</td>
                                            <td>{activity.nombre || 'Valor predeterminado'}</td>
                                            <td>
                                                {activity.duracion ? (() => {
                                                    const durationIcons = [];
                                                    for (let i = 0; i < activity.duracion; i++) {
                                                        durationIcons.push(<span key={`duration-${i}`}>⌛</span>);
                                                    }
                                                    return durationIcons;
                                                })() : 'No disponible'}
                                            </td>
                                            <td>
                                                {activity.dificultad ? (() => {
                                                    const difficultyIcons = [];
                                                    for (let i = 0; i < activity.dificultad; i++) {
                                                        difficultyIcons.push(<span key={`difficulty-${i}`}>💥</span>);
                                                    }
                                                    return difficultyIcons;
                                                })() : 'No disponible'}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4">No hay actividades disponibles.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {/* Contenido de la columna derecha */}
                        {/* <img src={image} width="100%" alt="" /> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Detail;