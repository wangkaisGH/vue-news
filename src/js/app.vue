<template>
<!-- 顶部 -->
	<div class="root">
		<mt-header fixed title="新闻app模拟"> 
			<a @click="goBack" slot="left" v-if="isShow">
    			<mt-button icon="back">返回</mt-button>
 			 </a>
		</mt-header>
		<!-- 中间内容 -->
	<router-view></router-view>	


		<!-- 底部 -->
	<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-items" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-items" to="/menber">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-items" to="/shoppingcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-items" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>	
	</div>
</template>



<script>	
	export default{
		data(){
			return {
				isShow : false
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		},
		created(){
			this.isShow = !(this.$route.path === "/home")	
		},
		components:{

		},
		watch:{
			'$route.path':function(val,old){
				this.isShow = !(val === "/home")
			}
		}
	}
</script>
 

<style>
		html,body{
			background-color: white;
		}
		.root{
			padding-top: 40px;
			padding-bottom: 50px;
		}
		.mui-bar-tab .mui-tab-items.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-items {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-items .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-items .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>