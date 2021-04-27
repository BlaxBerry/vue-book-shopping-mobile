import Vue from 'vue';
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

import {
    // 轮播图
    Swipe,
    SwipeItem,
    // 懒加载
    Lazyload
} from 'vant';

Vue.use(Swipe)
    .use(SwipeItem)
    .use(Lazyload);