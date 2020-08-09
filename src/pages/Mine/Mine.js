import React, { Component } from 'react'
import './Mine.css'
import Nav from './components/headerNav'
import img from '../../assets/img/1.jpg'
import img1 from '../../assets/img/keep.png'
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
            </div>
        )
    }
}
