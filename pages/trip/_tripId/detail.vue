<template>
    <div class="bodyClass">
        <tra-menu :pageIndex="pageIndex" :type="type" :nickname="nickname"></tra-menu>
        <trip-detail :tripid="this.tripid" style="width: 60%;margin-left: 20%;display: inline-block;margin-top: 20px;margin-bottom: 15px"></trip-detail>
        <lagency-comment :tripid="this.tripid" style="width: 60%;margin-left: 20%;margin-top: 10px;margin-bottom: 20px"></lagency-comment>
        <el-backtop style="margin-bottom: 75px">
        </el-backtop>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../../components/TraMenu";
    import TraFooter from "../../../components/TraFooter";
    import TripDetail from "../../../components/trip/tripDetail";
    import LagencyComment from "../../../components/trip/lagencyComment";
    import Cookies from 'js-cookie';
    export default {
        name: "detail",
        components: {LagencyComment, TripDetail, TraFooter, TraMenu},
        data(){
            return{
                pageIndex:'4',
                tripid:1,
                type:Cookies.get('type'),
                nickname:Cookies.get('nickname'),
            }
        },

        mounted() {
            this.tripid = this.$route.params.tripId;
            //console.log(this.tripid);
        },
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