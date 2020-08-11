import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import { connect } from 'react-redux'
import { orderList, requestOrderList, changeOneAction, changeIsEditAction, isEdit, changeIsAllAction, isAll, requestEditType, requestDel, getAllPrice } from '../../store'
import filterPrice from '../../filters/Filter'
import './Order.css'
import home from '../../assets/img/store.png'
import checked from '../../assets/img/radio_hig.png'
import checkedN from '../../assets/img/radio_nor.png'
import editor from '../../assets/img/editor_hig.png'
import editorN from '../../assets/img/editor_nor.png'
import Alert from '../../util/alert';
import shop from '../../assets/img/tab_shopping_nor.png'

class Order extends Component {
    componentDidMount() {
        this.props.requestOrderList()
    }
    sub(item) {
        if (item.num <= 1) {
            Alert('宝贝不能再少了');
            return;
        }
        this.props.requestEditType({ id: item.id, type: 1 })
    }

    render() {
        const { orderList, changeOne, changeEdit, isEdit, changeIsAll, isAll, requestEditType, requestDel, getAllPrice } = this.props
        return (
            <div className='order'>
                {/* 头部导航 */}
                <NavBar
                    mode="dark"
                >购物车</NavBar>
                {/* 内容 */}

                <div className='content'>
                    {orderList.length > 0 ? orderList.map((item, index) => {
                        return (<div className='con' key={item.id}>
                            <h3>
                                <img src={home} alt="" />
                    杭州保税区仓
                </h3>
                            <div className='flex'>
                                <div className='left'>
                                    <img onClick={() => changeOne(index)} src={item.checked ? checked : checkedN} alt="" />
                                    <img className='img' src={item.img} alt="" />
                                </div>
                                <div className='right'>
                                    <h2>{item.goodsname}</h2>
                                    <span>￥{filterPrice(item.price)}</span>
                                    <div className='btn'>
                                        <button onClick={() => this.sub(item)}>-</button>
                                        <button>{item.num}</button>
                                        <button onClick={() => requestEditType({ id: item.id, type: 2 })}>+</button>
                                    </div>
                                    <p>总价￥{item.price * item.num}</p>
                                </div>
                                {/* 删除 */}

                                <button onClick={() => requestDel(item.id)} className={isEdit ? "del delshow" : 'del'}>删除</button>
                            </div>

                        </div>)
                    }) : <div className='shop'><img src={shop} alt="" /><p><span>购物车还是空空的</span><span>快去逛逛吧~</span></p></div>}
                </div>


                {/* 去结算 */}
                {orderList.length > 0 ? <footer>
                    <div className='check'>
                        <img onClick={() => changeIsAll()} src={isAll ? checked : checkedN} alt="" />
                        全选
                    </div>
                    <div className='edit' onClick={() => changeEdit()}>
                        <img src={isEdit ? editor : editorN} alt="" />
                        编辑
                    </div>
                    <div className='totalP'>
                        <p>合计：{filterPrice(getAllPrice)}</p>
                        <span>(不包含运费)</span>
                    </div>
                    <button className='total'>去结算</button>
                </footer> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orderList: orderList(state),
        isEdit: isEdit(state),
        isAll: isAll(state),
        getAllPrice: getAllPrice(state),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestOrderList: () => dispatch(requestOrderList()),
        changeOne: (index) => dispatch(changeOneAction(index)),
        changeEdit: () => dispatch(changeIsEditAction()),
        changeIsAll: () => dispatch(changeIsAllAction()),
        requestEditType: (data) => dispatch(requestEditType(data)),
        requestDel: (id) => dispatch(requestDel(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order)
