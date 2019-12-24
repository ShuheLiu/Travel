<template>
    <div class="bodyClass">
        <tra-menu></tra-menu>
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
                            <el-input placeholder="昵称" v-model="this.nickname"></el-input>
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
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>所在城市:</p></div>
                        <div class="titleinput row-right">
                            <el-input placeholder="所在城市" v-model="this.city"></el-input>
                        </div>
                    </div>

                    <el-button size="mid" type="primary" style="float: right;margin-top: 30px;margin-right: 30px" @click="getUpdateInfo()">确认修改</el-button>

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

                    <el-button size="mid" type="primary" style="float: right;margin-top: 30px;margin-right: 30px" @click="getNewPassword()">重置密码</el-button>

                </el-tab-pane>
            </el-tabs>
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
                password: '',
                asset_pw: '',
                again_pw: '',
                subTabIndex: 0,
                account:'',
                nickname:'',
                phone:'',
                city:'',

            }
        },

        methods:{
            getMyMsg(){
                let data={

                }


            }
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