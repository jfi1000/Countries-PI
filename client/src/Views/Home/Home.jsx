import SearchInput from './SearchInput/SearchInput'
import styles from './Home.module.css';
import Cards from '../../components/Cards/Cards';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../Redux/actions';

const Home = ()=>{
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{ 
        dispatch(getCountries(searchTerm));
    },[dispatch, searchTerm]);

    const handleSearch = (searchTerm) => {
        // Actualizar el estado global con el nuevo término de búsqueda
        setSearchTerm(searchTerm); // Actualiza el estado local del término de búsqueda
    };


    return(
        <div className={styles.home}>
            <SearchInput onSearch={handleSearch} />
            <h1>Componente SearchCountry!!!{searchTerm}</h1>
            <Cards />
        </div>
    )
};

export default Home;