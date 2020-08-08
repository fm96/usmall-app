import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class GoBack extends Component {
    GoBack(){
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                <span onClick={()=>this.GoBack()}>返回</span>
            </div>
        )
    }
}
export default withRouter(GoBack)
