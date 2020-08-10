import React, { Component } from 'react'
import Nav from './components/headerNav';
import Side from './components/sideNav'
import './Sort.css'
export default class Sort extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='sort'>
                {/* 头部导航 */}
                <Nav></Nav>
                <div className='flex-container'>
                    {/* 左侧导航栏 */}
                    <Side giveId={(id)=>this.getId(id)}></Side>    
                </div>
            </div>
        )
    }
}

