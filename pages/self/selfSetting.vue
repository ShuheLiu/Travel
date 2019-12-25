<template>
    <div class="bodyClass">
        <tra-menu :pageIndex="pageIndex" :type="type" :nickname="nickname"></tra-menu>
        <p style="font-size: 25px;margin-left: 20%;margin-top: 15px">个人中心</p>
            <el-tabs type="border-card" style="margin-top: 20px;width: 60%;margin-left: 20%;margin-bottom: 20px;min-height: 500px">
                <el-tab-pane label="修改信息">
                    <div style="margin-top: 15px; margin-left: 50px; width: 100%;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>账号:</p></div>
                        <div class="titleinput row-right">
                            <el-input v-model="this.account" disabled></el-input>
                        </div>
                        <div style="color: red; margin-left: 10px; margin-top: 7px; font-size: 22px"><p>*</p></div>
                    </div>

                    <div style="margin-top: 15px; margin-left: 50px;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>昵称:</p></div>
                        <div class="titleinput row-right">
                            <el-input placeholder="昵称" v-model="nickname1"></el-input>
                        </div>
                        <div style="color: red; margin-left: 10px; margin-top: 7px; font-size: 22px"><p>*</p></div>
                    </div>

                    <div style="margin-top: 15px; margin-left: 50px;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>联系电话:</p></div>
                        <div class="titleinput row-right">
                            <el-input placeholder="联系电话" v-model="phone"></el-input>
                        </div>
                    </div>

                    <div style="margin-top: 15px; margin-left: 50px;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>所在城市:</p></div>
                        <div class="titleinput row-right">
                            <el-input placeholder="所在城市" v-model="city"></el-input>
                        </div>
                    </div>

                    <div style="float: right;margin-top: 30px;margin-right: 100px;width: 50px">
                        <el-button size="mid" type="primary" @click="changeMyMsg">确认修改</el-button>
                        <el-button type="text" style="padding-left: 10px" @click="dialogVisible=true">删除账号</el-button>
                    </div>

                </el-tab-pane><!--
                <el-tab-pane label="修改密码">
                    <div style="margin-top: 15px; margin-left: 50px; width: 100%;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px;width: 100px;"><p>原始密码:</p></div>
                        <div class="titleinput row-right">
                            <label>
                                <el-input placeholder="原始密码" v-model="password"></el-input>
                            </label>
                        </div>
                        <div style="color: red; margin-left: 10px; margin-top: 7px; font-size: 22px"><p>*</p></div>
                    </div>

                    <div style="margin-top: 15px; margin-left: 50px;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px;width: 100px;"><p>新密码:</p></div>
                        <div class="titleinput row-right">
                            <label>
                                <el-input placeholder="新密码" v-model="asset_pw"></el-input>
                            </label>
                        </div>
                    </div>

                    <div style="margin-top: 15px; margin-left: 50px;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px;width: 100px;"><p>重复新密码:</p></div>
                        <div class="titleinput row-right">
                            <label>
                                <el-input placeholder="重复新密码" v-model="again_pw"></el-input>
                            </label>
                        </div>
                    </div>

                    <el-button size="mid" type="primary" style="float: right;margin-top: 30px;margin-right: 30px" @click="changePassword">修改密码</el-button>

                </el-tab-pane>-->
            </el-tabs>

        <el-dialog
                title="重要提示！"
                :visible.sync="dialogVisible"
                width="30%">
            <span>确认后该账号会被彻底注销，您确认吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteMyself">确 定</el-button>
            </span>
        </el-dialog>

        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    import API from '../../api'
    import Cookies from 'js-cookie'

    export default {
        name: "selfSetting",
        components: {TraFooter, TraMenu},

        data(){
            return {
                type:Cookies.get('type'),
                nickname:Cookies.get('nickname'),
                nickname1:'',
                password: '',
                asset_pw: '',
                again_pw: '',
                subTabIndex: 0,
                account:Cookies.get('account'),
                phone:'',
                city:'',
                dialogVisible:false,
            }
        },

        methods:{
            getMyMsg(){
                let data={
                    account:Cookies.get('account'),
                    pwd:Cookies.get('pwd'),
                }

                API.getMyMessage(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.nickname1=res[0].nickname;
                    this.city=res[0].city;
                    this.phone=res[0].tel;
                    Cookies.set('nickname', res[0].nickname);
                    this.nickname=Cookies.get('nickname');
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            },

            changeMyMsg(){
                let data={
                    account:Cookies.get('account'),
                    pwd:Cookies.get('pwd'),
                    nickname:this.nickname1,
                    tel:this.phone,
                    city:this.city,
                }

                API.changeMyMessage(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.getMyMsg();
                    alert(res);
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            },

            changePassword(){
                if(this.password !== Cookies.get('pwd')){
                    alert("原密码错误！")
                }else if(this.asset_pw !== this.again_pw){
                    alert("两次新密码不一致")
                }
                else{
                    let data={
                        account:Cookies.get('account'),
                        pwd:this.password,
                        newpwd:this.asset_pw,
                    }

                    API.changePwd(data).then(res => {
                        if(res.code){
                            alert(res.message);
                            return;
                        }
                        alert(res);
                    }).catch(msg => {
                        if(res.code){
                            alert(res.message);
                            return;
                        }
                        alert(msg)
                    })
                }
            },

            deleteMyself(){
                let data={
                    account:Cookies.get('account'),
                    pwd:Cookies.get('pwd'),
                }

                API.deleteself(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(res);
                    Cookies.set('type', '0');
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            }

        },

        mounted() {
            this.getMyMsg();
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

    .display-row {
        display: -webkit-flex; /* Safari */
        -webkit-justify-content: flex-start; /* Safari 6.1+ */
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }

    .row-left {
        width: 6%;
    }

    .row-right{
        width: 50%;
    }

</style>