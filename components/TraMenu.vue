<template>
    <div class="menuClass">
        <img src="../assets/image/logo.png" style="float: left;height: 55px;margin-top: 12px;margin-left: 20px">
        <p style="float: left;margin-left: 10px;margin-top: 25px;font-size: 20px;text-align: center">景点信息系统</p>
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 text-color="#444555"
                 active-text-color="#1f6fb5"
                 @select="handleSelect">
            <el-menu-item index="1"><i class="el-icon-s-home"></i>首页</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-s-ticket"></i>在线购票</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-s-management"></i> 旅游攻略</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-s-promotion"></i> 跟团游</el-menu-item>
            <el-menu-item index="5"><i class="el-icon-question"></i> FAQ</el-menu-item>
            <el-menu-item index="6"><i class="el-icon-info"></i> 关于我们</el-menu-item>
            <!--<el-menu-item index="7"><i class="el-icon-user-solid"></i>个人中心</el-menu-item>-->
        </el-menu>

        <p v-if="type==='0'" style="float: right;margin-top:-47px;margin-right:35px;font-size: 15px;text-align: center">登录/注册</p>

        <div v-if="type==='1'">
            <p v-if="type==='1'" style="float: right;margin-top:-47px;margin-right:35px;font-size: 15px;text-align: center">欢迎您！{{this.name}}</p>

        </div>

    </div>
</template>

<script>
    export default {
        name: "TraMenu",

        data(){
            return{
                type:'1',
                name:"Pika",
            }
        }
    }
</script>

<style scoped>

    .menuClass{
        display: flow;
        box-shadow: 0 0 5px rgba(158,158,158,0.7);
        background: -webkit-linear-gradient(bottom,rgb(210,241,255),rgb(245,250,255),white) no-repeat;
    }

    .el-menu-demo{
        padding-top: 10px;
        padding-bottom: 5px;
        margin-left: 300px;
        background: unset;
        width: 800px;
    }
</style>