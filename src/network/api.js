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

// login 注册
export const Register = (params) => request.post('/auth/register', params)