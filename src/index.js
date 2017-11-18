import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';
const API_KEY = 'AIzaSyB9XN8wdBoXHWFiYN4nZ7CiHcamtsC7VP8';

const App = () => {
  return(
    <div>
      Video Player
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
