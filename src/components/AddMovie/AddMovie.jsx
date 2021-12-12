import React, {useEffect} from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function AddMovies() {

const dispatch = useDispatch();
const genres = useSelector(store => store.genres);
console.log('yay genres!', genres)
    
const [movieInput, setMovieInput] = useState({title:'', description:'', poster:'', genre: ''});

useEffect(() => {
    getGenres();
}, []);

const getGenres = () => {
    dispatch ({
    type: 'FETCH_GENRES'
    })
};

const handeTitleInput = (event) => {
    setMovieInput({
        ...movieInput,
        title: event.target.value
    });
}

const handeDescriptionInput = (event) => {
    setMovieInput({
        ...movieInput,
        description: event.target.value
    });
}

const handePosterInput = (event) => {
    setMovieInput({
        ...movieInput,
        poster: event.target.value
    });
}

const handeGenreInput = (event) => {
    setMovieInput({
        ...movieInput,
        genre: event.target.value
    });
}

return(
    <div>
        <form>
            <input 
                type="text"
                placeholder="Title"
                // value={title}
                onChange={handeTitleInput}
                required
            />
            <input 
                type="text"
                placeholder="Description"
                // value={description}
                onChange={handeDescriptionInput}
                required
            />
            <input 
                type="text"
                placeholder="Poster"
                // value={poster}
                onChange={handePosterInput}
                required
            />
            <select>
                <option>    </option>
                <option>    </option>
            </select>
        </form>
    </div>
    )
}

export default AddMovies;