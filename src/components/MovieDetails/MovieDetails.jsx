import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function MovieDetails() {

    const history = useHistory();
    
    // access details reducer
    const details = useSelector((store) => store.details);


    useEffect(() => {

    });

    // takes user to home page 
    const handleHomeClick = () => {
        history.push('/');
    }

    return (
        <div>
            <h2>{details.title}</h2>
            <img src={details.poster}/>
            <h4>{details.description}</h4>
            <button onClick={handleHomeClick}>Home</button>
        </div>
    )
}

export default MovieDetails; 