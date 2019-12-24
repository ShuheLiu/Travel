<template>
    <div class="bodyClass">
        <tra-menu :pageIndex="pageIndex" :type="type" :nickname="nickname"></tra-menu>
        <div style="position: fixed;margin-top: 50px;width: 120px;background-color: #462680;cursor:pointer;border-radius: 0 16px 16px 0" @click="toNewStrategy">
            <p style="color: white;line-height: 40px;float: right;margin-right: 12px">New Strategy</p>
        </div>

        <div>
            <search></search>
            <el-tabs style="width: 80%;margin-left: 10%;padding-bottom: 20px;min-height: 515px;margin-top: 10px" v-model="activeName">
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
    import API from '../../api';
    import Cookies from 'js-cookie';
    export default {
        name: "index",
        components: {Search, TraFooter, StrategyList, TraMenu},

        data(){
            return{
                pageIndex:'3',
                activeName: 'first',
                type:Cookies.get('type'),
                nickname:Cookies.get('nickname'),
                strategyList: [],
                strategyList2: [],
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

            getStrategyList2(){
                let data ={
                }
                API.getcollStraList(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.strategyList2=res;
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            },

            toNewStrategy(){
                if(this.identity!==''){
                    this.$router.push({path: `/strategy/new`})
                }else{
                    alert("请先登录");
                }
            }
        },

        mounted() {
            this.getStrategyList();
            this.getStrategyList2();
        },
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