import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput/SearchInput';
import styles from './Home.module.css';
import Cards from '../../components/Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, countryNotFound } from '../../Redux/actions';
import NotFound from './NotFound/NotFound';
import FilterContinent from './FilterContinent/FilterContinent';

const Home = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [ascendingOrder, setAscendingOrder] = useState(false);
    const countries = useSelector(state => state.countries);
    let ordercountries = (countries);
    const error = useSelector(state => state.error);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [continent, setContinent] = useState('');

    useEffect(() => {
        dispatch(getCountries(searchTerm));
        // filteredCountries();
        // continent ? console.log(continent) : console.log("oksi");
    }, [searchTerm ]);



    const toggleOrder = (op) => {
        setAscendingOrder(!ascendingOrder);
        op==1 ?
            ordercountries = countries.sort((a, b) => a.name.localeCompare(b.name))
            :
            ordercountries = countries.sort((a, b) => b.name.localeCompare(a.name))

    };

    // const toggleOrder = () => {
    //     setAscendingOrder(!ascendingOrder);
    //     ascendingOrder ?
    //         ordercountries = countries.sort((a, b) => a.name.localeCompare(b.name))
    //         :
    //         ordercountries = countries.sort((a, b) => b.name.localeCompare(a.name))
    // };


    const handlePageChange = newPage => {
        setCurrentPage(newPage);
    };

    if (continent!=='' ){ 
        console.log(continent);
        ordercountries = ordercountries.filter(country => {
            return country.continent === continent})
    };


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const countriesToShow = ordercountries.slice(startIndex, endIndex);

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
                    <button
                        className="pagination-button"
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        &#129152;
                    </button>
                ) : null}
                <span>Página {currentPage}</span>
                <button
                    className="pagination-button"
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    &#129146;

                </button>
                <span> Total de {Math.ceil(ordercountries.length / itemsPerPage)}</span>
            </div>
            {/* <button onClick={toggleOrder}>
                {ascendingOrder ? "ASC ⬆️" : "DESC ⬇️ "}
            </button> */}
            <FilterContinent continent={setContinent} toggleOrder={toggleOrder}/>
        </div>
    );
};

export default Home;
