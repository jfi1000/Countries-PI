import React, { useState, useEffect } from 'react';
import styles from "./FilterContinent.module.css";


const FilterContinent = ({ continent, toggleOrder, selectOrder, activities, handleActivities,activityselect }) => {
    const [selectedContinent, setSelectedContinent] = useState('All');
    const [selectedActivity, setSelectedActivity] = useState('');


    const continents = (event) => {
        continent(event.target.textContent);
        setSelectedContinent(event.target.textContent);  
                
    };

    const handleChangeSelect = (event) => {
        setSelectedActivity(event.target.value);
        handleActivities(event.target.value);
        // toggleOrder(event.target.value === "population" ? 2 : 1);
    };

    const handleChange = (event) => {
        selectOrder(event.target.value);
        // toggleOrder(event.target.value === "population" ? 2 : 1);
    };

    return (
        <>
            <div className={styles.home}>

                <div className={styles.continentsBar}>
                    <button 
                    className={`${styles['continent-button']} ${
                        selectedContinent === 'All' ? styles.resaltado : ''
                    }`}
                    onClick={continents}>
                        <div >
                            <span>All</span>
                        </div>
                    </button>
                    <button 
                    className={`${styles['continent-button']} ${
                        selectedContinent === 'America' ? styles.resaltado : ''
                    }`}
                    onClick={continents}>
                        <div>
                            <span>America</span>
                        </div>
                    </button>
                    <button 
                    className={`${styles['continent-button']} ${
                        selectedContinent === 'Africa' ? styles.resaltado : ''
                    }`}
                    onClick={continents}>
                        <div >
                            <span>Africa</span>
                        </div>
                    </button>
                    <button 
                    className={`${styles['continent-button']} ${
                        selectedContinent === 'Europe' ? styles.resaltado : ''
                    }`}
                    onClick={continents}>
                        <div>
                            <span>Europe</span>
                        </div>
                    </button>
                    <button 
                    className={`${styles['continent-button']} ${
                        selectedContinent === 'Asia' ? styles.resaltado : ''
                    }`}
                    onClick={continents}>
                        <div>
                            <span>Asia</span>
                        </div>
                    </button>
                    <button 
                    className={`${styles['continent-button']} ${
                        selectedContinent === 'Oceania' ? styles.resaltado : ''
                    }`}
                    onClick={continents}>
                        <div>
                            <span>Oceania</span>
                        </div>
                    </button>
                    <button 
                    className={`${styles['continent-button']} ${
                        selectedContinent === 'Antarctica' ? styles.resaltado : ''
                    }`}
                    onClick={continents}>
                        <div>
                            <span>Antarctica</span>
                        </div>
                    </button>
                    
                    <div>
                    <select id="activity" onChange={handleChangeSelect} value={selectedActivity}>
                    <option>
                        Todas las actividades
                    </option>

                        {activities.map((activity, index) => (
                            <option key={index} value={activity.nombre}>
                                {activity.nombre}
                            </option>
                        ))}
                    </select>
                    </div>


                    <div className={styles.orderButtons}>
                        <select onChange={handleChange} >
                            <option value="name">Nombre</option>
                            <option value="population">Población</option>
                        </select>

                        <button onClick={() => toggleOrder(1)}>
                            <span>
                                ASC ⬆️
                            </span>
                        </button>
                        <button onClick={() => toggleOrder(2)}>
                            <span>
                                DESC ⬇️
                            </span>
                        </button>
                    </div>


                </div>
            </div>
        </>
    );
};

export default FilterContinent;
