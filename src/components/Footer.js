import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import img1 from '../assets/img/tab_home_nor.png'
import img2 from '../assets/img/tab_menu_nor.png'
import img3 from '../assets/img/tab_shopping_nor.png'
import img4 from '../assets/img/tab_me_nor.png'
import img5 from '../assets/img/tab_home_hig.png'
import img6 from '../assets/img/tab_menu_hig.png'
import img7 from '../assets/img/tab_shopping_hig.png'
import img8 from '../assets/img/tab_me_hig.png'
class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='nav'>
                    <NavLink to='/index/home' activeClassName='select'>
                        <img src={this.props.location.pathname === '/index/home' ? img5 : img1} alt="" />
                    首页
                    </NavLink>
                    <NavLink to='/index/sort' activeClassName='select'>
                        <img src={this.props.location.pathname === '/index/sort' ? img6 : img2} alt="" />
                    分类
                    </NavLink>
                    <NavLink to='/index/order' activeClassName='select'>
                        <img src={this.props.location.pathname === '/index/order' ? img7 : img3} alt="" />
                    购物车
                    </NavLink>
                    <NavLink to='/index/mine' activeClassName='select'>
                        <img src={this.props.location.pathname === '/index/mine' ? img8 : img4} alt="" />
                    我的
                    </NavLink>
                </div>
            </div>
        )
    }
}
export default withRouter(Footer)
