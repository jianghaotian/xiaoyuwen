import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import App from './App';

import api from './request/api';
import store from './redux/store';

React.Component.prototype.$api = api;
React.Component.prototype.$store = store;

ReactDOM.render(<App />, document.getElementById('root'));
