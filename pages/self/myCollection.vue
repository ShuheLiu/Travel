<template>
    <div class="bodyClass">
        <tra-menu :pageIndex="pageIndex" :type="type" :nickname="nickname"></tra-menu>
        <el-card style="width: 80%;margin-left: 10%;margin-bottom: 20px;min-height: 555px;margin-top: 10px">
            <p style="margin-top: 10px;margin-bottom: 20px;font-size: 25px">我的收藏</p>
            <strategy-list :strategyList="strategyList"></strategy-list>
        </el-card>

        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import StrategyList from "../../components/strategy/strategyList";
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    import API from "../../api"
    import Cookies from 'js-cookie'
    export default {
        name: "myCollection",
        components: {TraFooter, TraMenu, StrategyList},

        data(){
            return{
                pageIndex:'',
                type:Cookies.get('type'),
                nickname:Cookies.get('nickname'),
                strategyList:[{
                    strid:'0010',
                    title:'攻略a',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2018-11-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },{
                    strid:'0011',
                    title:'攻略b',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2016-10-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },{
                    strid:'0012',
                    title:'攻略c',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2019-10-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },],
            }
        },

        methods:{
            getMyStrategyList(){
                let data ={
                    account:Cookies.get('account'),
                    pwd:Cookies.get('pwd'),
                }
                API.getMyCollStraList(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.strategyList=res;
                    console.log(this.strategyList);
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
            this.getMyStrategyList();
        }


    }
</script>

<style scoped>

    .bodyClass{
        display: flow;
        width: 100%;
        background: rgba(244, 247, 252, 0.82);
        /*background: -webkit-linear-gradient(bottom,rgb(250,255,235),#fffef3,white) no-repeat;*/
    }
</style>