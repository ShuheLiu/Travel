<template>
    <div>
        <tra-menu :pageIndex="pageIndex"></tra-menu>
        <div class="bodyClass">
            <strategy-detail :strid="strid"></strategy-detail>
        </div>

        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../../components/TraMenu";
    import TraFooter from "../../../components/TraFooter";
    import StrategyDetail from "../../../components/strategy/strategyDetail";
    export default {
        name: "detail",
        components: {StrategyDetail, TraFooter, TraMenu},
        data(){
            return{
                pageIndex:'3',
                strid:'',
            }
        },

        mounted(){
            this.strid = this.$route.params.strid;
        },


    }
</script>

<style scoped>

    .bodyClass{
        display: flow;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        /*background: -webkit-linear-gradient(bottom,rgb(250,255,235),#fffef3,white) no-repeat;*/
    }
</style>