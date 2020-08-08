import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import img from '../../../assets/img/img/home/logo.jpg'
export default class NavHeader extends Component {
    render() {
        return (
            <NavBar
                mode="dark"
                leftContent={<img src={img} alt=''/>}
                rightContent={<input type='text' placeholder='寻找商品' />}
            ></NavBar>

        )
    }
}
