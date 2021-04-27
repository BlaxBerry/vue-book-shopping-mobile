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