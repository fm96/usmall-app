import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入路由
import {HashRouter} from 'react-router-dom'
// 引入移动端框架antd-mobile 样式
import 'antd-mobile/dist/antd-mobile.css'; 
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

