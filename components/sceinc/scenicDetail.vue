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
        <el-button style="float: right;margin-top: 20px;margin-right: 30px">我要购票</el-button>

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
                sname:'故宫',
                cname:'所属公司',
                province:'北京',
                city:'北京',
                phone:'12345678910',
                introduction:"xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx,xxxxxx,xxxxxxxxxxxx",
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
</style>