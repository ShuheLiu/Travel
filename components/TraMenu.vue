<template>
    <div class="menuClass">
        <img src="../assets/image/logo.png" style="float: left;height: 55px;margin-top: 12px;margin-left: 20px">
        <p style="float: left;margin-left: 10px;margin-top: 25px;font-size: 20px;text-align: center">景点信息系统</p>
        <el-menu :default-active="pageIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 text-color="#444555"
                 active-text-color="#1f6fb5"
                 @select="handleSelect">
            <el-menu-item index="1" @click="toHomePage"><i class="el-icon-s-home"></i>首页</el-menu-item>
            <el-menu-item index="2" @click="toScenic"><i class="el-icon-s-ticket"></i>景区信息</el-menu-item>
            <el-menu-item index="3" @click="toStrategy"><i class="el-icon-s-management"></i> 旅游攻略</el-menu-item>
            <el-menu-item index="4" @click="toTrip"><i class="el-icon-s-promotion"></i> 跟团游</el-menu-item>
            <el-menu-item index="5" @click="toFAQ"><i class="el-icon-question"></i> FAQ</el-menu-item>
            <el-menu-item index="6" @click="toAboutMe"><i class="el-icon-info"></i> 关于我们</el-menu-item>
            <!--<el-menu-item index="7"><i class="el-icon-user-solid"></i>个人中心</el-menu-item>-->
        </el-menu>

        <div v-if="type==='0'" style="float: right;margin-top:-47px;margin-right:35px;font-size: 15px;text-align: center">
            <el-button @click="centerDialogVisible = true">登录/注册</el-button>
            <el-dialog
                title="登录"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
             <span slot="footer" class="dialog-footer">
                 用户名：
            <el-input
              placeholder="请输入手机号或邮箱"
              v-model="input"
              clearable>
              </el-input>
             密码：
             <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
             <el-button @click="centerDialogVisible = false">取 消</el-button>
             <el-button type="primary" @click="login">确 定</el-button>
            </span>
              </el-dialog>
        </div>

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
                    <el-menu-item index="1-2">我的收藏</el-menu-item>
                    <el-menu-item index="1-3">我的订单</el-menu-item>
                    <el-menu-item index="1-4" @click="dialogVisible = true">退出</el-menu-item>
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
                <el-button type="primary" @click="logout">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: "TraMenu",

        props:{
            pageIndex: {
                type: String
            }
        },

        data(){
            return{
                type:'0',
                name:"Pika",
                dialogVisible:false,
                activeIndex:'',
            }
        },

        methods:{
            handleSelect(){
            },

            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },

            login(){
                this.centerDialogVisible = false;
            },

            logout(){
                this.dialogVisible=false;
                this.$router.push({path: `/`});
            },

            toHomePage(){
                this.$router.push({path: `/`});
            },

            toScenic(){
                this.$router.push({path: `/scenic`});
            },

            toStrategy(){
                this.$router.push({path: `/strategy`});
            },

            toTrip(){
                this.$router.push({path: `/trip`});
            },

            toFAQ(){
                this.$router.push({path: `/FAQ`});
            },

            toAboutMe(){
                this.$router.push({path: `/aboutMe`});
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
        z-index: 999;
    }

    .el-menu-demo2{
        padding-top: 10px;
        padding-bottom: 5px;
        margin-left: 1350px;
        background: unset;
        width: 150px;
        z-index: 999;
    }
</style>