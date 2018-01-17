<template>
    <div class="template">
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="add-time">发表时间&nbsp;&nbsp;{{newsInfo.add_time | dateFormet('YYYY-MM-DD')}}&nbsp;&nbsp;共{{newsInfo.click}}此浏览&nbsp;&nbsp;分类：经济技术</p>
        <hr>
        <!-- 新闻内容 -->
        <div class="content" v-html="newsInfo.content">

        </div>
        <!-- 评论区域 -->
        <div class="comment">
            <comment :artid="id"></comment>
        </div>
    </div>
</template>

<script>    
    import Config from "../../js/Config.js"
    import comment from "../../subComponents/comment.vue"
    export default{
        data(){
            return{
                id:this.$route.params.newsId,
                newsInfo:{},
            }
        },
        created(){
            this.getNewsDetail()
        },
        methods:{
            getNewsDetail(){
                console.log(this.id)
                this.$http.get(Config.SERVER+'/api/getnew/'+this.id).then(data=>{
                   this.newsInfo = data.body.message[0];
                })
            }
        },
        components:{
            comment
        }
    }
</script>

<style scoped>
html,body,.template{
    width: 100%;
}
    .template{
        padding: 5px
    }
    .title{
        font-size:16px;
        color:#26Aff3;
        padding: 10px 0; 
    }
    .content{
        width: 100%;
        overflow: hidden
    }
    .content img{
        width: 100%;
    }
</style>
