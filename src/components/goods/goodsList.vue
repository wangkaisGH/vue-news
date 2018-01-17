<template>
  <div class="template">
      <ul class="goods_list">
          <li v-for="item in goodsList" :key="item.id">
              <img :src="item.img_url" alt="">
              <h4 class="title">{{item.title}}</h4>
              <div class="info">
                  <p class="price">
                      <span>￥{{item.sell_price}}</span>
                      <span><s>￥{{item.market_price}}</s></span>
                  </p>
                  <p class="sale">
                      <span>热卖中</span>
                      <span>剩余{{item.stock_quantity}}件</span>
                  </p>
              </div>
          </li>
      </ul>
      <div>
          <mt-button class="btn" type="danger" size="large" @click="getMore()">获取更多</mt-button>
      </div>
  </div>
</template>

<script>
import Config from '../../js/Config.js'
export default {
  data (){
      return{
           pageindex:1,
           goodsList:[]
      }
  },
  methods:{
      getGoodsList(){
          this.$http.get(Config.SERVER+'/api/getgoods?pageindex='+ this.pageindex).then(data=>{
              console.log(data.body.message)
              if(this.pageindex>1){
                  this.goodsList.push.apply(this.goodsList,data.body.message)
              }else{
                  this.goodsList = data.body.message
              }
              
          })
      },
      getMore(){
          this.pageindex++;
          this.getGoodsList();
      }
  },
  created(){
      this.getGoodsList();
  }
}
</script>
<style scoped>
    .goods_list{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        padding: 0 3px;
        justify-content: space-between
            }
     .goods_list li{
        list-style: none;
        margin: 0;
        padding: 2px;
        width: 49%;
        border: 1px solid #ccc;
        margin-bottom: 6px;
        box-shadow:0 1px 6px #ccc ;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .goods_list img{
        width: 100%;
        padding: 10px
    }
    .goods_list .title{
        font-size: 12px;
    }
    .goods_list .info{
        background: #eaeaea
    }
    .goods_list .info .price{
        
    }
    .goods_list .info .price span:nth-child(1){
        color: red
    }
     .goods_list .info .price span:nth-child(2){
        color: gray;
        font-size: 12px;
    }
     .goods_list .info .sale{
        margin: 0;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
    .btn{
        margin: 0 6px 6px 6px;
    }
</style>
