import React from 'react'
import {Switch,Route} from 'react-router-dom'

// 引入路由文件
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Index from './pages/Index/Index'
import SortDetail from './pages/SortDetail/SortDetail'
import GoodsDetail from './pages/GoodsDetail/GoodsDetail'
export default function App() {
  return (
    <div>
      {/* 路由出口 */}
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/index' component={Index}></Route>
        <Route path='/sort/detail' component={SortDetail}></Route>
        <Route path='/goodsdetail' component={GoodsDetail}></Route>
      </Switch>
    </div>
  )
}
