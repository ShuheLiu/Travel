<template>
    <div class="bodyClass">
        <tra-menu :pageIndex="pageIndex" :type="type" :nickname="nickname"></tra-menu>
        <el-tabs style="width: 80%;margin-left: 10%;padding-bottom: 20px;min-height: 555px;margin-top: 10px" v-model="activeName">
            <el-tab-pane label="我的订票" name="first">
            </el-tab-pane>
            <el-tab-pane label="我的旅程" name="second">
            </el-tab-pane>
        </el-tabs>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    import API from '../../api';
    import Cookies from 'js-cookie';
    export default {
        name: "myOrder",
        components: {TraFooter, TraMenu},

        data(){
            return{
                type:Cookies.get('type'),
                nickname:Cookies.get('nickname'),
                activeName: 'first',
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
</style>