<template>
    <el-card class="card">
        <el-button style="float: right;background: #ffbd4a" v-if="this.isCollected==='0'" @click="collect">
            收藏<i class="el-icon-star-off" style="margin-left: 5px"></i>
        </el-button>
        <el-button style="float: right;background: #eeeeee" v-if="this.isCollected==='1'" @click="uncollect">
            已收藏<i class="el-icon-star-on" style="margin-left: 5px"></i>
        </el-button>

        <h1 style="margin-left: 15px">{{this.straDetail.title}}</h1>
        <div style="margin-top: 20px;margin-bottom: 20px;margin-left: 15px">
            <span style="color: #dd6161">
                <i class="el-icon-s-custom"></i>作者：
            </span>
            {{this.straDetail.nickname}}
            <span style="margin-left: 50px;color: #1f6fb5">
                <i class="el-icon-date"></i>发布时间:
                </span>
            <span style="color: #7F828B">{{this.straDetail.time}}</span>
        </div>
        <div style="margin-left: 15px;margin-bottom: 20px">
            景区关键词：{{this.straDetail.keyword}}
        </div>
        <div style="margin-left: 15px;margin-right: 15px">
            <p style="font-size: 20px;color: green">攻略详情：</p>
            <p style="word-break:break-word;line-height: 20px;font-size: 15px">{{this.straDetail.content}}</p>
        </div>

        <div style="margin-top: 40px">
            <span style="color: #dd6161;float: right;margin-top: 5px;margin-left: 8px">{{this.straDetail.likenum}}</span>
            <el-button size="small" style="background-color: #dd6161;color: white;float: right;" circle @click="likeStra">赞</el-button>

        </div>

    </el-card>
</template>

<script>
    import API from '../../api'
    import Cookies from 'js-cookie'
    export default {
        name: "strategyDetail",
        props:{
            strid:Number,
        },

        data(){
            return{
                type:Cookies.get('type'),
                isCollected:'0',
                straDetail:[],
            }
        },

        methods:{
            getStrategyDetail(){
                let data={
                    strid:this.strid,
                }

                API.getStraDetail(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.straDetail=res[0];
                    console.log(res)
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })

                if(this.type==='1'){
                    let data2={
                        account:Cookies.get('account'),
                        pwd:Cookies.get('pwd'),
                        strid:this.strid,
                    }
                    API.collState(data2).then(res => {
                        if(res.code){
                            alert(res.message);
                            return;
                        }

                        if(res===true){
                            this.isCollected='1'
                        }else{
                            this.isCollected='0'
                        }
                    }).catch(msg => {
                        if(res.code){
                            alert(res.message);
                            return;
                        }
                        alert(msg)
                    })
                }
            },

            collect(){
                if(this.type==='1'){
                    let data ={
                        account:Cookies.get('account'),
                        pwd:Cookies.get('pwd'),
                        strid : this.strid
                    }
                    API.collStra(data).then(res => {
                        if(res.code){
                            alert(res.message);
                            return;
                        }
                        alert(res)
                    }).catch(msg => {
                        if(res.code){
                            alert(res.message);
                            return;
                        }
                        alert(msg)
                    })
                    this.isCollected='1';
                }else{
                    alert("请先登录")
                }
            },

            uncollect(){
                let data ={
                    account:Cookies.get('account'),
                    pwd:Cookies.get('pwd'),
                    strid : this.strid
                }
                API.uncollStra(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(res);
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                });
                this.isCollected='0';
            },

            likeStra(){
                let data ={
                    account:Cookies.get('account'),
                    pwd:Cookies.get('pwd'),
                    strid : this.strid
                }

                API.like(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.getStrategyDetail();
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                });
            }

        },

        mounted() {
            this.getStrategyDetail();
        }

    }
</script>

<style scoped>

    .card{
        background-image: url("../../assets/image/detailback22.png");
        background-size: 350px;
        background-repeat: no-repeat;
        background-position: center;
        background-position-x: 300px;
        min-height: 585px;
        padding: 10px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
</style>