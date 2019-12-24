<template>
    <div class="bodyClass">
        <tra-menu :pageIndex="pageIndex" :type="type" :nickname="nickname"></tra-menu>
        <search></search>
        <trip-list :tripList="tripList" style="width: 80%;margin-left: 10%;padding-bottom: 20px;min-height: 565px;margin-top: 20px"></trip-list>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    import TripList from "../../components/trip/tripList";
    import Search from "../../components/search";
    import API from '../../api';
    import Cookies from 'js-cookie';
    export default {
        name: "index",
        components: {Search, TripList, TraFooter, TraMenu},

        data(){
            return{
                pageIndex:'4',
                tripList:[],
                type:Cookies.get('type'),
                nickname:Cookies.get('nickname'),
            }
        },

        methods:{
            getTrList(){
                let data ={
                }
                API.getTripList(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.tripList=res;
                    console.log(this.tripList);
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            },
        },

        mounted() {
            this.getTrList();
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