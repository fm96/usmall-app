import React, { Component } from 'react'
// 过滤器
import filterPrice from '../../../filters/Filter'
import img from '../../../assets/img/food.png'
import { connect } from 'react-redux'
import { goodsList, requestGoodsList } from '../../../store'
class List extends Component {
    componentDidMount() {
        this.props.requestGoods()

    }
    render() {
        const { goodsList } = this.props
        return (
            <div>
                {
                    goodsList.map((item) => {
                        return <div className='list' key={item.id}>
                            <img src={this.$imgUrl + item.img} alt="" />
                            <div className='right'>
                                <h3>{item.goodsname}</h3>
                                <span>￥{filterPrice(item.price)}</span>
                                <button>立即抢购</button>
                            </div>
                        </div>
                    })
                }
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        goodsList: goodsList(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestGoods: () => {
            dispatch(requestGoodsList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
