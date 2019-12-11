<template>
    <div>
        <tra-menu></tra-menu>
            <el-tabs type="border-card" style="margin-top: 20px">
                <el-tab-pane label="修改信息">
                    <div style="margin-top: 15px; margin-left: 50px; width: 100%;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>账号:</p></div>
                        <div class="titleinput row-right">
                            <el-input v-model="user_info.job_number" disabled></el-input>
                        </div>
                        <div style="color: red; margin-left: 10px; margin-top: 7px; font-size: 22px"><p>*</p></div>
                    </div>

                    <div style="margin-top: 15px; margin-left: 50px;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>姓名:</p></div>
                        <div class="titleinput row-right">
                            <el-input placeholder="姓名" v-model="user_info.name"></el-input>
                        </div>
                        <div style="color: red; margin-left: 10px; margin-top: 7px; font-size: 22px"><p>*</p></div>
                    </div>

                    <div style="margin-top: 15px; margin-left: 50px;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>邮箱:</p></div>
                        <div class="titleinput row-right">
                            <el-input placeholder="邮箱" v-model="user_info.email"></el-input>
                        </div>
                        <div style="color: red; margin-left: 10px; margin-top: 7px; font-size: 22px"><p>*</p></div>
                    </div>

                    <div style="margin-top: 15px; margin-left: 50px;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>联系电话:</p></div>
                        <div class="titleinput row-right">
                            <el-input placeholder="联系电话" v-model="user_info.phone"></el-input>
                        </div>
                    </div>

                    <div style="margin-top: 15px; margin-left: 50px;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>入职时间:</p></div>
                        <div class="titleinput row-right">
                            <el-input placeholder="入职时间" v-model="user_info.entry_time"></el-input>
                        </div>
                    </div>

                    <div style="margin-top: 15px; margin-left: 50px;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>职务:</p></div>
                        <div class="titleinput row-right">
                            <el-select placeholder="职务" v-model="user_info.position_id" style="width: 275px">
                                <el-option v-for="item in position_list" :key="item.id" :label="item.name" :value="item.id"></el-option>
                            </el-select>
                        </div>
                    </div>

                    <div style="margin-top: 15px; margin-left: 50px;" class="display-row">
                        <div class="filelabel row-left" style="margin-top: 5px; width: 100px"><p>单位:</p></div>
                        <div class="titleinput row-right">
                            <el-select placeholder="单位" v-model="user_info.unit_id" style="width: 275px">
                                <el-option v-for="item in unit_list" :key="item.id" :label="item.name" :value="item.id"></el-option>
                            </el-select>
                        </div>
                    </div>

                    <a style="margin-left: 50px" href="http://multi-file.tc4ldl.com/keyan/upload/setting/2019/11/041572851031/科研系统使用说明（用户）.pdf">用户手册</a>
                    <el-button size="mid" type="primary" style="margin-left: 100px; margin-top: 30px" @click="getUpdateInfo()">确认修改</el-button>

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

                    <el-button size="mid" type="primary" style="margin-left: 200px; margin-top: 30px" @click="getNewPassword()">重置密码</el-button>

                </el-tab-pane>
            </el-tabs>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    export default {
        name: "selfSetting",
        components: {TraFooter, TraMenu},

        data(){
            return {
                position: {
                    name: '个人设置',
                    haveBack: true,
                },

                user_info: {},
                position_list: {},
                unit_list: {},
                password: '',
                asset_pw: '',
                again_pw: '',
                subTabIndex: 0,
            }
        },
    }
</script>

<style scoped>

</style>