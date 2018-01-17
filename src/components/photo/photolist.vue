<template>
  <div class="template">
      <!--滑动导航 -->
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<span  v-for="item in imgcategory" :key="item.id" :class="['mui-control-item',item.id==0?'mui-active':'']" @click="getImages(item.id)">
							{{item.title}}
						</span>
					</div>
				</div>
			</div>
            <!-- 图片区域 -->
            <ul>
  <li class="img_list" v-for="item in imginfos" :key="item.id" @click="goimgdetail(item.id)">
    <img v-lazy="item.img_url">
    <div class="info">
        <h4>{{item.title}}</h4>
        <p v-html="item.zhaiyao"></p>
    </div>
  </li>
</ul>
<!-- <comment :id='resid'></comment> -->
  </div>
</template>

<script>
import mui from "../../libs/mui-master/dist/js/mui.min.js";
import Config from "../../js/Config.js";
import comment from '../../subComponents/comment.vue'
export default {
  data() {
    return {
      imgcategory: [],
      imginfos:[]
    };
  },
  methods: {
    getImgcategory() {
      this.$http.get(Config.SERVER + "/api/getimgcategory").then(data => {
        console.log(data.body);
        data.body.message.unshift({ id: 0, title: "全部" });
        this.imgcategory = data.body.message;
      });
    },
    getImages(id) {
      this.imginfos = [];
      this.$http.get(Config.SERVER + "/api/getimages/" + id).then(data => {
        console.log(data.body);
        data.body.message.forEach(item => {
            item.img_url = Config.IMG_SERVER+item.img_url;
        });
        this.imginfos = data.body.message
      });
    },
    goimgdetail(id){
        this.$router.push({name:"photoDetail",params:{photoid:id}})
    }
  },
  created() {
    this.getImgcategory();
    this.getImages(0)
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  components:{
      comment
  }

};
</script>
   
 <style scoped>
#slider {
  background-color: #efeff4;
}
.mui-slider {
  z-index: 0;
}
.mui-scroll {
  z-index: 0;
}
.mui-scroll-wrapper {
  z-index: 0;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
ul{
    padding: 0 10px;
    margin: 0
}
.img_list{
    list-style: none;
    width: 100%;
    box-shadow: 0 0 10px gray;
    position: relative;
    margin-top: 15px;
}
img{
    width: 100%;
    display: block;
}
.info{
    background-color: rgba(0,0,0,0.5);
    color:white;
    position: absolute;
    bottom: 0px;
    max-height: 130px;
    overflow: hidden;
}
.info p{
    color: white;
}
</style>