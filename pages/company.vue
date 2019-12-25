<template>
    <div>
            <tra-menu :pageIndex="pageIndex"></tra-menu>
        <el-tabs :tab-position="tabPosition" style="height: 1200px; margin: 20px">
            <el-tab-pane label="信息管理" >           </el-tab-pane>
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
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>名称:</p></div>
                        <div class="titleinput row-right">
                            <el-input placeholder="请输入公司名称" v-model="this.nickname"></el-input>
                        </div>
                        <div style="color: red; margin-left: 10px; margin-top: 7px; font-size: 22px"><p>*</p></div>
                    </div>

                    <div style="margin-top: 15px; margin-left: 50px;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>联系电话:</p></div>
                        <div class="titleinput row-right">
                            <el-input placeholder="联系电话" v-model="this.phone"></el-input>
                        </div>
                    </div>

                    <div style="margin-top: 15px; margin-left: 50px;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>地址:</p></div>
                        <div class="titleinput row-right">
                            <el-input placeholder="请输入地址" v-model="this.city"></el-input>
                        </div>
                    </div>

                    <div style="float: right;margin-top: 30px;margin-right: 100px;width: 50px">
                        <el-button size="mid" type="primary" @click="changeAgencyMessage">确认修改</el-button>
                        <el-button type="text" style="padding-left: 10px" @click="dialogVisible=true">删除账号</el-button>
                    </div>

                </el-tab-pane>
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

                    <el-button size="mid" type="primary" style="float: right;margin-top: 30px;margin-right: 30px" @click="changeAgencyPwd">修改密码</el-button>

                </el-tab-pane>
            </el-tabs>

            <el-dialog
                    title="重要提示！"
                    :visible.sync="dialogVisible"
                    width="30%">
                <span>确认后该账号会被彻底注销，您确认吗？</span>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteAgency">确 定</el-button>
            </span>
            </el-dialog>
            <el-tab-pane label="景区管理" ></el-tab-pane>
            <scenic-list :scenicList="scenicList" style="width: 80%;margin-left: 10%;padding-bottom: 20px;min-height: 565px;margin-top: 20px"></scenic-list>
            <el-tab-pane label="数据中心" >
                <span style="font-size: 18px; padding: 60px">数据总览</span>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>门票售出数</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-tab-pane>
        </el-tabs>
        <tra-footer style="position:absolute;"></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../components/TraMenu";
    import TraFooter from "../components/TraFooter";
    import API from "../api/API_PRO";
    import Cookies from 'js-cookie'
    import ScenicList from "../components/sceinc/scenicList";
    export default {
        name: "company",
        components: {TraFooter, TraMenu},
        data() {
            return {
                tabPosition: 'left',
                type:Cookies.get('type'),
                nickname:Cookies.get('nickname'),
                password: '',
                asset_pw: '',
                again_pw: '',
                subTabIndex: 0,
                account:Cookies.get('account'),
                phone:'',
                city:'',
                dialogVisible:false,
                scenicList:[],
            }
        },
        methods:{
            getCompanyMessage(){
                let data={
                    account:Cookies.get('account'),
                    pwd:Cookies.get('pwd'),
                }

                API.getCompanyMessage(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.nickname=res[0].nickname;
                    this.city=res[0].city;
                    this.phone=res[0].phone;
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            },

            changeCompanyMessage(){
                let data={
                    account:Cookies.get('account'),
                    pwd:Cookies.get('pwd'),
                    nickname:this.nickname,
                    phone:this.phone,
                    city:this.city,
                }

                API.changeCompanyMessage(data).then(res => {
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
            },

            changeCompanyPwd(){
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

                    API.changeCompanyPwd(data).then(res => {
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

            deleteCompany(){
                let data={
                    account:Cookies.get('account'),
                    pwd:Cookies.get('pwd'),
                }

                API.deleteCompany(data).then(res => {
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
            this.getCompanyMessage();
        }
    }



</script>

<style scoped>
    .label{
        height: 200px;
        color: #1f6fb5;
    }
    .box-card{
        scroll-margin-top: 40px;
        margin-left: 50px;
        height: 250px;
        width: 400px;
    }
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