import React, { Component } from 'react'
import './Mine.css'
import Nav from './components/headerNav'
import img from '../../assets/img/1.jpg'
import img1 from '../../assets/img/keep.png'
import img2 from '../../assets/img/icon_refund.png'
export default class Mine extends Component {
    render() {
        return (
            <div className='mine'>
               <Nav></Nav>
               <div className='icon'>
                   <div className='img'>
                       <img src={img} alt=""/>
                       <span>小不点儿</span>
                   </div>
                   <p><img src={img1} alt=""/> 我的收藏(5)</p>
               </div>
               {/* 我的订单 */}
               <div className='order'>
                   <p><span>我的订单</span><a href="#">查看订单</a></p>
                   <ul>
                       <li>
                           <img src={img2} alt=""/>
                           <span>待发货</span>
                       </li>
                       <li>
                           <img src={img2} alt=""/>
                           <span>待发货</span>
                       </li>
                       <li>
                           <img src={img2} alt=""/>
                           <span>待发货</span>
                       </li>
                       <li>
                           <img src={img2} alt=""/>
                           <span>待发货</span>
                       </li>
                       <li>
                           <img src={img2} alt=""/>
                           <span>待发货</span>
                       </li>
                   </ul>
               </div>
                {/* 收货地址管理 */}
                <p className='addr'>收货地址管理</p>
            </div>
        )
    }
}
