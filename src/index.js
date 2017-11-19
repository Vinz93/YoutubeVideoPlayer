import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyB9XN8wdBoXHWFiYN4nZ7CiHcamtsC7VP8';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    }
    this.videoSearch('Jeeiph');
  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term,
    }, (videos) => {
      this.setState({
         videos,
         selectedVideo: videos[0],
        });
    });
  }

  render() {
    const { selectedVideo, videos } = this.state;
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
