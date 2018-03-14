import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dude from './Dude';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dude />, document.getElementById('root'));
registerServiceWorker();
