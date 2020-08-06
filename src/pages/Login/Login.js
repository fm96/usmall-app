import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
// 样式
import './Login.css'
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                phone: '',
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
    login() {
        console.log(this.state.user)
    }
    render() {
        let { user } = this.state
        return (
            <div className='login'>
                {/* 头部导航 */}
                <NavBar
                    mode="dark"
                    rightContent={
                        <span>注册</span>
                    }
                >登录</NavBar>
                {/* 表单输入框 */}
                <div className='form'>
                    <div>账号：<input type="text" value={user.phone} onChange={this.changeUser.bind(this, 'phone')} /></div>
                    <div>密码：<input type="text" value={user.password} onChange={this.changeUser.bind(this, 'password')} /></div>
                    <span>忘记密码</span>
                    <button onClick={() => { this.login() }}>登 录</button>
                </div>

            </div>
        )
    }
}
