<template>
    <div>
        <tra-menu :pageIndex="pageIndex"></tra-menu>
        <strategy-detail :strid="strid"></strategy-detail>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    import StrategyDetail from "../../components/strategyDetail";
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

</style>