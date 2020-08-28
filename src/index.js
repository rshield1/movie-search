import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './SearchMovies'

//render with class but return with function

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Rob's Movie Searcher</h1>
        <p className="header">Search movies and view ratings</p>
        <SearchMovies/>
      </div>   
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));


