import React, {useEffect} from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function AddMovies() {

const history = useHistory();
const dispatch = useDispatch();
const genres = useSelector(store => store.genres);

const [movieInput, setMovieInput] = useState({title:'', description:'', poster:'', genreId: 0});

useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });
}, []);

// console.log('yay genres!', genres)

const handleTitleInput = (event) => {
    setMovieInput({
        ...movieInput,
        title: event.target.value
    });
}

const handleDescriptionInput = (event) => {
    setMovieInput({
        ...movieInput,
        description: event.target.value
    });
}

const handlePosterInput = (event) => {
    setMovieInput({
        ...movieInput,
        poster: event.target.value
    });
}

const handleGenreInput = (event) => {
    setMovieInput({
        ...movieInput,
        genreId: event.target.value
    });
}

const handleAddMovieClick = () => {
    console.log('new movie input:', movieInput);
    dispatch({ 
        type: 'ADD_MOVIE', 
        payload: { movieInput }
    });
}

const handleCancelClick = () => {
    history.push('/');
}

return(
    <div>
        <form>
            <input 
                type="text"
                placeholder="Title"
                onChange={handleTitleInput}
                required
            />
            <input 
                type="text"
                placeholder="Description"
                onChange={handleDescriptionInput}
                required
            />
            <input 
                type="text"
                placeholder="Poster"
                onChange={handlePosterInput}
                required
            />
            <select value={movieInput.genreId} 
                onChange={handleGenreInput}>
                        <option disabled value='0'>
                            Genres
                        </option>
                    {genres.map((genre) =>  {
                        return  (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                        )
                    })}
            </select>
            <button onClick={handleAddMovieClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
        </form>
    </div>
    )
}

export default AddMovies;