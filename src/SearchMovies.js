// Add react hooks to manage state in a functional component
import React, { useState }from 'react'
import MovieCard from './MovieCard'


export default function SearchMovies(){
// html for is used for a specific element 
//states for input query, and movies
// use state will return an array of 2 things...
// the state and a function that will update the state
    const [query, setQuery] = useState('0');
//create the state for movies, and update that state appropriate
    // const [movies, setMovies] = useState([]);
    
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async (e) => {
        e.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=615584ffa7f7ade097f6cf6fd0891d19&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" 
                    type="text" 
                    name='query' 
                    placeholder='Gladiator'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
                
            </form>

            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie =>
                   <MovieCard movie = {movie} key={movie.id} />
                )}
            </div>
        </div>
        
    )
}