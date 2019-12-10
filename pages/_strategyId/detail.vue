<template>
    <div>
        <tra-menu></tra-menu>
        <strategy-detail :strid="strid" style="width: 100%"></strategy-detail>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    import StrategyDetail from "../../components/strategyDetail";
    export default {
        name: "detail",
        components: {StrategyDetail, ScenicDetail, TraFooter, TraMenu},
        data(){
            return{
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