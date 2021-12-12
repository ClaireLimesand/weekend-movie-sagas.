import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function MovieDetails() {

    // const history = useHistory();
    const details = useSelector((store) => store.details);

    useEffect(() => {
        // we could get more info about this pet from the server here
    });

    return (
        <div>
            <h2>{details.title}</h2>
            <img src ={details.poster}/>
            <h4>Description: {details.description}</h4>
        </div>
    )
}

export default MovieDetails; 