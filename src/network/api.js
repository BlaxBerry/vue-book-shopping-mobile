import request from "./request"

// home的所有数据
export const GetHomeAllData = () => request.get('/index')

// home页的商品数据goods
// let type = "sales"
// let page = 1
// '/index?' + type + '=1&page=' + page
export const GetHomeGoodsData = (type = "sales", page = 1) => request.get('/index?' + type + "=1&page=" + page)


// category分类数据
export const GetCategoryData = () => request.get('/goods')

// category分类页 商品列表 分类/排序
export const GetCategoryOrderList = (id = 0, page = 1, order = "sales") =>
    request.get('/goods?category_id=' + id + "&page=" + page + '&' + order + '=1')

// detail详情页数据
export const GetDetailData = (id) => request.get('/goods/' + id)

// register 注册
export const Register = (params) => request.post('/auth/register', params)

// login 登陆
export const Login = (params) => request.post('/auth/login', params)

// 退出登陆 logout
export const Logout = () => request.post('/auth/logout')



// 添加购物车
// goods_id, num
export const AddCart = (params) => request.post('/carts', params)

// 修改购物车（商品数量）
// params ={num:1}
export const EditCart = (id, params) => request.put(`/carts/${id}`, params)

// 购物车商品状态（全选/全不选）
// params = {cart_ids:[]}
export const CheckedCart = (params) => request.patch('/carts/checked', params)

// 获取全部购物车
export const GetCart = (params = '') => request.get('/carts?' + params)

// 删除购物车
export const DeleteCart = (id) => request.delete(`/carts/${id}`)