import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import {requestLogin} from '../../util/request'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeUserAction} from '../../store'
import Alert from '../../util/alert'
// 样式
import './Login.css'
class Login extends Component {
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
        // 发起请求
        requestLogin(this.state.user).then(res=>{
                if(res.data.code===200){
                    Alert(res.data.msg)
                    // 设置标记
                    this.props.getUser(res.data.list)
                    sessionStorage.setItem('isLogin',JSON.stringify(res.data.list))
                    this.props.history.push('/index')
                }else{
                    Alert(res.data.msg)
                }
        })
    }
    render() {
        let { user } = this.state
        return (
            <div className='login'>
                {/* 头部导航 */}
                <NavBar
                    mode="dark"
                    rightContent={
                        <Link to='/register'>注册</Link>
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
const mapStateToProps=(state)=>{
    console.log(state)
    return{

    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getUser:(user)=>dispatch(changeUserAction(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login))
