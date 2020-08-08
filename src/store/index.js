import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { requestBanner, requestGoods } from '../util/request'
// 初始状态
const initState = {
    bannerList: [],//轮播图列表
    goodsList: [],//商品列表
}
// dispatch
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
// 发起请求
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
// 修改
function reducer(state = initState, action) {
    switch (action.type) {
        case 'changeBanner':
            return {
                ...state,
                bannerList: action.list
            }
        case 'changeGoods':
            return {
                ...state,
                goodsList:action.list
            }
        default: return state
    }
}

// 导出数据
export const bannerList = (state) => state.bannerList
export const goodsList=(state)=>state.goodsList



const store = createStore(reducer, applyMiddleware(thunk))
export default store