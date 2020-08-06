import React from 'react'
import {Switch,Route} from 'react-router-dom'

// 引入路由文件
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
export default function App() {
  return (
    <div>
      {/* 路由出口 */}
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
      </Switch>
    </div>
  )
}
