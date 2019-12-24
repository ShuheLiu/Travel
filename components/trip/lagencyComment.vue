<template>
    <div>
        <el-card>
            <p style="margin-left: 10px;margin-bottom: 15px;font-size: 35px;font-weight: 600;float: left">旅行社评论</p>
            <el-row style="pointer-events: none;">
                <el-col style="margin-bottom: 10px"  v-if="TcommentList.length > 0" v-for="(item) in TcommentList" :key="item.id">
                    <el-card :body-style="{ padding: '10px'}">
                        <div style="display: flow;margin-bottom: 10px;padding: 10px 10px 10px 5px">
                            <i class="el-icon-s-custom" style="margin-left: 10px;margin-right: 5px;"></i>{{item.nickname}}
                            <!--<i class="el-icon-s-promotion" style="margin-left: 15px;margin-right: 5px;"></i>行程名称：{{item.tranname}}-->
                            <i class="el-icon-date" style="margin-left: 15px;margin-right: 5px;"></i>旅行时间：{{item.jointime}}
                            <p style="margin-left: 7px;margin-top: 5px;">{{item.content}}</p>
                            <div class="time">
                                评论时间：{{item.commenttime}}
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    import API from '../../api'
    import Cookies from 'js-cookie'
    export default {
        name: "lagencyComment",

        props:{
            tripid:Number,
        },

        data(){
            return{
                TcommentList:[],
            }
        },

        methods:{
            setLageCommentList(){
                let data ={
                    tripid:this.tripid,
                }
                API.getTraCommentList(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.TcommentList=res;
                    console.log(this.TcommentList)
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            },
        },

        mounted() {
            this.setLageCommentList();
        }
    }
</script>

<style scoped>

    .time {
        font-size: 13px;
        color: #999;
        float: right;
    }
</style>