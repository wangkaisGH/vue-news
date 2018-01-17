<template>
    <div class="template">
        <h3>提交评论</h3>
        <br>
        <textarea v-model="committex" name="" id="" cols="30" rows="5" maxlength="120" placeholder="请输入评论，最多120字"></textarea>
        <mt-button type="primary" size="large" @click="commit">发表</mt-button>
        <div class="comment-title">
            <h4>评论列表</h4>
            <span>{{comments.length}}条评论</span>
        </div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(items,index) in comments" :key="index">
					<a href="javascript:;">
						<div class="mui-media-body">
							{{items.content}}
							<p class='mui-ellipsis'>
                                <span>{{items.user_name}}</span>
                                <span>发表时间：{{items.add_time | dateFormet('YYYY-MM-DD HH:mm:ss')}}</span>
                            </p>
						</div>
					</a>
				</li>
			</ul>
             <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>


<script>
import Config from "../js/Config.js"
import {Toast} from "mint-ui"
    export default{
        data(){
                return{
                    committex:'',
                    pageindex:1,
                    comments:[]
                }
        },
        props:['artid'],
        created(){
            this.getComments(false);
        },
        methods:{
            getComments(ismore){
                this.$http.get(Config.SERVER+`/api/getcomments/${this.artid}?pageindex=${this.pageindex}`).then(data=>{
                    if(ismore){
                        this.comments.push.apply(this.comments,data.body.message)
                    }else{
                       this.comments = data.body.message; 
                    }  
                })
            },
            getMore(){
                this.pageindex++;
                console.log(this.pageindex)
                this.getComments(true)
            },
            commit(){
                if(this.committex.trim().length<=0){
                    return
                }
            this.$http.post(Config.SERVER+`/api/postcomment/${this.artid}`,{
                content:this.committex.trim()}).then(data=>{
                    if(data.body.message ==="评论提交成功"){
                        Toast({
                            message:"评论成功",
                            position:"middle",
                            duration:2000
                        })
                        this.pageindex = 1;
                        this.getComments(false);
                        this.committex=''
                    }else{
                        Toast({
                            message:"评论失败",
                            position:"middle",
                            duration:2000
                        })
                        this.committex=''
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .comment-title{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        align-items: center
    }
    .mui-media-body h4{
        font-size: 14px;
    }
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
</style>
