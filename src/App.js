import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// 路由懒加载
import asyncComponent from './util/asyncComponent'
// 引入路由文件
const Login = asyncComponent(() => import('./pages/Login/Login'))
const Register = asyncComponent(() => import('./pages/Register/Register'))
const Index = asyncComponent(() => import('./pages/Index/Index'))
const SortDetail = asyncComponent(() => import('./pages/SortDetail/SortDetail'))
const GoodsDetail = asyncComponent(() => import('./pages/GoodsDetail/GoodsDetail'))
const MyRouter = asyncComponent(() => import('./pages/MyRouter/MyRouter'))
export default function App() {
  return (
    <div>
      {/* 路由出口 */}
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <MyRouter path='/index' component={Index}></MyRouter>
        <MyRouter path='/sort/detail' component={SortDetail}></MyRouter>
        <MyRouter path='/goodsdetail' component={GoodsDetail}></MyRouter>
        <Redirect to='/login'></Redirect>
      </Switch>
    </div>
  )
}
