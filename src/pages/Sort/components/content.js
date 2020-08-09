import React, { Component } from 'react'
import img from '../../../assets/img/1.jpg'
import {connect} from 'react-redux'
import {sortGoodsList,requestSortGoodsList} from '../../../store'
class content extends Component {
    componentDidMount(){
        this.props.requestSortGoods()
    }
    render() {
        return (
            <div className='content'>
                <div className='con'>
                <img src={img} alt=""/>
                <span>电视</span>
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
export default connect(mapStateToProps,mapDispatchToProps)(content)
