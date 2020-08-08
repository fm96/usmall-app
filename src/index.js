import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入路由
import {HashRouter} from 'react-router-dom'
// 状态层
import {Provider} from 'react-redux'
import store from './store'
// 引入移动端框架antd-mobile 样式
import 'antd-mobile/dist/antd-mobile.css'; 
// 引入rem.js
import './assets/js/rem'
// 引入公共样式
import './assets/css/reset.css'
// 图片前缀
Component.prototype.$imgUrl='http://localhost:3000'
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
    <App />
  </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);

