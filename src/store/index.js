import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { requestBanner, requestGoods,requestCate,requestGoodsCate } from '../util/request'
/* 初始状态 */
const initState = {
    bannerList: [],//轮播图列表
    goodsList: [],//商品列表
    sortList:[],//分类列表
    sortGoodsList:[],//分类商品
    id:2,
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
const changeSortAction=(arr)=>{
    return {
        type:'changeSort',
        list:arr
    }
}
// 分类商品
const changeSortGoodsAction=(arr)=>{
    return{
        type:'changeSortGoods',
        list:arr
    }
}
// id
export const changeIdAction=(id)=>{
    console.log('===changeIdAction====',id)
    return{
        type:'getId',
        id:id
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
export const requestSortList=()=>{
    return (dispatch,getState)=>{
        const {sortList} =getState();
        if(sortList.length>0){
            return;
        }
        // 请求
        requestCate().then(res=>{
            dispatch(changeSortAction(res.data.list))
        })
    }
}
// 分类商品
export const requestSortGoodsList=()=>{
    return (dispatch,getState)=>{
        const {sortGoodsList,id}=getState();
        console.log(id)
        if(sortGoodsList.length>0){
            return;
        }
        // 请求
        requestGoodsCate({fid:id}).then(res=>{
            dispatch(changeSortGoodsAction(res.data.list))
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
                goodsList:action.list
            };
        case 'changeSort':
            return{
                ...state,
                sortList:action.list
            };
        case 'changeSortGoods':
            return{
                ...state,
                sortGoodsList:action.list
            };
        case 'getId':
            return {
                ...state,
                id:action.id
            }
        default: return state
    }
}

// 导出数据
export const bannerList = (state) => state.bannerList
export const goodsList=(state)=>state.goodsList
export const sortList =(state)=>state.sortList
export const sortGoodsList =(state)=>state.sortGoodsList



const store = createStore(reducer, applyMiddleware(thunk))
export default store