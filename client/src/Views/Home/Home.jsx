import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput/SearchInput';
import styles from './Home.module.css';
import Cards from '../../components/Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities } from '../../Redux/actions';
import NotFound from './NotFound/NotFound';
import FilterContinent from './FilterContinent/FilterContinent';

const Home = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [ascendingOrder, setAscendingOrder] = useState(false);
    const countries = useSelector(state => state.countries);
    const activities = useSelector(state => state.activities);
    let ordercountries = (countries);
    let actividadesfilter = (activities);
    const [selectedOption, setSelectedOption] = useState("name");
    const error = useSelector(state => state.error);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [continent, setContinent] = useState('');
    const [activityselect, setActivityselect] = useState('');
    const [reset, setReset] = useState('');

    useEffect(() => {
        dispatch(getCountries(searchTerm));
        dispatch(getActivities());
    }, [searchTerm]);


    const toggleOrder = (op) => {
        setAscendingOrder(!ascendingOrder);

        if (selectedOption === "name") {
            if (op === 1) {
                ordercountries = countries.sort((a, b) => a.name.localeCompare(b.name));
            } else {
                ordercountries = countries.sort((a, b) => b.name.localeCompare(a.name));
            }
        } else if (selectedOption === "population") {
            if (op === 1) {
                ordercountries = countries.sort((a, b) => a.population - b.population);
            } else {
                ordercountries = countries.sort((a, b) => b.population - a.population);
            }
        }
    };


    const handlePageChange = newPage => {
        setCurrentPage(newPage);
    };


    const filteredCountries = () => {
        let filtered = ordercountries;

        if (activityselect) {
            if (activityselect !== 'Todas las actividades') {
                filtered = filtered.filter(country =>
                    activities.some(activity =>
                        activity.Countries.some(activityCountry =>
                            activityCountry.name === country.name &&
                            activity.nombre === activityselect
                        )
                    )
                );
            }
        }else {
            filtered = filtered.filter(country => country);
            console.log(filtered,'w');
        }
        

        if (continent) {
            if (continent === 'All') {
                setSearchTerm('');
                setAscendingOrder(false);
                setSelectedOption('name');
                setCurrentPage(1);
                setContinent('');
                setActivityselect('');
                ordercountries = (countries);
                return [...filtered];
            }

            filtered = filtered.filter((country) =>
                country.continent === continent ||
                (continent === 'America' &&
                    (country.continent === 'North America' || country.continent === 'South America'))
            );
                console.log("entro-_");
            actividadesfilter = activities.filter(activity =>
                activity.Countries.some(activityCountry => {
                    if (continent === 'America') {
                        return (
                            activityCountry.continent === 'North America' ||
                            activityCountry.continent === 'South America'
                        );
                    } else {
                        return activityCountry.continent === continent;
                    }
                })
            );


        }

        return filtered;
    };


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const countriesToShow = filteredCountries().slice(startIndex, endIndex);

    // const totalPages = Math.ceil(countriesToShow.length / itemsPerPage);
    const totalPages = Math.ceil(filteredCountries().length / itemsPerPage);

    return (
        <div className={styles.home}>
            <SearchInput onSearch={setSearchTerm} />
            {error ? (
                <NotFound />
            ) : (
                <Cards countries={countriesToShow} />
            )}
            <h2>{continent}</h2>
            <div className="pagination">
                {currentPage > 1 ? (
                    <button className={styles.buttonArrow}
                        onClick={() => handlePageChange(currentPage - 1)}>
                        <svg width="30px" height="40px" viewBox="0 0 50 80" xml: space="preserve">
                            <polyline fill="none" stroke="#FFFFFF" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" points="
            45.63,75.8 0.375,38.087 45.63,0.375 "/>
                        </svg>
                    </button>

                ) : null}
                <span className={styles.spanPaginador} >Página {currentPage} de  {totalPages} </span>

                <button className={styles.buttonArrow}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="30px" height="40px" viewBox="0 0 50 80"
                        xmlSpace="preserve">
                        <polyline fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points="0.375,0.375 45.63,38.087 0.375,75.8 " />
                    </svg>
                </button>
            </div>
            <FilterContinent
                continent={setContinent}
                toggleOrder={toggleOrder}
                selectOrder={setSelectedOption}
                activities={actividadesfilter}
                activityselect={activityselect}
                handleActivities={setActivityselect}
                handleResetActivity={() => setActivityselect('')}
            />
        </div>
    );
};

export default Home;
