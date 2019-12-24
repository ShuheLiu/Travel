<template>
    <el-card class="card">
        <h2 style="margin: 3px 10px 0px 10px;font-size: 25px;font-weight: 700;">{{this.tripName}}</h2>
        <div style="margin-top: 20px;margin-left: 15px">
            <i class="el-icon-date"></i>
            行程时间:{{this.startdate}} - {{this.enddate}}
        </div>
        <div style="margin-top: 10px;margin-bottom: 10px;margin-left: 15px">
            <i class="el-icon-office-building"></i>
            所属旅行社：{{this.traname}}
        </div>
        <div style="margin-left: 15px;margin-bottom: 20px">
            <i class="el-icon-phone-outline"></i>
            旅行社联系电话：{{this.phone}}
        </div>
        <div style="margin-left: 15px;margin-right: 30px">
            <p style="font-size: 20px;color: green">行程详情：</p>
            <p style="word-break:break-word;line-height: 20px;font-size: 15px">{{this.route}}</p>
        </div>
        <div style="margin-left: 15px;margin-right: 30px;margin-top: 20px">
            <p style="font-size: 20px;color: green">旅行社详情：</p>
            <p style="word-break:break-word;line-height: 20px;font-size: 15px">{{this.intro}}</p>
        </div>
        <el-button style="float: right;margin-top: 30px;margin-right: 30px;background-color: #accfff;color: black" @click="attendTrip">参加行程</el-button>
    </el-card>
</template>

<script>
    import API from '../../api'
    import Cookies from 'js-cookie'
    export default {
        name: "tripDetail",

        props:{
            tripid:'',
        },

        data(){
            return{
                tripName:'北京环游',
                route:'一个环游1233的旅行',
                startdate:'1231-11-11',
                enddate:'5678-11-12',
                traname:'携程',
                phone:'1233444444',
                intro:'opppppod',
            }
        },

        methods:{
            getTrDetail(){
                let data={
                    tripid:this.tripid,
                }

                API.getTripDetail(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.tripName=res.tripName;
                    this.route=res.route;
                    this.startdate=res.startdate;
                    this.enddate=res.enddate;
                    this.traname=res.traname;
                    this.phone=res.phone;
                    this.intro=res.introduction;
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            },

            attendTrip(){
                let data={
                    tripid:this.tripid,
                    identity:Cookies.get('identity'),
                }

                API.attendThisTrip(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert("加入成功");
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
            //this.getTrDetail();
        }
    }
</script>

<style scoped>

    .card{
        background-image: url("../../assets/image/detailback12.png");
        background-size: 350px;
        background-repeat: no-repeat;
        background-position: center;
        background-position-x: 320px;
        min-height: 550px;
        padding: 10px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
</style>