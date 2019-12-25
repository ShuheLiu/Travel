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

        <div v-if="type==='0'" style="float: right;margin-top:-55px;margin-right:35px;font-size: 15px;text-align: center;">
            <el-button type="text" @click="centerDialogVisible = true">登录/注册</el-button>
            <el-dialog
                title="登录"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
                <el-dialog
                    width="30%"
                    title="注册"
                    :visible.sync="innerVisible"
                    center
                    append-to-body>
                <el-form :model="form">
                    <el-form-item label="账号">
                        <el-input placeholder="请输入账号" v-model="account" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" >
                        <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
                    </el-form-item>
                    <el-form-item label="昵称" >
                        <el-input placeholder="请输入昵称/名称" v-model="account" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="用户类型" >
                        <el-radio v-model="userType" label="1">游客</el-radio>
                        <el-radio v-model="userType" label="2">旅行社</el-radio>
                        <el-radio v-model="userType" label="3">承包公司</el-radio>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="innerVisible = false">取 消</el-button>
                    <el-button type="primary" @click="sign" style="margin-left: 100px">确 定</el-button>
                </div>
            </el-dialog>
                <el-dialog
                        width="30%"
                        title="找回密码"
                        :visible.sync="innerVisible2"
                        append-to-body
                        center>
                    <el-form :model="form">
                        <el-form-item label="账号">
                            <el-input placeholder="请输入手机号或邮箱" v-model="account" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="innerVisible2 = false">取 消</el-button>
                        <el-button type="primary" @click="innerVisible2 = false" style="margin-left: 100px" >确 定</el-button>
                    </div>
                </el-dialog>
                <el-form :model="form">
                    <el-form-item label="账号" >
                        <el-input placeholder="请输入账号" v-model="account" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" >
                        <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
                    </el-form-item>
                    <el-form-item label="用户类型" >
                        <el-radio v-model="userType" label="1">游客</el-radio>
                        <el-radio v-model="userType" label="2">旅行社</el-radio>
                        <el-radio v-model="userType" label="3">承包公司</el-radio>
                    </el-form-item>
                </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button type="text" @click="innerVisible2 = true">忘记密码</el-button>
                        <el-button type="text" @click="innerVisible = true" style="margin-left: 150px">注册</el-button><br>

                        <el-button @click="centerDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="login" style="margin-left: 100px" >确 定</el-button>
                    </div>
            </el-dialog>
        </div>

        <div v-if="type==='1'" style="float: left;margin-top:-75px;margin-left: -60px">
            <!--<p v-if="type==='1'" style="float: right;margin-right:35px;font-size: 15px;text-align: center">欢迎您！{{this.name}}</p>-->
            <el-menu :default-active="activeIndex"
                     class="el-menu-demo2"
                     mode="horizontal"
                     @select="handleSelect"
                     text-color="#444555">
                <el-submenu index="1">
                    <template slot="title">欢迎您！{{this.nickname}}</template>
                    <el-menu-item index="1-1" @click="toMySelf">个人中心</el-menu-item>
                    <el-menu-item index="1-2" @click="toMyCollect">我的收藏</el-menu-item>
                    <el-menu-item index="1-3" @click="toMyOrder">我的订单</el-menu-item>
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
    import API from '../api'
    import Cookies from 'js-cookie'
    import {AxiosError as res} from "axios";
    export default {
        name: "TraMenu",

        props:{
            pageIndex: {
                type: String
            },
            type:{
                type: String,
                default:'0'
            },
            nickname:{
                type: String,
            }
        },

        data(){
            return{
                userType:'0',
                dialogVisible:false,
                activeIndex:'',
                visible:false,
                centerDialogVisible:false,
                innerVisible:false,
                innerVisible2:false,
                account:'',
                pwd:'',
            }
        },

        methods:{
            identityList:[],
            handleSelect(){
            },

            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },


            sign(){
                let data = {
                    account: this.account,
                    pwd: this.pwd,
                    nickname: this.nickname,
                }
                if(this.userType === '1'){
                    API.setVisitorAccount(data).then(res => {
                        alert(res)
                    }).catch(msg => {
                        console.log(msg)
                        alert('系统错误，请稍后再试!')
                    })
                }
                if(this.userType === '2'){
                    API.setAgencyAccount(data).then(res => {
                        alert(res)
                    }).catch(msg => {
                        console.log(msg)
                        alert('系统错误，请稍后再试!')
                    })
                    this.$router.push({path: `/agency`});
                }
                if(this.userType === '3'){
                    API.setCompanyAccount(data).then(res => {
                        alert(res)
                    }).catch(msg => {
                        console.log(msg)
                        alert('系统错误，请稍后再试!')
                    })
                    this.$router.push({path: `/company`});
                }

                this.innerVisible = false;
                this.centerDialogVisible = false;
            },

            login(){

                let data = {
                    account: this.account,
                    pwd: this.pwd,
                }
                if(this.userType === '1'){
                    API.isVisitorSuccess(data).then(res => {
                        if(res.code){
                            alert(res.message);
                            return;
                        }
                        Cookies.set('account', this.account);
                        Cookies.set('pwd', this.pwd);
                        this.type=1;
                        Cookies.set('type', this.type);
                        let data2={
                            account:this.account,
                            pwd:this.pwd,
                        }
                        API.getMyMessage(data2).then(res => {
                            if(res.code){
                                alert(res.message);
                                return;
                            }
                            Cookies.set('nickname', res[0].nickname);
                        }).catch(msg => {
                            if(res.code){
                                alert(res.message);
                                return;
                            }
                            alert(msg)
                        })
                        alert(res);
                    }).catch(msg => {
                        if(res.code){
                            alert(res.message);
                            return;
                        }
                        alert(msg)
                    });
                    this.centerDialogVisible = false;
                } else if (this.userType === '2'){
                    API.isAgencySuccess(data).then(res => {
                        if(res.code){
                            alert(res.message);
                            return;
                        }
                        Cookies.set('account', this.account);
                        Cookies.set('pwd', this.pwd);
                        this.type='2';
                        Cookies.set('type', this.type);
                        alert(res);
                    }).catch(msg => {
                        if(res.code){
                            alert(res.message);
                            return;
                        }
                        alert(msg)
                    });
                    this.centerDialogVisible = false;
                    this.$router.push({path: `/agency`});
                }else if (this.userType === '3') {
                    API.isCompanySuccess(data).then(res => {
                        if (res.code) {
                            alert(res.message);
                            return;
                        }
                        Cookies.set('account', this.account);
                        Cookies.set('pwd', this.pwd);
                        this.type = '3';
                        Cookies.set('type', this.type);
                        alert(res);
                    }).catch(msg => {
                        if (res.code) {
                            alert(res.message);
                            return;
                        }
                        alert(msg)
                    });
                    this.centerDialogVisible = false;
                    this.$router.push({path: `/company`});

                }
                this.centerDialogVisible = false;
            },

            logout(){
                this.type='0';
                Cookies.set('type', this.type);
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

            toMyCollect(){
                this.$router.push({path: `/self/myCollection`});
            },

            toMySelf(){
                this.$router.push({path: `/self/selfSetting`});
            },

            toMyOrder(){
                this.$router.push({path: `/self/myOrder`});
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