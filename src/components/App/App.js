import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>  
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addmovie">Add A Movie</Link>
          </li>
        </ul>      
        {/* route to home/movie list page */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* route to details page */}
        <Route path="/details" exact>
          <MovieDetails />
        </Route>
        {/* route to add movie page */}
        <Route path="/addmovie" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
