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
                                行程时间
                            </div>
                            <div class="tableTitle">
                                参加时间
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
                                {{item.starttime}} - {{item.endtime}}
                            </div>
                            <div class="tableCell">
                                {{item.jointime}}
                            </div>
                            <div class="tableCell">
                                <el-button type="primary" size="mini" @click="toDetail(item)">详情</el-button>
                            </div>
                            <div class="tableCell" v-if="item.content===''">
                                <el-button type="primary" size="mini" @click="writeTripComment">评论</el-button>
                            </div>
                            <div class="tableCell" v-if="item.content!==''">
                                <el-button type="primary" size="mini">修改评论</el-button>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-card>

        <!--<el-dialog title="评论" :visible.sync="writeTripComment">
            <el-form :model="form">
                <el-form-item label="撰写评论（450字以内）">
                    <el-input type="textarea" v-model="newcontent"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="writeComment = false">取 消</el-button>
                <el-button v-if="!hasComm" type="primary" @click="submitComment">提交</el-button>
                <el-button v-if="hasComm" type="primary" @click="changeComment">修改</el-button>
            </div>
        </el-dialog>-->

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
                writeTripComment:false,
                ticketList:[],
                tripList:[{
                    tripid:'1',
                    name:'1111',
                    route:'xxx-xxxx-xxx',
                    starttime:'112345',
                    endtime:'123455',
                    jointime:'11-1123-11',
                    content:'',
                },{
                    tripid:'1',
                    name:'1111',
                    route:'xxx-xxxx-xxx',
                    starttime:'112345',
                    endtime:'123455',
                    jointime:'11-1123-11',
                    content:'hello',
                },],
                newcontent:'',
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

            toDetail(item){
                this.$router.push({path: `/trip/`+item.tripid+`/detail`})
            }
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
        text-align: center;
    }
    .tableCell{
        display: table-cell;
        font-size: 15px;
        padding: 5px;
        text-align: center;
    }


    .grayLine{
        background-color: #e4efff;
    }
</style>