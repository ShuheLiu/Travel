<template>
    <el-card>
        <h3 style="text-align: center">{{Msg.title}}</h3>
        <div style="display: flow;width: 40%;margin-left: 30%">
            <p style="float: left">作者：{{Msg.author}}</p>
            <p style="float: right">发布时间：{{Msg.time}}</p>
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
                    content:'xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx',
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

</style>