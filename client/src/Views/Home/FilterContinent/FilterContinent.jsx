import React from "react";
import styles from "./FilterContinent.module.css";


const FilterContinent = ({ continent , toggleOrder }) => {
    const continents = (event) => {
        continent(event.target.textContent);
    };
    return (
        <>
            <div className={styles.home}>

                <div className={styles.continentsBar}>
                    <button className={styles.botonContinent} onClick={continents}>
                        <div className={styles.continent}  >
                            <span>All</span>
                        </div>
                    </button>
                    <button className={styles.botonContinent} onClick={continents}>
                        <div className={styles.continent}  >
                            <span>América</span>
                        </div>
                    </button>
                    <button className={styles.botonContinent} onClick={continents}>
                        <div className={styles.continent}>
                            <span>Africa</span>
                        </div>
                    </button>
                    <button className={styles.botonContinent} onClick={continents}>
                        <div className={styles.continent}>
                            <span>Europe</span>
                        </div>
                    </button>
                    <button className={styles.botonContinent} onClick={continents}>
                        <div className={styles.continent}>
                            <span>Asia</span>
                        </div>
                    </button>
                    <button className={styles.botonContinent} onClick={continents}>
                        <div className={styles.continent}>
                            <span>Oceania</span>
                        </div>
                    </button>
                    <button className={styles.botonContinent} onClick={continents}>
                        <div className={styles.continent}>
                            <span>Antarctica</span>
                        </div>
                    </button>

                <div className={styles.orderButtons}>
                    <button onClick={()=>toggleOrder(1)}>
                        <span>
                            ASC⬆️
                        </span>
                    </button>
                    <button onClick={()=>toggleOrder(2)}>
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
