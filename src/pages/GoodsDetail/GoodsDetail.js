import React, { Component } from 'react'
import querystring from 'querystring'
import { connect } from 'react-redux'
import { goodsDetail, requestGoodsDetail, requestAddCart } from '../../store'
import filterPrice from '../../filters/Filter'
import './GoodsDetail.css'
import { NavBar, Modal, List } from 'antd-mobile';
import GoBack from '../../components/GoBack'
import img1 from '../../assets/img/img/cart_on.png'
class GoodsDetail extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            goods: {
                uid: '',
                goodsid: '',
                num: 1
            }
        }
    }
    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1)).id
        this.props.requestGoodsDetail(id)
        // const attr=JSON.parse(this.props.goodsDetail.specsattr)
    }
    // 弹框
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }
    // 加入购物车
    addCart(id){
        let uid=JSON.parse(sessionStorage.getItem('isLogin')).uid
        console.log(uid)
        this.setState({
            goods:{
                ...this.state.goods,
                uid:uid,
                goodsid:id,
            },
            modal:false
        },()=>{
            this.props.requestAddCart(this.state.goods)
        })
        
    }
    render() {
        const { goodsDetail } = this.props
        return (
            <div className='goodsdetail'>
                {/* 头部导航 */}
                <NavBar
                    mode="dark"
                    leftContent={<GoBack></GoBack>}
                >商品详情</NavBar>
                {/* 内容 */}
                <div className='con'>
                    <img src={goodsDetail.img} alt="" />
                    <div className='info'>
                        <h3><span>{goodsDetail.goodsname}</span><a href="#"><img src={img1} alt="" />收藏</a></h3>
                        <div className='price'>
                            <div className='left'>
                                <span>￥{goodsDetail.price ? filterPrice(goodsDetail.price) : null}</span>
                                <span className='col'>￥{goodsDetail.market_price ? filterPrice(goodsDetail.market_price) : null}</span>
                            </div>

                            <div className='right'>
                                {goodsDetail.ishot === 1 ? <span>热卖</span> : ''}
                                {goodsDetail.isnew === 1 ? <span>新品</span> : ''}
                            </div>
                        </div>

                    </div>
                </div>
                {/* 图片 */}
                <div className='img' dangerouslySetInnerHTML={{ __html: goodsDetail.description }}>
                    {/* <img src={img} alt="" /> */}
                </div>
                <footer>
                    <a onClick={this.showModal('modal')}>加入购物车</a>
                </footer>
                {/* 购物车弹框 */}
                <Modal
                    popup
                    visible={this.state.modal}
                    onClose={this.onClose('modal')}
                    animationType="slide-up"
                >
                    <List renderHeader={() => <div className='title'><img src={goodsDetail.img} alt="" /><h3>{goodsDetail.goodsname}</h3></div>} className="popup-list">
                        <List.Item>{goodsDetail.specsname}</List.Item>
                        <List.Item>
                            {goodsDetail.specsattr ? JSON.parse(goodsDetail.specsattr).map((item) => {
                                return <span className='spec' key={item}>{item}</span>
                            }) : null}

                        </List.Item>
                        <List.Item>
                            <button className='btn' onClick={() => this.addCart(goodsDetail.id)}>加入购物车</button>
                        </List.Item>
                    </List>
                </Modal>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        goodsDetail: goodsDetail(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestGoodsDetail: (id) => dispatch(requestGoodsDetail(id)),
        requestAddCart: (obj,modal) => dispatch(requestAddCart(obj,modal))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoodsDetail)
