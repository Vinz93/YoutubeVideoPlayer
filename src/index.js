import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
const API_KEY = 'AIzaSyB9XN8wdBoXHWFiYN4nZ7CiHcamtsC7VP8';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    }
    YTSearch({
      key: API_KEY,
      term: 'longboard'
    }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
