<template>
    <div class="bodyClass">
        <tra-menu :pageIndex="pageIndex"></tra-menu>
        <trip-list :tripList="tripList" style="width: 80%;margin-left: 10%;padding-bottom: 20px;min-height: 565px;margin-top: 20px"></trip-list>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    import TripList from "../../components/trip/tripList";
    export default {
        name: "index",
        components: {TripList, TraFooter, TraMenu},

        data(){
            return{
                pageIndex:'4',
                tripList:[{
                    tripid:'12345',
                    route:'北京环游',
                    startdate:'1231-11-11',
                    enddate:'5678-11-12',
                    traid:'',
                    traname:'携程',
                },{
                    tripid:'12346',
                    route:'北京环游',
                    startdate:'1231-11-11',
                    enddate:'5678-11-12',
                    traname:'携程',
                },{
                    tripid:'12347',
                    route:'北京环游',
                    startdate:'1231-11-11',
                    enddate:'5678-11-12',
                    traname:'携程',
                },{
                    tripid:'12348',
                    route:'北京环游',
                    startdate:'1231-11-11',
                    enddate:'5678-11-12',
                    traname:'携程',
                },{
                    tripid:'12349',
                    route:'北京环游',
                    startdate:'1231-11-11',
                    enddate:'5678-11-12',
                    traname:'携程',
                },],
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