import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

//render with class but return with function

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello world!</h1>
      </div>   
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));


