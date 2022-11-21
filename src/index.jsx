require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Webinars from './app';
import "./scss/main.scss";

var mountNode = document.getElementById('app');

ReactDOM.render(<Webinars/>, mountNode); 