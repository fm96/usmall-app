import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import img1 from '../../../assets/img/set.png'
import img2 from '../../../assets/img/news.png'
export default class headerNav extends Component {
    render() {
        return (
            <NavBar
                mode="dark"
                leftContent={<img src={img1} alt=''/>}
                rightContent={<img src={img2} alt=''/>}
            >个人中心</NavBar>
        )
    }
}
