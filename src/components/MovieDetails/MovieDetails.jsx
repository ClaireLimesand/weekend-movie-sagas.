import React from 'react';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function MovieDetails() {

    const history = useHistory();
    
    // access details reducer
    const details = useSelector((store) => store.details);
    console.log('details', details)

    // takes user to home page 
    const handleHomeClick = () => {
        history.push('/');
    }

    return (
        <div>
            {details.length !=0 ?
            <>
            <h2>{details[0].title}</h2>
            <img src={details[0].poster}/>
            <p>{details[0].description}</p>
                {details.map(genre => (
                    <p>
                        {genre.name}
                    </p>
                ))}
            <button onClick={handleHomeClick}>Home</button>
            </>
            :
            <></>
            }
        </div>
    )
}

export default MovieDetails; 