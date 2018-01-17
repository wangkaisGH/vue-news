<template>
  <div class="template">
     <h3>{{photoinfo.title}}</h3>
     <p>发表时间：{{photoinfo.add_time | dateFormet('YYYY-MM-DD HH:mm:ss')}}&nbsp;&nbsp;共{{photoinfo.click}}次点击</p>
      <hr>
      <template>
         <img class="preview-img" v-for="(item,index) in list" :key='index' :src="item.src" 
      height="100" @click="$preview.open(index,list)">
      </template>
      <div class="content">
        {{photoinfo.content}}

      </div>
<comment :artid='id'></comment>
  </div>
</template>

<script>
// import mui from "../../libs/mui-master/dist/js/mui.min.js";
import Config from "../../js/Config.js";
import comment from '../../subComponents/comment.vue'
export default {
  data() {
    return {
      id:this.$route.params.photoid,
      photoinfo:{},
      list: []
    };
  },
  methods: {
    getimgdetail(){
      this.$http.get(Config.SERVER+'/api/getimageInfo/'+this.id).then(data=>{
        this.photoinfo = data.body.message[0]
      })
    },
    getThumImg(){
      this.$http.get(Config.SERVER+'/api/getthumimages/'+this.id).then(data=>{
        data.body.message.forEach(item=>{
          item.src = Config.IMG_SERVER+ item.src;
          item.w=600;
          item.h = 400;
        })
        this.list = data.body.message;
        console.log(this.list)
      })
    }
   
  },
  created() {
    this.getimgdetail(),
    this.getThumImg()
  },
  mounted() {
    
  },
  components:{
      comment
  }

};
</script>
   
 <style scoped>
  .template h3{
    font-size: 18px;
    color: #26Aff3;
    padding: 10px 5px;
  }
  p{
    padding: 10px;
  }
  .content{
    text-indent: 2em;
    font-size: 16px;
    line-height: 20px;
    padding: 10px
  }
  .preview-img{
    margin: 10px;
  }
</style>