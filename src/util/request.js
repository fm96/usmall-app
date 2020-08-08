import axios from 'axios'
import qs from 'qs'
// 响应拦截
axios.interceptors.response.use(res=>{
    console.group('本次拦截的地址：'+res.config.url)
    console.log(res)
    console.groupEnd()
    return res
})
// 登录
export const requestLogin=(params)=>{  
    return axios({
        url:'/api/login',
        method:'post',
        data:qs.stringify(params)
    })
}
// 注册
export const requestRegister=(params)=>{
    return axios({
        url:'/api/register',
        method:'post',
        data:qs.stringify(params)
    })
}
// 获取分类信息
export const requestCate=()=>{
    return axios({
        url:'/api/getcate',
        method:'get'
    })
}
// 获取轮播图信息
export const requestBanner=()=>{
    return axios({
        url:'/api/getbanner',
        method:'get'
    })
}
// 获取限时秒杀信息
export const requestSeckill=()=>{
    return axios({
        url:'/api/getseckill',
        method:'get'
    })
}
// 获取商品信息
export const requestGoods=()=>{
    return axios({
        url:'/api/getindexgoods',
        method:'get'
    })
}
// 获取分类树形结构
export const requestCateTree=()=>{
    return axios({
        url:"/api/getcatetree",
        method:'get'
    })
}
// 获取分类商品
export const requestGoodsCate=(params)=>{
    return axios({
        url:'/api/getgoods',
        method:'get',
        params
    })
}
// 获取一个商品信息
export const requestGoodsInfo=(params)=>{
    return axios({
        url:'/api/getgoodsinfo',
        method:'get',
        params
    })
}
// 购物车列表
export const requestCartList=(params)=>{
    return axios({
        url:'/api/cartlist',
        method:'get',
        params
    })
}
// 购物车添加
export const addCart=(params)=>{
    return axios({
        url:'/api/cartadd',
        method:'post',
        data:qs.stringify(params)
    })
}
// 购物车修改
export const cartUpdate=(params)=>{
    return axios({
        url:'/api/cartedit',
        method:'post',
        data:qs.stringify(params)
    })
}
// 购物车删除
export const cartDel=(params)=>{
    return axios({
        url:'/api/cartdelete',
        method:'post',
        data:qs.stringify(params)
    })
}