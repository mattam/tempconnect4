import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ConnectFourContainer from './pages';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ConnectFourContainer />, document.getElementById('root'));
registerServiceWorker();
