import Vue from 'vue';
// import Vant from 'vant';
import 'vant/lib/index.css';
// Vue.use(Vant);

import {
    // 轮播图
    Swipe,
    SwipeItem,
    // 懒加载
    Lazyload,
    // 购物车徽标
    Badge,
    // 侧边栏
    Sidebar,
    SidebarItem,
    //折叠面板
    Collapse,
    CollapseItem,
    // 卡片
    Card,
    // 空白状态
    Empty,
    // 按钮
    Button,
    // 标签
    Tag,
    // 图片
    Image as VanImage,
    // 表单
    Form,
    // 输入框
    Field,
    // 轻提示
    Toast,
    // 单元格
    Cell,
    CellGroup
} from 'vant';

Vue.use(Swipe)
    .use(SwipeItem)
    .use(Lazyload, { loading: require('../assets/images/lazy-load.png') })
    .use(Badge)
    .use(Sidebar)
    .use(SidebarItem)
    .use(Collapse)
    .use(CollapseItem)
    .use(Card)
    .use(Empty)
    .use(Button)
    .use(Tag)
    .use(VanImage)
    .use(Form)
    .use(Field)
    .use(Toast)
    .use(Cell)
    .use(CellGroup)