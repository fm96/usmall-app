import React, { Component } from 'react'
import './Home.css'
import Nav from './components/NavHeader'
import Banner from './components/Banner'
import List from './components/List'

import img from '../../assets/img/img/home/1.jpg'
export default class Index extends Component {
    render() {
        return (
            <div className='index'>
                {/* 头部导航 */}
                <Nav></Nav>
                    {/* 轮播图 */}
                    <Banner></Banner>
                    {/* 限时抢购 */}
                    <div className='list-nav'>
                        <ul>
                            <li>
                                <img src={img} alt="" />
                                <p>限时抢购</p>
                            </li>
                            <li>
                                <img src={img} alt="" />
                                <p>积分商城</p>
                            </li>
                            <li>
                                <img src={img} alt="" />
                                <p>联系我们</p>
                            </li>
                            <li>
                                <img src={img} alt="" />
                                <p>商品分类</p>
                            </li>
                        </ul>
                    </div>
                    {/* 列表 */}
                    <List></List>
                </div>
        )
    }
}
