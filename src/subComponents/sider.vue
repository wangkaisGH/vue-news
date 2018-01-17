<template>
  <!-- 轮播 -->
      <mt-swipe :auto="4000">
         <mt-swipe-item v-for="(item,index) in lunbo" :key="index">
             <img :src="item.img" alt="">
         </mt-swipe-item>
      </mt-swipe>
</template>


<script>
    export default{
        data(){
                return{}
        },
        props:['lunbo']
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
</style>
