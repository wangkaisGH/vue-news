<template>
<div class="template">
    <ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="index" @click="goDetail(item.id)">
			<a href="javascript:;">
				<img class="mui-media-object mui-pull-left" :src="item.img_url">
				<div class="mui-media-body">
					<h3 class="title">
                         {{item.title}}
                    </h3>
					<p class="mui-ellipsis">
                        <span>发表时间:{{item.add_time | dateFormet('YYYY-MM-DD hh:mm:ss')}}</span>
                        <span>点击次数:{{item.click}}</span>
                    </p>
				</div>
			</a>
		</li>
				

			</ul>
</div>
 
</template>


<script>
import Config from "../../js/Config.js";
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get(Config.SERVER + "/api/getnewslist").then(data => {
        this.newsList = data.body.message;
      });
    },
    goDetail(id){
        this.$router.push({name:'newsDetail',params:{newsId:id}})
    }
  },
  filters:{
     
  }
};
</script>

<style scoped>
.title{
    font-size: 14px
}
.mui-ellipsis{
    font-size: 12px;
    color:#26Aff3;
    display: flex;
    justify-content: space-between
}
</style>
