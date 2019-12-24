<template>
    <div class="bodyClass">
        <tra-menu :page-index="pageIndex"></tra-menu>
        <div>
            <search></search>
            <scenic-list :scenicList="scenicList" style="width: 80%;margin-left: 10%;padding-bottom: 20px;min-height: 505px;margin-top: 20px"></scenic-list>
        </div>

        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    import ScenicList from "../../components/sceinc/scenicList";
    import Search from "../../components/search";
    import API from '../../api'
    export default {
        name: "index",
        components: {Search, ScenicList, TraFooter, TraMenu},

        data(){
            return{
                pageIndex:'2',
                scenicList:[],

                scenicList2: [{
                    sid:'11111',
                    sname:'景区a',
                    province:'北京',
                    city:'北京',
                    introduction:'北京故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆，其文物收藏主要来源于清代宫中旧藏。',
                    worktime:'10:00-18:00',
                },{
                    sid:'11112',
                    sname:'景区a',
                    province:'北京',
                    city:'重庆',
                    introduction:'北京故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆，其文物收藏主要来源于清代宫中旧藏。',
                    worktime:'10:00-18:00',
                },{
                    sid:'11113',
                    sname:'景区a',
                    province:'北京',
                    city:'某某',
                    introduction:'北京故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆，其文物收藏主要来源于清代宫中旧藏。',
                    worktime:'10:00-18:00',
                },{
                    sid:'11114',
                    sname:'景区a',
                    province:'北京',
                    city:'某某',
                    introduction:'北京故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆，其文物收藏主要来源于清代宫中旧藏。',
                    worktime:'10:00-18:00',
                },{
                    sid:'11115',
                    sname:'景区a',
                    province:'北京',
                    city:'某某',
                    introduction:'北京故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆，其文物收藏主要来源于清代宫中旧藏。',
                    worktime:'10:00-18:00',
                },{
                    sid:'11116',
                    sname:'景区a',
                    province:'北京',
                    city:'某某',
                    introduction:'北京故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆，其文物收藏主要来源于清代宫中旧藏。',
                    worktime:'10:00-18:00',
                },{
                    sid:'11117',
                    sname:'景区a',
                    province:'北京',
                    city:'某某',
                    introduction:'北京故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆，其文物收藏主要来源于清代宫中旧藏。',
                    worktime:'10:00-18:00',
                },],
            }
        },

        methods:{
            getScenicList(){
                let data ={
                }
                API.getSceList(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.scenicList=res;
                    console.log(this.scenicList);
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
            this.getScenicList();
        }
    }
</script>

<style scoped>

    .bodyClass{
        display: flow;
        width: 100%;
        /*background: -webkit-linear-gradient(bottom,rgb(250,255,235),#fffef3,white) no-repeat;*/
        background: rgba(244, 247, 252, 0.82);
    }
</style>