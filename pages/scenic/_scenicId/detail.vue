<template>
    <div style="background: rgba(244, 247, 252, 0.82);">
        <tra-menu :pageIndex="pageIndex" :type="type" :nickname="nickname"></tra-menu>
        <div class="bodyClass" v-if="isShow">
            <scenic-detail :sid="sid" style="width: 50%;margin-left: 18%;display: inline-block"></scenic-detail>
            <recommended style="width: 20%;display: inline-block;float: right;margin-right: 140px"></recommended>
            <comment :sid="sid" style="width: 73%;margin-left: 18%;margin-top: 20px"></comment>
            <el-backtop style="margin-bottom: 75px">
            </el-backtop>
        </div>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../../components/TraMenu";
    import ScenicDetail from "../../../components/sceinc/scenicDetail";
    import Recommended from "../../../components/recommended";
    import TraFooter from "../../../components/TraFooter";
    import Comment from "../../../components/sceinc/comment";
    import Cookies from 'js-cookie'
    export default {
        name: "detail",
        components: {Comment, TraFooter, Recommended, ScenicDetail, TraMenu},
        data(){
            return{
                pageIndex:'2',
                type:Cookies.get('type'),
                nickname:Cookies.get('nickname'),
                sid:1,
                isShow:false,
            }
        },

        mounted() {
            this.sid = this.$route.params.scenicId;
            console.log(this.sid)
            this.isShow=true;
        }
    }
</script>

<style scoped>

    .bodyClass{
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        /*background: -webkit-linear-gradient(bottom,rgb(250,255,235),#fffef3,white) no-repeat;*/
    }
</style>