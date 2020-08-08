import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from '../Home/Home'
import Sort from '../Sort/Sort'
import Order from '../Order/Order'
import Mine from '../Mine/Mine'
import Footer from '../../components/Footer'
export default function Index() {
    return (
        <div>
            <Switch>
                <Route path='/index/home' component={Home}></Route>
                <Route path='/index/sort' component={Sort}></Route>
                <Route path='/index/order' component={Order}></Route>
                <Route path='/index/mine' component={Mine}></Route>
                <Redirect to='/index/home'></Redirect>
            </Switch>
            {/* 底部导航 */}
            <Footer></Footer>
        </div>
    )
}
