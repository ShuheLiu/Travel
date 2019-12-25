<template>
    <div class="bodyClass">
        <tra-menu :pageIndex="pageIndex" :type="type" :nickname="nickname"></tra-menu>
        <el-card style="width: 80%;margin-left: 10%;margin-bottom: 20px;margin-top: 10px;padding: 0 10px 0 10px">
            <el-tabs style="padding-bottom: 20px;min-height: 505px;margin-top: 10px" v-model="activeName">
                <el-tab-pane label="我的订票" name="first">
                    <div style="display: table; width: 95%; padding-left: 25px; padding-top: 10px; padding-bottom:15px; padding-right: 10px;">
                        <div style="display: table-row">
                            <div class="tableTitle">
                            </div>
                            <div class="tableTitle">
                                票种名称
                            </div>
                            <div class="tableTitle">
                                包含景点
                            </div>
                            <div class="tableTitle">
                                价格
                            </div>
                        </div>
                        <div :class="{'tablerow':true, 'grayLine': (index % 2 === 0)}" style="display: table-row;" v-for="(item,index) in ticketList" :key="item.index">
                            <div class="tableCell">
                                {{index+1}}
                            </div>
                            <div class="tableCell">
                                {{item.name}}
                            </div>
                            <div class="tableCell">
                                {{item.scenicinfo}}
                            </div>
                            <div class="tableCell">
                                {{item.price}}
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="我的旅程" name="second">
                    <div style="display: table; width: 95%; padding-left: 25px; padding-top: 10px; padding-bottom:15px; padding-right: 10px;">
                        <div style="display: table-row">
                            <div class="tableTitle" style="width: 40px">
                            </div>
                            <div class="tableTitle">
                                行程名称
                            </div>
                            <div class="tableTitle" style="width: 300px">
                                路线
                            </div>
                            <div class="tableTitle">
                                起始时间
                            </div>
                            <div class="tableTitle">
                                结束时间
                            </div>
                            <div class="tableTitle" style="width: 80px">
                            </div>
                            <div class="tableTitle" style="width: 80px">
                            </div>
                        </div>
                        <div :class="{'tablerow':true, 'grayLine': (index % 2 === 0)}" style="display: table-row;" v-for="(item,index) in tripList" :key="item.index">
                            <div class="tableCell">
                                {{index+1}}
                            </div>
                            <div class="tableCell">
                                {{item.name}}
                            </div>
                            <div class="tableCell">
                                {{item.route}}
                            </div>
                            <div class="tableCell">
                                {{item.starttime}}
                            </div>
                            <div class="tableCell">
                                {{item.endtime}}
                            </div>
                            <div class="tableCell">
                                <el-button type="primary" size="mini">详情</el-button>
                            </div>
                            <div class="tableCell">
                                <el-button type="primary" size="mini">评论</el-button>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-card>

        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    import API from '../../api';
    import Cookies from 'js-cookie';
    export default {
        name: "myOrder",
        components: {TraFooter, TraMenu},

        data(){
            return{
                type:Cookies.get('type'),
                nickname:Cookies.get('nickname'),
                activeName: 'first',
                ticketList:[],
                tripList:[{
                    name:'1111',
                    starttime:'112345',
                    endtime:'123455',
                }],
            }
        },

        methods:{
            getTicketList(){
                let data={
                    account:Cookies.get('account'),
                    pwd:Cookies.get('pwd'),
                }
                API.getMyTicket(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.ticketList=res;
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            },

            getMyTrip(){
                let data={
                    account:Cookies.get('account'),
                    pwd:Cookies.get('pwd'),
                }
                API.getMyTr(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.tripList=res;
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
            this.getTicketList();
            this.getMyTrip();
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

    .tableTitle{
        display: table-cell;
        font-size: 15px;
        padding: 5px;
        font-family: 黑体;
        font-weight: bold;

    }
    .tableCell{
        display: table-cell;
        font-size: 15px;
        padding: 5px;
    }


    .grayLine{
        background-color: #e4efff;
    }
</style>