<template>
    <div style="background: rgba(244, 247, 252, 0.82);">
        <tra-menu :pageIndex="pageIndex" :type="type" :nickname="nickname"></tra-menu>
        <div class="bodyClass">
                <strategy-detail :strid="strid" style="width: 50%;margin-left: 18%;display: inline-block" v-if="isShow"></strategy-detail>
                <recommended style="width: 20%;display: inline-block;float: right;margin-right: 140px"></recommended>
        </div>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../../components/TraMenu";
    import TraFooter from "../../../components/TraFooter";
    import StrategyDetail from "../../../components/strategy/strategyDetail";
    import Recommended from "../../../components/recommended";
    import Cookies from 'js-cookie';
    export default {
        name: "detail",
        components: {Recommended, StrategyDetail, TraFooter, TraMenu},
        data(){
            return{
                pageIndex:'3',
                strid:3,
                isShow:false,
                type:Cookies.get('type'),
                nickname:Cookies.get('nickname'),
            }
        },

        mounted(){
            this.strid = this.$route.params.strategyId;
            this.isShow=true;
        },


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