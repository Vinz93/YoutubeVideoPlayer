import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';


ReactDOM.render(<div>
  <App name='Jhon'/>
  <App name='Vincenzo' />
  <App name='Barbara'/>
</div>, document.querySelector('.container'));
