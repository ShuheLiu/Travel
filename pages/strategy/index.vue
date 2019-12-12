<template>
    <div class="bodyClass">
        <tra-menu :pageIndex="pageIndex"></tra-menu>
        <div>
            <search></search>
            <el-tabs style="width: 80%;margin-left: 10%;padding-bottom: 20px;min-height: 575px;margin-top: 10px" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="按时间" name="first">
                    <strategy-list :strategyList="strategyList"></strategy-list>
                </el-tab-pane>
                <el-tab-pane label="按收藏" name="second">
                    <strategy-list :strategyList="strategyList2"></strategy-list>
                </el-tab-pane>
            </el-tabs>
        </div>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import StrategyList from "../../components/strategy/strategyList";
    import TraFooter from "../../components/TraFooter";
    import Search from "../../components/search";
    export default {
        name: "index",
        components: {Search, TraFooter, StrategyList, TraMenu},

        data(){
            return{
                pageIndex:'3',
                activeName: 'first',
                strategyList: [{
                    strid:'0001',
                    title:'攻略1',
                    content:'xxxxxx,xxxxxxx,xxxxxxx,xxxxxx,xxxxxxx,xxxxxxx,xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2019-11-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },{
                    strid:'0002',
                    title:'攻略2',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2018-10-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },{
                    strid:'0003',
                    title:'攻略3',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2017-10-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },{
                    strid:'0004',
                    title:'攻略4',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2016-10-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },{
                    strid:'0005',
                    title:'攻略5',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2013-10-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },{
                    strid:'0006',
                    title:'攻略6',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2015-10-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },],

                strategyList2: [{
                    title:'攻略a',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2018-11-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },{
                    title:'攻略b',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2016-10-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },{
                    title:'攻略c',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2019-10-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },{
                    title:'攻略d',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2013-10-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },{
                    title:'攻略e',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2013-10-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },{
                    title:'攻略f',
                    content:'xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2013-10-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                },],
            }
        },

        methods:{
            getStrategyList(){
                let data ={
                }
                API.getStraList(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    console.log("res="+res);
                    //this.strategyList=res.strategyList;
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            },

            getStrategyList2(){

            },
        },

        mounted() {
            this.getStrategyList();
        },
    }
</script>

<style scoped>

    .bodyClass{
        display: flow;
        width: 100%;
        /*background: -webkit-linear-gradient(bottom,rgb(250,255,235),#fffef3,white) no-repeat;*/
    }
</style>