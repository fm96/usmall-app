import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Modal } from 'antd-mobile';
import Alert from '../util/alert'
import { requestBanner, requestGoods, requestGoodsInfo, requestGoodsCate, requestCateTree, addCart, requestCartList, cartUpdate, cartDel } from '../util/request'
/* 初始状态 */
const initState = {
    bannerList: [],//轮播图列表
    goodsList: [],//商品列表
    sortList: [],//分类列表
    sortDetail: [],//分类商品
    goodsDetail: {},//商品详情
    user: sessionStorage.getItem("isLogin") ? JSON.parse(sessionStorage.getItem("isLogin")) : null,//用户信息
    orderList: [],//购物车列表
    isAll: false,//是否全选
    isEdit: false,//是否编辑
}

/* dispatch */

// 轮播图
const changeBannerAction = (arr) => {
    return {
        type: 'changeBanner',
        list: arr
    }
}
// 商品信息
const changeGoodsActions = (arr) => {
    return {
        type: 'changeGoods',
        list: arr
    }
}
// 分类信息
const changeSortAction = (arr) => {
    return {
        type: 'changeSort',
        list: arr
    }
}
// 分类详情
const changeSortDetailAction = (arr) => {
    return {
        type: 'changeSortDetail',
        list: arr
    }
}
// 商品详情
const changeGoodsDetailAction = (obj) => {
    return {
        type: 'changeGoodsDetail',
        obj: obj
    }
}
// 用户信息
export const changeUserAction = (user) => {
    return {
        type: 'changeUser',
        user
    }
}
// 购物车列表
const changeOrderListAction = (arr) => {
    return {
        type: 'changeOrderList',
        list: arr
    }
}
// 修改某一条数据的checked
export const changeOneAction = (index) => {
    return {
        type: 'changeOne',
        index
    }
}
// 是否编辑
export const changeIsEditAction = () => {
    console.log('243434')
    return {
        type: 'changeEdit'
    }
}
// 是否全选
export const changeIsAllAction = () => {
    return {
        type: 'changeIsAll'
    }
}


/* 发起请求 */

// 轮播图
export const requestBannerList = () => {
    return (dispatch, getState) => {
        const { bannerList } = getState();
        if (bannerList.length > 0) {
            return;
        }
        // 请求
        requestBanner().then(res => {
            dispatch(changeBannerAction(res.data.list))
        })
    }
}
// 商品列表
export const requestGoodsList = () => {
    return (dispatch, getState) => {
        const { goodsList } = getState();
        if (goodsList.length > 0) {
            return;
        }
        //请求
        requestGoods().then(res => {
            dispatch(changeGoodsActions(res.data.list[0].content))
        })
    }
}
// 分类列表
export const requestSortList = () => {
    return (dispatch, getState) => {
        const { sortList } = getState();
        if (sortList.length > 0) {
            return;
        }
        // 请求
        requestCateTree().then(res => {
            dispatch(changeSortAction(res.data.list))
        })
    }
}
// 分类详情
export const requestSortDetailList = (id) => {
    return (dispatch) => {
        /* if(id===getState().sortDetail.id){
            return;
        } */
        // 请求
        requestGoodsCate({ fid: id }).then(res => {
            dispatch(changeSortDetailAction(res.data.list))
        })
    }
}
// 商品详情
export const requestGoodsDetail = (id) => {
    return (dispatch) => {
        // 请求
        requestGoodsInfo({ id: id }).then(res => {
            dispatch(changeGoodsDetailAction(res.data.list[0]))
        })
    }
}
// 加入购物车
export const requestAddCart = (obj) => {
    return () => {
        addCart(obj).then(res => {
            if (res.data.code === 200) {
                Alert(res.data.msg)
            } else {
                Alert(res.data.msg)
            }
        })
    }
}

// 购物车列表
export const requestOrderList = () => {
    return (dispatch, getState) => {
        // console.log(getState().user.uid)
        requestCartList({ uid: getState().user.uid }).then(res => {
            const list = res.data.list ? res.data.list : [];
            list.forEach(item => {
                item.checked = false
            })
            dispatch(changeOrderListAction(list))
        })
    }
}
// 点击+或-
export const requestEditType = (data) => {
    return (dispatch) => {
        cartUpdate(data).then(res => {
            dispatch(requestOrderList())
        })
    }
}
// 删除

const alert = Modal.alert;
export const requestDel = (id) => {

    return (dispatch) => {
        const del=alert('', '你确定要删除吗？', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            {
                text: '确定', onPress: () => cartDel({ id: id }).then(res => {
                    if (res.data.code === 200) {
                        Alert(res.data.msg);
                        del.close();//关闭弹框
                        dispatch(requestOrderList());
                    }
                })
            },
        ])

    }
}

/* 修改 */

function reducer(state = initState, action) {
    switch (action.type) {
        // 轮播图
        case 'changeBanner':
            return {
                ...state,
                bannerList: action.list
            };
        // 商品列表
        case 'changeGoods':
            return {
                ...state,
                goodsList: action.list
            };
        // 分类列表
        case 'changeSort':
            return {
                ...state,
                sortList: action.list
            };
        // 分类详情
        case 'changeSortDetail':
            return {
                ...state,
                sortDetail: action.list
            };
        // 商品详情
        case 'changeGoodsDetail':
            return {
                ...state,
                goodsDetail: action.obj
            };
        // 用户信息
        case 'changeUser':
            return {
                ...state,
                user: action.user
            };
        // 购物车列表
        case 'changeOrderList':
            return {
                ...state,
                orderList: action.list
            };
        // 修改某一条数据的checked
        case 'changeOne':
            const { orderList } = state;
            orderList[action.index].checked = !orderList[action.index].checked;
            return {
                ...state,
                orderList: [...orderList],
                isAll: orderList.every(item => item.checked)

            };
        // 是否编辑
        case 'changeEdit':
            return {
                ...state,
                isEdit: !state.isEdit,
            }
        // 是否全选
        case 'changeIsAll':
            return {
                ...state,
                isAll: !state.isAll,
                orderList: state.orderList.map(item => {
                    item.checked = !state.isAll;
                    return item
                })
            }

        default: return state
    }
}

// 导出数据
export const bannerList = (state) => state.bannerList
export const goodsList = (state) => state.goodsList
export const sortList = (state) => state.sortList
export const sortDetail = (state) => state.sortDetail
export const goodsDetail = (state) => state.goodsDetail
export const getUser = (state) => state.user
export const orderList = (state) => state.orderList
export const isEdit = (state) => state.isEdit
export const isAll = (state) => state.isAll
export const getAllPrice = state => {
    const { orderList } = state
    return orderList.reduce((val, item) => item.checked ? val + item.price * item.num : val, 0)
}



const store = createStore(reducer, applyMiddleware(thunk))
export default store