import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function MovieDetails() {

    const history = useHistory();
    
    // access details reducer
    const details = useSelector((store) => store.details);
    const id = useSelector((store) => store.id);
    console.log('id', id)
// reducer to hold id of poster clicked 
// dispatch to a saga with that id 
// instead of res.send.rows .then 
    useEffect(() => {
        // we could get more info about this pet from the server here
    // call sagas payload is id:id
    // id is useParams

    });

    // takes user to home page 
    const handleHomeClick = () => {
        history.push('/');
    }

    return (
        <div>
            <h2>{details.title}</h2>
            <img src ={details.poster}/>
            <h4>Description: {details.description}</h4>
            <button onClick={handleHomeClick}>Home</button>
        </div>
    )
}

export default MovieDetails; 