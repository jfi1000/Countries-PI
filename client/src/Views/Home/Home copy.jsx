import SearchInput from './SearchInput/SearchInput'
import styles from './Home.module.css';
import Cards from '../../components/Cards/Cards';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../Redux/actions';
import NotFound from './NotFound/NotFound';
import FilterContinent from './FilterContinent/FilterContinent';
const Home = ()=>{
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchContinent, setSearchContinent] = useState('');
    const [orderTool, setOrderTool] = useState(true);
    const [ascendingOrder, setAscendingOrder] = useState(true);

    const countries = useSelector(state => state.countries)
    const error = useSelector((state) => state.error); 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; 

    useEffect(()=>{ 
        dispatch(getCountries(searchTerm));
    },[ searchTerm, orderTool]);


    const handleSearch = (searchTerm) => {
        // Actualizar el estado global con el nuevo término de búsqueda
        setSearchTerm(searchTerm); // Actualiza el estado local del término de búsqueda
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleOrder = () => {
        setAscendingOrder(!ascendingOrder);
    };

    // Calcula los países a mostrar en la página actual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const orderedCountries = [...countries].sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        return ascendingOrder ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    
    const countriesTo = orderedCountries.slice(startIndex, endIndex);
    
    return(
        <div className={styles.home}>
            <SearchInput onSearch={handleSearch} />        
        {error ? (
            <NotFound />
        ) : (
            <Cards countries={countriesTo}/>
        )}

                        {/* Agrega controles de paginación aquí */}
            <div className="pagination">
            {currentPage > 1 ? 
                <button
                    className="pagination-button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    // disabled={currentPage === 1}
                >
                    Anterior
                </button>
                : null}
                {/* <span>Página {currentPage}</span> */}
                <button
                    className="pagination-button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    // disabled={currentPage >= Math.ceil(countries.length / itemsPerPage)}
                >
                    Siguiente
                </button>
            </div>
                                    {/* Agrega controles de paginación aquí */}
                <FilterContinent />
                <button
                    onClick={() => handleOrder()}
                >
                    Ordenar
                </button>
        </div>
    )
};

export default Home;