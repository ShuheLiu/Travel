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

        <div v-if="type==='1'" style="float: left;margin-top:-75px;">
            <!--<p v-if="type==='1'" style="float: right;margin-right:35px;font-size: 15px;text-align: center">欢迎您！{{this.name}}</p>-->
            <el-menu :default-active="activeIndex"
                     class="el-menu-demo2"
                     mode="horizontal"
                     @select="handleSelect"
                     text-color="#444555">
                <el-submenu index="1">
                    <template slot="title">欢迎您！{{this.name}}</template>
                    <el-menu-item index="1-1">个人中心</el-menu-item>
                    <el-menu-item index="1-2" @click="dialogVisible = true">退出</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>

        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>确定退出登录吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false; type='0'">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: "TraMenu",

        data(){
            return{
                type:'1',
                name:"Pika",
                dialogVisible:false,
            }
        },

        methods:{
            logout(){
                this.dialogVisible=true;
            },
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
        width: 900px;
    }

    .el-menu-demo2{
        padding-top: 10px;
        padding-bottom: 5px;
        margin-left: 1350px;
        background: unset;
        width: 150px;
    }
</style>