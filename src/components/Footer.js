import React, { Component } from 'react'
import './Footer.css'
import {NavLink} from 'react-router-dom'
import img1 from '../assets/img/tab_home_nor.png'
import img2 from '../assets/img/tab_menu_nor.png'
import img3 from '../assets/img/tab_shopping_nor.png'
import img4 from '../assets/img/tab_me_nor.png'
import img5 from '../assets/img/tab_home_hig.png'
import img6 from '../assets/img/tab_menu_hig.png'
import img7 from '../assets/img/tab_shopping_hig.png'
import img8 from '../assets/img/tab_me_hig.png'
export default class Footer extends Component {
componentDidMount(){  

console.log(NavLink.propTypes)
}
    render() {
        return (
            <div className='footer'>
               <div className='nav'>
               <NavLink to='/index/home' activeClassName='select'>
                    <img src={this.urlstr==='http://localhost:3001/#/index/home'?img1:img5} alt=""/>
                    首页
                    </NavLink>
               <NavLink to='/index/sort' activeClassName='select'>
                    <img src={this.urlstr==='http://localhost:3001/#/index/sort'?img2:img6} alt=""/>
                    分类
                    </NavLink>
               <NavLink to='/index/order' activeClassName='select'>
                    <img src={this.urlstr?img3:img7} alt=""/>
                    购物车
                    </NavLink>
               <NavLink to='/index/mine' activeClassName='select'>
                    <img src={this.urlstr?img4:img8} alt=""/>
                    我的
                    </NavLink>
               </div>
            </div>
        )
    }
}
