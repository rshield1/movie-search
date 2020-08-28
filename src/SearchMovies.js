import React from 'react'


export default function SearchMovies(){
// html for is used for a specific element 
    return (
        <form className="form">
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