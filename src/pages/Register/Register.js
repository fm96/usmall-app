import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import { requestRegister } from '../../util/request'
import Alert from '../../util/alert'
import GoBack from '../../components/GoBack'
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
    // 清空
    empty() {
        this.setState({
            user: {
                phone: '',
                nickname: '',
                password: ''
            }
        })
    }
    // 注册
    register() {
        // 发起请求
        requestRegister(this.state.user).then(res => {
            if (res.data.code === 200) {
                // 弹框
                Alert(res.data.msg);
                // 清空
                this.empty();
                // 跳转页面

            } else {
                Alert(res.data.msg);
            }
        })
    }
    render() {
        let { user } = this.state
        return (
            <div className='register'>
                {/* onLeftClick={() => console.log('onLeftClick')} */}
                {/* 头部导航 */}
                <NavBar
                    mode="dark"
                    leftContent={<GoBack></GoBack>}
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
