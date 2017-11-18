import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
const API_KEY = 'AIzaSyB9XN8wdBoXHWFiYN4nZ7CiHcamtsC7VP8';

ReactDOM.render(<div>
  <App name='Jhon'/>
  <App name='Vincenzo' />
  <App name='Barbara'/>
</div>, document.querySelector('.container'));
