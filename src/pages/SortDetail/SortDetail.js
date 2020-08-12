import React, { Component } from 'react'
import './SortDetail.css'
import { NavBar } from 'antd-mobile';
import GoBack from '../../components/GoBack'
import filterPrice from '../../filters/Filter'
import querystring from 'querystring'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { sortDetail, requestSortDetailList, sortList } from '../../store'
class SortDetail extends Component {
    constructor() {
        super();
        this.state = {
            catename: '',
            modal:false
        }
    }
    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1)).id
        this.props.requestSortDetailList(id)
        const catename = querystring.parse(this.props.location.search.slice(1)).catename
        /*  console.log(this.props)
         console.log(catename) */
        this.setState({
            catename: catename
        })

    }
    getId(id) {
        this.props.history.push('/goodsdetail?id=' + id)
    }
  
    render() {
        let { sortDetail } = this.props
        if(sortDetail===null)sortDetail=[]
        return (
            <div className='sortdetail'>
                {/* 头部导航 */}
                <NavBar
                    mode="dark"
                    leftContent={<GoBack></GoBack>}
                >{this.state.catename}</NavBar>
                {sortDetail.length > 0 ? sortDetail.map((item, index) => {
                    return <div className='list' key={item.id} n={index} onClick={() => this.getId(item.id)}>
                        <img src={this.$imgUrl + item.img} alt="" />
                        <div className='right'>
                            <h3>{item.goodsname}</h3>
                            <span>￥{filterPrice(item.price)}</span>
                            <button >立即抢购</button>
                        </div>
                    </div>
                }) : null}
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        sortDetail: sortDetail(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestSortDetailList: (id) => dispatch(requestSortDetailList(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SortDetail))
