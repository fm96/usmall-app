import React, { Component } from 'react'
import {connect} from 'react-redux'
import {sortList,requestSortList} from '../../../store'
class sideNav extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.requestSort();
    }
    getId(id){
        console.log('===sidenav===',id)
        this.props.giveId(id)
    }
    render() {
        const {sortList}=this.props
        return (
            <ul>
                {
                    sortList.map((item)=>{
                    return <li key={item.id} onClick={()=>this.getId(item.id)}>{item.catename}</li>
                    })
                }
            </ul>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        sortList:sortList(state)
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        requestSort:()=>{
            dispatch(requestSortList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(sideNav)
