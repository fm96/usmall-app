import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Alert from '../util/alert'
import { requestBanner, requestGoods, requestGoodsInfo, requestGoodsCate, requestCateTree,addCart } from '../util/request'
/* 初始状态 */
const initState = {
    bannerList: [],//轮播图列表
    goodsList: [],//商品列表
    sortList: [],//分类列表
    sortDetail: [],//分类商品
    goodsDetail: {},
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
        requestGoodsInfo({id:id}).then(res => {
            dispatch(changeGoodsDetailAction(res.data.list[0]))
        })
    }
}
// 加入购物车
export const requestAddCart=(obj,modal)=>{
    return ()=>{
        addCart(obj).then(res=>{
            if(res.data.code===200){
                Alert(res.data.msg)
            }else{
                Alert(res.data.msg)
            }
        })
    }
}

/* 修改 */

function reducer(state = initState, action) {
    switch (action.type) {
        case 'changeBanner':
            return {
                ...state,
                bannerList: action.list
            };
        case 'changeGoods':
            return {
                ...state,
                goodsList: action.list
            };
        case 'changeSort':
            return {
                ...state,
                sortList: action.list
            };
        case 'changeSortDetail':
            return {
                ...state,
                sortDetail: action.list
            };
        case 'changeGoodsDetail':
            return {
                ...state,
                goodsDetail: action.obj
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



const store = createStore(reducer, applyMiddleware(thunk))
export default store