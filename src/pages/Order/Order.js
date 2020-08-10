import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import './Order.css'
import img from '../../assets/img/store.png'
// import img2 from '../../assets/img/radio_hig.png'
import img3 from '../../assets/img/radio_nor.png'
import img4 from '../../assets/img/1.jpg'
export default class Order extends Component {
    render() {
        return (
            <div className='order'>
               {/* 头部导航 */}
               <NavBar
                    mode="dark"
                >购物车</NavBar>
                {/* 内容 */}
                <div className='content'>
                    <div className='con'>
                        <h3>
                            <img src={img} alt=""/>
                            杭州保税区仓
                        </h3>
                        <div className='flex'>
                            <div className='left'>
                                <img src={img3} alt=""/>
                                <img className='img' src={img4} alt=""/>
                            </div>
                            <div className='right'>
                                <h2>雪豹秋日牛皮男装</h2>
                                <span>￥233</span>
                                <div className='btn'>
                                    <button>-</button>
                                    <button>2</button>
                                    <button>+</button>
                                </div>
                                <p>总价￥3434</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
