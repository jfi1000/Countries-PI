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
                        <h2>Population: {country?.population}</h2>
                        <h2>Subregion: </h2>

                    </div>

                    <div className={styles.columnRight}>
                        <table>
                        <thead>
                            <tr>
                                <th>Season</th>
                                <th>Activity</th>
                                <th>Duration</th>
                                <th>Difficulty</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {country.Activities && country.Activities[0] ? (
                                        country.Activities[0].temporada || 'Valor predeterminado'
                                    ) : (
                                        'No disponible'
                                    )}
                                </td>
                                <td>
                                    {country.Activities && country.Activities[0] ? (
                                        country.Activities[0].nombre || 'Valor predeterminado'
                                    ) : (
                                        'No disponible'
                                    )}
                                </td>
                                    <td>{durationIcons}</td>

                                    <td>{difficultyIcons}</td>
                                {/* <td>{country.Activities[0]?.nombre}</td>  */}
                                {/* <td>{country.Activities[0]?.dificultad}💥💥💥</td>  */}
                            </tr>
                            </tbody>
                        </table>
                        {/* Contenido de la columna derecha */}
                        {/* <img src={image} width="100%" alt="" /> */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Detail;