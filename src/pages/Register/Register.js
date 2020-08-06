import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
// 样式
import './Register.css'
export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                phone: '',
                nickname: '',
                password: ''
            }
        }
    }
    // 方法
    changeUser(key, e) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
        // console.log(key)
    }
    // 注册
    register() {
        console.log(this.state.user)
    }
    render() {
        let { user } = this.state
        return (
            <div className='register'>
                {/* onLeftClick={() => console.log('onLeftClick')} */}
                {/* 头部导航 */}
                <NavBar
                    mode="dark"
                    leftContent='返回'
                >注册</NavBar>
                {/* 表单输入框 */}
                <div className='form'>
                    <div>手机号：<input type="text" value={user.phone} onChange={this.changeUser.bind(this, 'phone')} /></div>
                    <div>昵称：<input type="text" value={user.nickname} onChange={this.changeUser.bind(this, 'nickname')} /></div>
                    <div>密码：<input type="text" value={user.password} onChange={this.changeUser.bind(this, 'password')} /></div>
                    <button onClick={() => { this.register() }}>注 册</button>
                </div>

            </div>
        )
    }
}
