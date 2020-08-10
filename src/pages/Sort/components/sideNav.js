import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
// import img from '../../../assets/img/1.jpg'
import { sortList, requestSortList } from '../../../store'
class sideNav extends Component {
    constructor(props) {
        super(props);
        this.state={
            n: 0
        }
        
    }
    componentDidMount() {
        this.props.requestSort();
    }
    getIndex(index) {
        this.setState({
            n:index
        })

    }
    getId(id,catename){
        this.props.history.push('/sort/detail?id='+id+"&catename="+catename)
    }
    render() {
        const { sortList} = this.props
        return (
            <div className="side-left">
                <ul>
                    {
                        sortList.map((item, index) => {
                            return <li key={item.id} onClick={() => this.getIndex(index)}>{item.catename}</li>
                        })
                    }
                </ul>
                <div className='content'>
                    {sortList.length>0?sortList[this.state.n].children.map((item) => {
                        return <div className='con' key={item.id} onClick={()=>this.getId(item.id,item.catename)}>
                            <img src={this.$imgUrl+item.img} alt="" />
                            <span>{item.catename}</span>
                        </div>
                    }):null}

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        sortList: sortList(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestSort: () => {
            dispatch(requestSortList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(sideNav))
