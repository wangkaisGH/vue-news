
import Vue from 'vue'
//import App from './app.vue'
import VueRouter from 'vue-router'
import App from './app.vue'
// 导入数据请求模块
import VueResource from 'vue-resource'
// 导入mint-ui
import MintUi from 'mint-ui'
// 导入样式文件
import 'mint-ui/lib/style.css'
import home from '../components/home/home.vue'
import menber from '../components/menber/menber.vue'
import shoppingcar from '../components/shoppingcar/shoppingcar.vue'
import search from '../components/search/search.vue'
import newsList from '../components/news/newsList.vue'
import newsDetail from '../components/news/newsDetail.vue'
import photoList from '../components/photo/photolist.vue'
import photoDetail from '../components/photo/photoDetail.vue'
import goodsList from '../components/goods/goodsList.vue'
// import search from '../components/search/search.vue'
// MUI导入
import MUI from '../libs/mui-master/dist/js/mui.min.js'
import '../libs/mui-master/dist/css/mui.min.css'
import '../libs/mui-master/examples/hello-mui/css/icons-extra.css'
import VuePreview from 'vue-preview'
import moment from "moment";
// import { Lazyload } from 'mint-ui';

// Vue.use(Lazyload);
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;
Vue.use(VueRouter)
Vue.use(MintUi)
Vue.use(VuePreview)

var router = new VueRouter({
	linkActiveClass:'mui-active',
	'routes':[
		{"name":"root",path:"/",redirect:'/home'},
		{"name":'home',path:'/home',component:home},
		{"name":'menber',path:'/menber',component:menber},
		{"name":'shoppingcar',path:'/shoppingcar',component:shoppingcar},
		{"name":'search',path:'/search',component:search},
		{"name":'newsList',path:'/news/newsList',component:newsList	},
		{"name":'newsDetail',path:'/news/newsDetail/:newsId',component:newsDetail},
		{"name":'photoList',path:'/photo/photoList',component:photoList},
		{"name":'photoDetail',path:'/photo/photoDetail/:photoid',component:photoDetail},
		{"name":'goodsList',path:'/goods/goodsList',component:goodsList}
	
	]
});
// 全局过滤器

Vue.filter("dateFormet",function(data,pattern){
	return  moment(data).format(pattern)
})
new Vue({
	el:"#app",
	router:router,
	render:c=>c(App)
}) 	