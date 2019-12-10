<template>
    <el-card class="card">
        <h1 style="text-align: center">{{Msg.title}}</h1>
        <div style="width: 30%;margin-left: 35%;margin-top: 10px;margin-bottom: 10px">
                <span>
                    <i class="el-icon-s-custom"></i>
                </span>
                作者：
                <span style="color: #dd6161">{{Msg.author}}</span>
                <span style="margin-left: 50px">
                    <i class="el-icon-date"></i>
                </span>
                发布时间:
                <span style="color: #7F828B">{{Msg.time}}</span>
        </div>
        <div style="text-align: center">
            景区关键词：{{Msg.keyword}}
        </div>
        <div style="width: 80%;margin-left: 50px">
            攻略详情：
            <p style="word-break:break-word;">{{Msg.content}}</p>
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
                Msg:{
                    title:'攻略',
                    author:'张三',
                    time:'1111-11-11',
                    keyword:'a b c',
                    content:'xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx',
                },
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
            }
        },

    }
</script>

<style scoped>

    .card{
        width: 80%;
        margin-left: 10%;
        min-height: 585px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
</style>