<template>
  <div class="template">
      <!-- 轮播 -->
      <silder :lunbo="lunbo"></silder>
      <!-- 九宫格 -->
       <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newsList">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="photo/photoList">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodsList">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		        
		        </ul> 
  </div>
</template>


<script>
import Config from '../../js/Config.js'
import silder from '../../subComponents/sider.vue'
    export default{
        data(){
            return {
                lunbo:[],
            }
        },
        created(){
            this.getLunbo() 
        },
        methods:{
            getLunbo(){
                this.$http.get(Config.SERVER+'/api/getlunbo').then(data=>{
                    data.body.message.forEach(element => {
                        element.img = Config.SERVER+element.img;
                    });
                    console.log(data.body.message);
                    this.lunbo = data.body.message;
                })
            }
        },
        components:{
            silder
        }
    }
</script>


<style scoped>
.mint-swipe{
    height:170px;
}
.mint-swipe-item{
    text-align: center;
    overflow: hidden;
}
.mint-swipe-item img{
    width: 100%;
}
.mui-grid-view.mui-grid-9{
    background-color: white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
   border: 0;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 13px;
    line-height: 13px;
    display: block;
    width: 100%;
    height: 13px;
    margin-top: 8px;
    text-overflow: ellipsis;
    color: #333;
}
</style>
