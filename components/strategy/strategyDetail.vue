<template>
    <el-card class="card">
            <el-button style="float: right;background: #ffbd4a" v-if="this.isCollected==='0'" @click="collect">
                收藏<i class="el-icon-star-off" style="margin-left: 5px"></i>
            </el-button>
            <el-button style="float: right;background: #eeeeee" v-if="this.isCollected==='1'" @click="uncollect">
                已收藏<i class="el-icon-star-on" style="margin-left: 5px"></i>
            </el-button>

        <h1 style="margin-left: 30px">{{this.title}}</h1>
        <div style="margin-top: 20px;margin-bottom: 20px;margin-left: 30px">
                <span style="color: #dd6161">
                    <i class="el-icon-s-custom"></i>作者：
                </span>
                {{this.author}}
                <span style="margin-left: 50px;color: #1f6fb5">
                    <i class="el-icon-date"></i>发布时间:
                </span>

                <span style="color: #7F828B">{{this.time}}</span>
        </div>
        <div style="margin-left: 30px;margin-bottom: 20px">
            景区关键词：{{this.keyword}}
        </div>
        <div style="margin-left: 30px;margin-right: 30px">
            <p style="font-size: 20px;color: green">攻略详情：</p>
            <p style="word-break:break-word;line-height: 20px;font-size: 18px">{{this.content}}</p>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "strategyDetail",
        props:{
            strid:'',
        },

        data(){
            return{
                identity:'000',
                /*identity: Cookies.get('identity'),*/
                isCollected:'0',
                title:'北京十日自由行',
                author:'张三',
                time:'1111-11-11',
                keyword:'a b c',
                content:"xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx",

            }
        },

        methods:{
            getStrategyDetail(){
                let data ={
                    identity: this.identity,
                    strid : this.strid
                }
                API.getStraDetail(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            },

            collect(){
                /*let data ={
                    identity: this.identity,
                    strid : this.strid
                }
                API.getStraDetail(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })*/

                this.isCollected='1';
            },

            uncollect(){

                this.isCollected='0';
            }

        },

    }
</script>

<style scoped>

    .card{
        width: 60%;
        margin-left: 10%;
        min-height: 585px;
        padding: 10px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
</style>