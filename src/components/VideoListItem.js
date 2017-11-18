import React from 'react';

const VideoListItem = (props) => {
  return (
    <li>
      <p> Video title: { props.video.snippet.title }</p>
    </li>
  );
}

export default VideoListItem
