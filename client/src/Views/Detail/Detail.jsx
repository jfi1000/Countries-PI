import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = ()=>{
    const { id } = useParams();

    return(
        <div>
            <h1>Componente Detail!!!</h1>
            <h2>Detalles del elemento con ID: {id}</h2>
        </div>
    )
};

export default Detail;