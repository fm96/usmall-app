import React, { Component } from 'react'
import Nav from './components/headerNav';
import Side from './components/sideNav'
import Content from './components/content'
import './Sort.css'
import {connect} from 'react-redux'
// import {sortGoodsList,requestSortGoodsList} from '../../../store'
import store,{changeIdAction,sortGoodsList,requestSortGoodsList} from '../../store';
class Sort extends Component {
    constructor(props){
        super(props);
        this.state={
            id:store.getState().id
        }
    }
    getId(id){
        console.log('====sort===',id)
        store.dispatch(changeIdAction(id))
        // this.props.requestSortGoods(id)
    }
    render() {
        return (
            <div className='sort'>
                {/* 头部导航 */}
                <Nav></Nav>
                <div className='flex-container'>
                    {/* 左侧导航栏 */}
                    <div className="side-left">
                    <Side giveId={(id)=>this.getId(id)}></Side>
                    </div>
                        {/* 右侧导航栏 */}
                        <div className='side-right'>
                            <Content></Content>
                        </div>
                       
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        sortGoodsList:sortGoodsList(state)
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        requestSortGoods:()=>{
            dispatch(requestSortGoodsList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sort)
