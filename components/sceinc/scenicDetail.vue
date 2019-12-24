<template>
    <el-card class="card">
        <!--<img src="../../assets/image/detailback1.png" style="width: 400px;position: absolute;pointer-events: none;">-->
        <div style="overflow: hidden;margin-left: 20px">
            <span><img src="../../assets/image/left.png" style="height: 40px;float: left"></span>
            <p style="margin: 3px 10px 0px 10px;float: left;font-size: 25px;font-weight: 700;">{{this.sname}}</p>
            <span><img src="../../assets/image/right.png" style="height: 40px;float: left"></span>
        </div>
        <div style="margin-top: 20px;margin-bottom: 10px;margin-left: 30px">
            <i class="el-icon-office-building"></i>
            所属公司：{{this.cname}}
        </div>
        <div style="margin-left: 30px;margin-bottom: 10px">
            <i class="el-icon-location-outline"></i>
            所在位置：{{this.province+' '+this.city}}
        </div>
        <div style="margin-left: 30px;margin-bottom: 20px">
            <i class="el-icon-phone-outline"></i>
            联系电话：{{this.phone}}
        </div>
        <div style="margin-left: 30px;margin-right: 30px">
            <p style="font-size: 20px;color: green">景区详情：</p>
            <p style="word-break:break-word;line-height: 20px;font-size: 18px">{{this.introduction}}</p>
        </div>
        <el-button style="float: right;margin-top: 20px;margin-right: 30px;background-color: #accfff;color: black" @click="ticketListVisible=true">我要购票</el-button>

        <el-dialog title="票种列表" :visible.sync="ticketListVisible">
            <div style="display: table; width: 100%; padding-left: 10px; padding-top: 20px; padding-bottom:15px; padding-right: 10px">
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
                    <div class="tableTitle">
                    </div>
                </div>
                <div :class="{'tablerow':true, 'grayLine': (index % 2 === 0)}" style="display: table-row;" v-for="(item,index) in ticketList" :key="item.index">
                    <div class="tableCell">
                        {{index+1}}
                    </div>
                    <div class="tableCell">
                        {{item.tname}}
                    </div>
                    <div class="tableCell">
                        {{item.scenicinfo}}
                    </div>
                    <div class="tableCell">
                        {{item.price}}
                    </div>
                    <div class="tableCell" style="max-width: 50px">
                        <el-button size="mini" @click="sureBuying(item)">购买</el-button>
                    </div>
                </div>
            </div>
        </el-dialog>

        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>确定购买{{this.ticketName}}吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="buyTicket">确 定</el-button>
            </span>
        </el-dialog>

    </el-card>
</template>

<script>
    import API from '../../api'
    export default {
        name: "scenicDetail",
        props:{
            sid:'',
        },

        data(){
            return{
                ticketListVisible:false,
                sureBuyingVisible:false,
                ticketName:'',
                sname:'故宫',
                cname:'所属公司',
                province:'北京',
                city:'北京',
                phone:'12345678910',
                introduction:"xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx",
                ticketList:[{
                    tname:'门票1',
                    scenicinfo:'故宫',
                    price:50,
                },{
                    tname:'门票2',
                    scenicinfo:'故宫 颐和园',
                    price:100,
                },{
                    tname:'门票3',
                    scenicinfo:'故宫 颐和园 景山',
                    price:150,
                },{
                    tname:'门票3',
                    scenicinfo:'故宫 颐和园 景山',
                    price:150,
                },],
            }
        },

        methods:{
            getScenicDetail(){
                let data=this.sid;

                API.getSceDetail(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.sname=res.sname;
                    this.cname=res.cname;
                    this.province=res.province;
                    this.city=res.city;
                    this.phone=res.phone;
                    this.introduction=res.introduction;
                    //console.log("res="+res);
                    //this.strategyList=res.strategyList;
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })

            },

            sureBuying(item){
                this.sureBuyingVisible=true;
                this.ticketName=item.tname;
            },

            buyTicket(){

            },
        },

        mounted() {
            //this.getScenicDetail();
        }
    }
</script>

<style scoped>

    .card{
        background-image: url("../../assets/image/detailback33.png");
        background-size: 350px;
        background-repeat: no-repeat;
        background-position: center;
        background-position-x: 320px;
        min-height: 560px;
        padding: 10px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
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