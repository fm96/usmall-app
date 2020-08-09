import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
export default class headerNav extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                >分类</NavBar>
            </div>
        )
    }
}
