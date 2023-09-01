import SearchInput from './SearchInput/SearchInput'
import styles from './Home.module.css';
import Cards from '../../components/Cards/Cards';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../Redux/actions';

const Home = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{ 
        dispatch(getUsers());
    },[]);
    return(
        <div className={styles.home}>
            <SearchInput />
            <h1>Componente SearchCountry!!!</h1>
            <Cards />
        </div>
    )
};

export default Home;