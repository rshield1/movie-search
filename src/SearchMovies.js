import React from 'react'


export default function SearchMovies(){
// html for is used for a specific element 

    const searchMovies = async (e) => {
        e.preventDefault();
        
        const query = "Gladiator"

        const url = `https://api.themoviedb.org/3/search/movie?api_key=615584ffa7f7ade097f6cf6fd0891d19&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
            
        }catch(err){

            console.error(err);
        }

    }
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" 
                type="text" 
                name='query' 
                placeholder='Gladiator'
            />
            <button className="button" type="submit">Search</button>
        </form>
    )
}